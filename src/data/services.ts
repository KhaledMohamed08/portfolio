export interface Service {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export const SERVICES: Service[] = [
  {
    title: "Web Development",
    description:
      "End-to-end web applications built with modern frameworks and best practices — from landing pages to complex SaaS platforms.",
    icon: "</>",
    features: [
      "Responsive SPAs & SSR apps",
      "REST & GraphQL APIs",
      "Authentication & authorization",
      "Performance optimization",
    ],
  },
  {
    title: "Mobile & Cross-Platform",
    description:
      "Native-feeling mobile applications for iOS and Android using React Native and modern tooling.",
    icon: "📱",
    features: [
      "Cross-platform apps",
      "Push notifications",
      "Offline-first architecture",
      "App store deployment",
    ],
  },
  {
    title: "Cloud Infrastructure",
    description:
      "Scalable, secure cloud architecture on AWS, GCP, or self-hosted — including CI/CD pipelines and container orchestration.",
    icon: "☁",
    features: [
      "Docker & Kubernetes",
      "CI/CD automation",
      "Infrastructure as Code",
      "Monitoring & alerting",
    ],
  },
  {
    title: "Technical Consulting",
    description:
      "Code reviews, architecture audits, tech stack selection, and mentoring for engineering teams.",
    icon: "◇",
    features: [
      "Architecture review",
      "Code quality audits",
      "Team mentoring",
      "Migration planning",
    ],
  },
];
