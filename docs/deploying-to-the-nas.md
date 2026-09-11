# Run the portfolio image on the NAS

GitHub Actions builds and tests a `linux/amd64` image for the Intel NAS. A
successful push to `master` publishes these tags to GitHub Container Registry:

- `ghcr.io/rahulrddy/portfolio:latest`
- `ghcr.io/rahulrddy/portfolio:<full-commit-sha>`

The workflow can also be run manually on `master`. Other branches and pull
requests build and test the image without publishing it. Publication uses
GitHub's built-in `GITHUB_TOKEN`; no registry secret needs to be added to the
repository. Wait for the first successful **Docker image** workflow before
trying to pull the image.

## First deployment

The NAS needs only `deploy/docker-compose.yml`, saved as `docker-compose.yml`
in its portfolio directory. Optionally copy `deploy/.env.example` to `.env`
beside it to choose an image tag or a different shared proxy network.

If the GHCR package is private, sign in on the NAS with the same GitHub account
used for Ledger. Use a personal access token (classic) with `read:packages`
and access to the portfolio package. Docker prompts for it as the password:

```sh
docker login ghcr.io -u rahulrddy
```

An existing GHCR login can be reused if it has access to this package. A public
package can be pulled without logging in.

The Compose file attaches to the existing `web` Docker network. Verify that
network exists and is the one used by the shared gateway:

```sh
docker network inspect web
docker compose pull
docker compose up -d
docker compose ps
```

No source checkout, Node installation, build step, volume, or Cloudflare token
is needed for the portfolio container. Keep the existing shared Cloudflare
gateway and its route to `http://portfolio:80`, preserving `/portfolio/` in
the forwarded URL. The portfolio does not bind NAS ports 80 or 443.

Open <https://rahuloriganti.com/portfolio/> after the container is healthy.

## Replace the current source-built deployment

Keep the current NAS directory and its Compose project name. First pull the
new image while the existing container continues to run:

```sh
docker pull ghcr.io/rahulrddy/portfolio:latest
docker inspect portfolio --format '{{ index .Config.Labels "com.docker.compose.project" }}'
```

Back up the current `docker-compose.yml`, then replace it with the file from
`deploy/docker-compose.yml`. The new file uses project name `portfolio`;
if the command above reports a different name, use that name with `-p`:

```sh
docker compose -p <existing-project-name> up -d
```

Compose replaces the existing `portfolio` service with the pulled image. The
container name and network remain the same, so the gateway can keep its route.
Expect a brief interruption while the container is replaced. Stop using
`scripts/deploy.sh` on the NAS; that script remains for source-based builds.

## Updates

After a successful image publication, run these in the NAS deployment directory
(include `-p <existing-project-name>` if needed as described above):

```sh
docker compose pull
docker compose up -d
docker compose ps
```

The NAS does not update automatically when an image is published. These
commands select when the new version runs.

## Pin or roll back a release

Set `IMAGE_TAG` in the `.env` beside the Compose file to a previously published
full commit SHA, then run the update commands. Set it back to `latest` to
follow the newest published image again.

## Build and test locally

```sh
docker build --platform linux/amd64 -t portfolio:local .
sh scripts/test-image.sh portfolio:local
```

To inspect the production image in a browser:

```sh
docker run --rm -p 127.0.0.1:8080:80 portfolio:local
```

Open <http://127.0.0.1:8080/portfolio/>. The root Compose file and
`scripts/deploy.sh` still support a source build on the shared `web` network.
