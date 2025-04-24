import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// SEO optimization utilities
export const seoConfig = {
  // Base domain info
  domain: "forging-dev.com",
  url: "https://www.forging-dev.com",

  // Business information - used across site for consistent NAP data
  business: {
    name: "Forging Dev",
    location: "Sibiu, Romania",
    phone: "+40727892022",
    email: "forgingdev37@outlook.com",
    socials: {
      instagram: "https://www.instagram.com/forging_dev/",
    },
    geo: {
      latitude: "45.7983",
      longitude: "24.1256",
    },
  },

  // Tracking IDs (replace with actual IDs when available)
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX", // Replace with actual GA4 ID
    googleTagManagerId: "GTM-XXXXXXX", // Replace with actual GTM ID if used
  },
};
