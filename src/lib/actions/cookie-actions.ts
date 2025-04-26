"use server";

import type { CookieCategories, CookieConsentStatus } from "@/data/types";
import {
  CONSENT_CATEGORIES_COOKIE,
  CONSENT_STATUS_COOKIE,
  COOKIE_EXPIRY_DAYS,
} from "@/lib/constants";
import { cookies } from "next/headers";

/**
 * Save cookie consent status using Next.js cookies API
 */
export async function saveConsentCookies(
  status: CookieConsentStatus,
  categories: CookieCategories,
) {
  const cookieStore = await cookies();

  // Save consent status
  cookieStore.set(CONSENT_STATUS_COOKIE, status, {
    maxAge: COOKIE_EXPIRY_DAYS * 24 * 60 * 60, // Convert days to seconds
    path: "/",
    sameSite: "strict",
    httpOnly: true, // Makes it inaccessible to client-side JavaScript
    secure: process.env.NODE_ENV === "production", // HTTPS only in production
  });

  // Save cookie categories as a JSON string
  cookieStore.set(CONSENT_CATEGORIES_COOKIE, JSON.stringify(categories), {
    maxAge: COOKIE_EXPIRY_DAYS * 24 * 60 * 60,
    path: "/",
    sameSite: "strict",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  });

  return { success: true };
}

/**
 * Accept all cookies using Next.js cookies API
 */
export async function acceptAllServerCookies() {
  const categories: CookieCategories = {
    essential: true,
    analytics: true,
    functional: true,
    targeting: true,
  };

  return saveConsentCookies("accepted", categories);
}

/**
 * Reject all non-essential cookies using Next.js cookies API
 */
export async function rejectAllServerCookies() {
  const categories: CookieCategories = {
    essential: true,
    analytics: false,
    functional: false,
    targeting: false,
  };

  return saveConsentCookies("rejected", categories);
}

/**
 * Save custom cookie preferences using Next.js cookies API
 */
export async function saveCustomServerPreferences(
  categories: CookieCategories,
) {
  const status: CookieConsentStatus =
    categories.analytics || categories.functional || categories.targeting
      ? "accepted"
      : "rejected";

  return saveConsentCookies(status, {
    ...categories,
    essential: true, // Always enable essential cookies
  });
}

/**
 * Delete cookie consent cookies using Next.js cookies API
 */
export async function clearConsentCookies() {
  const cookieStore = await cookies();
  cookieStore.delete(CONSENT_STATUS_COOKIE);
  cookieStore.delete(CONSENT_CATEGORIES_COOKIE);

  return { success: true };
}

/**
 * Check if consent cookies exist server-side
 */
export async function getServerConsent() {
  const cookieStore = await cookies();
  const statusCookie = cookieStore.get(CONSENT_STATUS_COOKIE);
  const categoriesCookie = cookieStore.get(CONSENT_CATEGORIES_COOKIE);

  if (!statusCookie || !categoriesCookie) {
    return null;
  }

  try {
    const status = statusCookie.value as CookieConsentStatus;
    const categories = JSON.parse(categoriesCookie.value) as CookieCategories;

    return {
      status,
      categories,
      timestamp: Date.now(),
    };
  } catch (error) {
    console.error("Error parsing consent cookies", error);
    return null;
  }
}
