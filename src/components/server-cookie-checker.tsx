import {
  CONSENT_CATEGORIES_COOKIE,
  CONSENT_STATUS_COOKIE,
} from "@/lib/constants";
import { cookies } from "next/headers";

type CookieCategory = "essential" | "analytics" | "functional" | "targeting";

/**
 * Server Component that checks if a specific cookie category is allowed
 * This runs server-side and can be used for server-side conditional logic
 */
export async function ServerCookieChecker({
  category,
  children,
  fallback = null,
}: {
  category: CookieCategory;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  // Essential cookies are always allowed
  if (category === "essential") {
    return <>{children}</>;
  }

  // Check if consent cookie exists for other categories
  const cookieStore = await cookies();
  const statusCookie = cookieStore.get(CONSENT_STATUS_COOKIE);
  const categoriesCookie = cookieStore.get(CONSENT_CATEGORIES_COOKIE);

  if (!statusCookie || !categoriesCookie) {
    return <>{fallback}</>;
  }

  try {
    const status = statusCookie.value;
    const categories = JSON.parse(categoriesCookie.value);

    // Check if this category is allowed
    if (status === "accepted" && categories[category] === true) {
      return <>{children}</>;
    }

    return <>{fallback}</>;
  } catch (error) {
    console.error("Error parsing consent cookies", error);
    return <>{fallback}</>;
  }
}
