import Script from "next/script";
import { ServerCookieChecker } from "./server-cookie-checker";

/**
 * Server Component that conditionally loads analytics scripts
 * based on the user's cookie consent preferences and Google Consent Mode
 *
 * Note: With Google Consent Mode v2, we don't need to completely prevent the script from loading.
 * Instead, Google scripts will respect the consent state set by the GoogleConsentScript.
 * However, we still use ServerCookieChecker as an additional layer of protection to ensure
 * no unnecessary scripts are loaded without consent.
 */
export function AnalyticsScripts() {
  return (
    <ServerCookieChecker
      category="analytics"
      fallback={
        // You can optionally render a placeholder or nothing when analytics is disabled
        <></>
      }
    >
      {/* 
        Google Analytics is now controlled by Consent Mode in layout.tsx
        Additional analytics scripts can be added here if needed
      */}
      <Script
        id="analytics-initialization"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Custom analytics initialization code
            console.log('Analytics script loaded with consent');
          `,
        }}
      />
    </ServerCookieChecker>
  );
}
