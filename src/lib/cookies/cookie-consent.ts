import type { CookieCategories, CookieConsent } from "@/data/types";
import { CONSENT_KEY } from "@/lib/constants";

// Default consent configuration
const defaultConsent: CookieConsent = {
  status: "pending",
  categories: {
    essential: true, // Essential cookies always allowed
    analytics: false,
    functional: false,
    targeting: false,
  },
  timestamp: 0,
};

/**
 * Get stored cookie consent from localStorage
 */
export const getStoredConsent = (): CookieConsent => {
  if (typeof window === "undefined") {
    return defaultConsent;
  }

  try {
    const storedConsent = window.localStorage.getItem(CONSENT_KEY);
    return storedConsent ? JSON.parse(storedConsent) : defaultConsent;
  } catch (error) {
    console.error("Error reading cookie consent from localStorage", error);
    return defaultConsent;
  }
};

/**
 * Save cookie consent to localStorage
 */
export const saveConsent = (consent: CookieConsent): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(
      CONSENT_KEY,
      JSON.stringify({
        ...consent,
        timestamp: Date.now(),
      }),
    );
  } catch (error) {
    console.error("Error saving cookie consent to localStorage", error);
  }
};

/**
 * Accept all cookies
 */
export const acceptAllCookies = (): void => {
  saveConsent({
    status: "accepted",
    categories: {
      essential: true,
      analytics: true,
      functional: true,
      targeting: true,
    },
    timestamp: Date.now(),
  });
};

/**
 * Accept only essential cookies
 */
export const rejectAllCookies = (): void => {
  saveConsent({
    status: "rejected",
    categories: {
      essential: true, // Essential cookies always allowed
      analytics: false,
      functional: false,
      targeting: false,
    },
    timestamp: Date.now(),
  });
};

/**
 * Save custom cookie preferences
 */
export const saveCustomPreferences = (categories: CookieCategories): void => {
  saveConsent({
    status:
      categories.analytics || categories.functional || categories.targeting
        ? "accepted"
        : "rejected",
    categories: {
      ...categories,
      essential: true, // Essential cookies are always allowed
    },
    timestamp: Date.now(),
  });
};

/**
 * Check if specific cookie category is allowed
 */
export const isCategoryAllowed = (
  category: keyof CookieCategories,
): boolean => {
  const consent = getStoredConsent();

  // Essential cookies are always allowed
  if (category === "essential") return true;

  // For other categories, check if status is accepted and the specific category is true
  return consent.status === "accepted" && consent.categories[category];
};

/**
 * Reset cookie consent to default (pending) state
 */
export const resetConsent = (): void => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch (error) {
    console.error("Error resetting cookie consent", error);
  }
};
