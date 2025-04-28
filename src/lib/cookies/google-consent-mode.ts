"use client";

import { CookieConsent } from "@/data/types";

/**
 * Initialize Google Consent Mode v2 with default settings
 * This should be called as early as possible, before any Google scripts are loaded
 */
export const initGoogleConsentMode = (): void => {
  if (typeof window === "undefined") return;

  // Access window.dataLayer and window.gtag without type checking
  // since we're working with the global Google Tag properties
  const dataLayer = window.dataLayer || [];
  window.dataLayer = dataLayer;

  // Define gtag function
  const gtag = function (...args: unknown[]) {
    dataLayer.push(args);
  };
  window.gtag = gtag;

  // Set default consent to denied for all features (per EU recommendations)
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 2000, // Wait for 2 seconds for consent to be determined
  });

  // Enable URL passthrough to preserve some measurement capabilities
  gtag("set", "url_passthrough", true);

  // Enable ads_data_redaction when ad_storage is denied
  gtag("set", "ads_data_redaction", true);
};

/**
 * Update Google Consent Mode based on user consent selections
 * This should be called whenever user consent status changes
 */
export const updateGoogleConsentMode = (consent: CookieConsent): void => {
  if (typeof window === "undefined") return;

  // Access gtag without type checking
  const gtag = window.gtag;
  if (!gtag) return;

  const { categories } = consent;

  // Map our consent categories to Google's Consent Mode v2 categories
  gtag("consent", "update", {
    ad_storage: categories.ad_storage ? "granted" : "denied",
    ad_user_data: categories.ad_user_data ? "granted" : "denied",
    ad_personalization: categories.ad_personalization ? "granted" : "denied",
    analytics_storage: categories.analytics_storage ? "granted" : "denied",
  });
};

/**
 * Map legacy cookie categories to Google Consent Mode v2 categories
 * This helps ensure backward compatibility with existing cookie consent settings
 */
export const mapCookieCategoriesToConsentMode = (
  consent: CookieConsent,
): CookieConsent => {
  const { categories } = consent;

  // Create a new consent object with explicit mappings to Google Consent Mode categories
  return {
    ...consent,
    categories: {
      ...categories,
      // Map from our legacy categories to Google Consent Mode categories
      analytics_storage: categories.analytics,
      ad_storage: categories.targeting,
      ad_user_data: categories.targeting,
      ad_personalization: categories.targeting,
    },
  };
};
