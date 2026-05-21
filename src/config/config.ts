function env(key: string, fallback: string): string {
  return (import.meta.env[key] as string | undefined) ?? fallback;
}

export const CONFIG = {
  name: env("PUBLIC_SITE_USER_NAME", "Khaled"),
  title: env("PUBLIC_SITE_USER_TITLE", "Software Engineer"),
  description: env("PUBLIC_SITE_DESCRIPTION", "Full-stack software engineer building modern web experiences"),
  domain: env("PUBLIC_SITE_DOMAIN", "khaled.dev"),
  email: env("PUBLIC_EMAIL", "hello@khaled.dev"),
  phone: env("PUBLIC_PHONE", ""),
  whatsapp: env("PUBLIC_WHATSAPP", ""),

  social: [
    {
      platform: "github",
      label: "GitHub",
      ariaLabel: "Visit GitHub profile",
      url: env("PUBLIC_GITHUB_URL", "https://github.com"),
      username: env("PUBLIC_GITHUB_USERNAME", "@khaled"),
    },
    {
      platform: "linkedin",
      label: "LinkedIn",
      ariaLabel: "Visit LinkedIn profile",
      url: env("PUBLIC_LINKEDIN_URL", "https://linkedin.com"),
      username: env("PUBLIC_LINKEDIN_USERNAME", "/in/khaled"),
    },
    {
      platform: "email",
      label: "Email",
      ariaLabel: "Send an email",
      url: `mailto:${env("PUBLIC_EMAIL", "hello@khaled.dev")}`,
      username: env("PUBLIC_EMAIL_USERNAME", "Khaled Mohamed"),
    },
    {
      platform: "phone",
      label: "Phone",
      ariaLabel: "Call via phone",
      url: `tel:${env("PUBLIC_PHONE", "")}`,
      username: env("PUBLIC_PHONE_USERNAME", "Khaled Mohamed"),
    },
    {
      platform: "whatsapp",
      label: "WhatsApp",
      ariaLabel: "Send a WhatsApp message",
      url: `https://wa.me/${env("PUBLIC_WHATSAPP_NUMBER", "")}`,
      username: env("PUBLIC_WHATSAPP_USERNAME", "Khaled Mohamed"),
    },
    {
      platform: "x",
      label: "X",
      ariaLabel: "Visit X profile",
      url: env("PUBLIC_X_URL", "https://x.com"),
      username: env("PUBLIC_X_USERNAME", "@khaled"),
    },
  ],
} as const;
