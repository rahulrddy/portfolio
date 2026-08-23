#!/bin/sh
set -e
cd "$(dirname "$0")/.."
docker run --rm -v "$(pwd):/repo" -w /repo alpine/git pull
docker compose up -d --build
docker ps
