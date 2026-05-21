import { CONFIG } from "../config/config";

export const SITE = {
  name: CONFIG.name,
  title: `${CONFIG.name} | ${CONFIG.title}`,
  description: CONFIG.description,
  domain: CONFIG.domain,
  email: CONFIG.email,
  phone: CONFIG.phone,
} as const;
