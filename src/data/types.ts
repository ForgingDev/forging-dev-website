import type { IconName } from "lucide-react/dynamic";

export type ServiceType = {
  text: string;
  link: string;
  icon: IconName;
};

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
};

export type FAQType = {
  question: string;
  answer: string;
};

export type CookieConsentStatus = "accepted" | "rejected" | "pending";
export type CookieCategories = {
  essential: boolean; // Always true, can't be rejected
  analytics: boolean;
  functional: boolean;
  targeting: boolean;
};

export type CookieConsent = {
  status: CookieConsentStatus;
  categories: CookieCategories;
  timestamp: number;
};
