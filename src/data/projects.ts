export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const PROJECTS: Project[] = [
  {
    title: "CloudDeploy",
    description:
      "A self-hosted CI/CD platform with real-time pipeline monitoring, rollback support, and multi-cloud deployment targets.",
    tech: ["Go", "React", "Docker", "Kubernetes", "PostgreSQL"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "DataStream",
    description:
      "Real-time data pipeline engine capable of processing 100k+ events/sec with pluggable transforms and sinks.",
    tech: ["Rust", "Apache Kafka", "WebSockets", "TypeScript"],
    repoUrl: "https://github.com",
  },
  {
    title: "CodeRev",
    description:
      "AI-powered code review assistant that analyzes PRs for bugs, performance issues, and style violations.",
    tech: ["Python", "FastAPI", "OpenAI", "React", "Redis"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    title: "Vault",
    description:
      "End-to-end encrypted secrets manager with CLI, API, and web UI for teams and organizations.",
    tech: ["TypeScript", "Node.js", "MongoDB", "Encryption", "React"],
    repoUrl: "https://github.com",
  },
];
