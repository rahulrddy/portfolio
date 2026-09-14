export type ExpertiseScene = {
  eyebrow: string;
  title: string;
  description: string;
  technologies: readonly string[];
};

export const expertiseScenes: readonly ExpertiseScene[] = [
  {
    eyebrow: '01 — EXPERIENCE',
    title: '10+ years building production software.',
    description:
      'Delivering maintainable applications across complex product and enterprise environments, from user experience through backend integration.',
    technologies: ['Product Engineering', 'Enterprise Applications', 'Delivery', 'Performance'],
  },
  {
    eyebrow: '02 — EXPERTISE',
    title: 'Frontend engineering with depth.',
    description:
      'Building scalable interfaces, reusable systems, and high-quality user experiences with a strong focus on architecture and maintainability.',
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'HTML', 'CSS'],
  },
  {
    eyebrow: '03 — FULL STACK',
    title: 'From interface to API to data.',
    description:
      'Working across application boundaries to design clear contracts, reliable services, and end-to-end product experiences.',
    technologies: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'Databases'],
  },
  {
    eyebrow: '04 — ENGINEERING',
    title: 'Systems that are built to evolve.',
    description:
      'Thinking beyond individual features: architecture, performance, testing, delivery pipelines, and the trade-offs that keep software healthy.',
    technologies: ['System Design', 'Architecture', 'Testing', 'CI/CD', 'Performance'],
  },
  {
    eyebrow: '05 — LEADERSHIP',
    title: 'Engineering beyond implementation.',
    description:
      'Creating clarity around technical decisions, raising engineering quality, and helping teams move from requirements to durable solutions.',
    technologies: ['Technical Direction', 'Code Reviews', 'Mentoring', 'Ownership', 'Collaboration'],
  },
] as const;
