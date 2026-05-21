import { CONFIG } from "../config/config";

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
  ariaLabel: string;
  username: string;
}

export const SOCIAL_LINKS: SocialLink[] = [...CONFIG.social];
