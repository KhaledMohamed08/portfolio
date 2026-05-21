export interface CVExperience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface CVEducation {
  degree: string;
  school: string;
  period: string;
}

export interface CVSection {
  title: string;
  items: string[];
}

export interface CVData {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  experience: CVExperience[];
  education: CVEducation[];
  sections?: CVSection[];
  pdfPath: string;
}

export const CV: CVData = {
  name: "Khaled Mohamed",
  title: "Software Engineer",
  email: "hello@khaled.dev",
  phone: "+1234567890",
  location: "Remote",
  summary:
    "Full-stack software engineer with expertise in PHP, TypeScript, and modern web frameworks. Passionate about clean code, system design, and building performant applications.",
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Tech Corp",
      period: "2022 — Present",
      highlights: [
        "Architected and built a microservices platform serving 100k+ users",
        "Led migration from monolithic Laravel app to scalable cloud infrastructure",
        "Mentored 4 junior engineers through code reviews and pair programming",
      ],
    },
    {
      role: "Full-Stack Developer",
      company: "Digital Agency",
      period: "2020 — 2022",
      highlights: [
        "Delivered 15+ client projects using React, Node.js, and Laravel",
        "Reduced average page load time by 45% through performance optimization",
        "Built reusable component library adopted across all projects",
      ],
    },
    {
      role: "Junior Developer",
      company: "StartupXYZ",
      period: "2018 — 2020",
      highlights: [
        "Developed RESTful APIs and real-time features with WebSockets",
        "Wrote unit and integration tests achieving 90% code coverage",
      ],
    },
  ],
  education: [
    {
      degree: "B.Sc. in Computer Science",
      school: "University of Technology",
      period: "2014 — 2018",
    },
  ],
  sections: [
    {
      title: "Skills",
      items: [
        "PHP, TypeScript, JavaScript, Python",
        "React, Next.js, Astro, Laravel, Tailwind CSS",
        "MySQL, PostgreSQL, MongoDB, Redis",
        "Docker, Kubernetes, AWS, CI/CD",
      ],
    },
    {
      title: "Languages",
      items: [
        "English (Professional working proficiency)",
        "Arabic (Native)",
      ],
    },
  ],
  pdfPath: "/pdf/Khaled_Mohamed_CV.pdf",
};

export function cvToMarkdown(cv: CVData): string {
  const lines: string[] = [];

  lines.push(`# ${cv.name}`);
  lines.push("");
  lines.push(`**${cv.title}**`);
  lines.push("");
  lines.push(`${cv.email} | ${cv.phone} | ${cv.location}`);
  lines.push("");
  lines.push("---");
  lines.push("");
  lines.push(cv.summary);
  lines.push("");

  lines.push("## Experience");
  lines.push("");

  for (const exp of cv.experience) {
    lines.push(`### ${exp.role} — ${exp.company}`);
    lines.push(`*${exp.period}*`);
    lines.push("");
    for (const h of exp.highlights) {
      lines.push(`- ${h}`);
    }
    lines.push("");
  }

  lines.push("## Education");
  lines.push("");

  for (const edu of cv.education) {
    lines.push(`### ${edu.degree} — ${edu.school}`);
    lines.push(`*${edu.period}*`);
    lines.push("");
  }

  if (cv.sections) {
    for (const section of cv.sections) {
      lines.push(`## ${section.title}`);
      lines.push("");
      for (const item of section.items) {
        lines.push(`- ${item}`);
      }
      lines.push("");
    }
  }

  return lines.join("\n");
}
