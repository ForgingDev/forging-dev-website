import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.forging-dev.com";
  const date = new Date();

  // Main page with highest priority
  const mainPage = {
    url: baseUrl,
    lastModified: date,
    changeFrequency: "weekly" as const,
    priority: 1.0,
  };

  // Any additional standalone pages (like privacy policy, terms, etc.)
  const additionalPages = [
    "/faq",
    "/privacy-policy",
    "/terms-of-service",
    "/cookie-policy",
    "/gdpr",
    // Add actual pages here if you create them in the future
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [mainPage, ...additionalPages];
}
