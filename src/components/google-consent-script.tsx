"use client";

import { useCookieConsent } from "@/lib/cookies/use-cookie-consent";
import { useEffect } from "react";

export function GoogleConsentScript() {
  const { consent, isLoaded } = useCookieConsent();

  // Initialize and update Google Consent Mode based on consent status
  useEffect(() => {
    // Only run when consent is loaded
    if (!isLoaded) return;

    // Define gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      (window.dataLayer as unknown[]).push(args);
    }
    window.gtag = gtag;

    // Map our consent categories to Google's consent mode
    const analytics_storage = consent?.categories.analytics
      ? "granted"
      : "denied";
    const ad_storage = consent?.categories.targeting ? "granted" : "denied";
    const ad_user_data = consent?.categories.targeting ? "granted" : "denied";
    const ad_personalization = consent?.categories.targeting
      ? "granted"
      : "denied";

    // Set defaults when no consent is given (pending)
    if (consent?.status === "pending") {
      gtag("consent", "default", {
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied",
        analytics_storage: "denied",
        wait_for_update: 2000, // Wait for 2 seconds for consent to be determined
      });
    } else {
      // Update consent based on user selection
      gtag("consent", "update", {
        ad_storage,
        ad_user_data,
        ad_personalization,
        analytics_storage,
      });
    }

    // Enable URL passthrough to preserve some measurement capabilities
    gtag("set", "url_passthrough", true);

    // Enable ads_data_redaction when ad_storage is denied
    gtag("set", "ads_data_redaction", true);
  }, [consent, isLoaded]);

  return null;
}

// Add a declaration for window.dataLayer and window.gtag
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}
