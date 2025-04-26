import Script from "next/script";
import { ServerCookieChecker } from "./server-cookie-checker";

/**
 * Server Component that conditionally loads analytics scripts
 * based on the user's cookie consent preferences
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
      {/* Example analytics scripts that will only be included if analytics cookies are allowed */}
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Your analytics code here
            console.log('Analytics script loaded');
            // This would be your actual analytics initialization code
            // For example Google Analytics or similar
          `,
        }}
      />
    </ServerCookieChecker>
  );
}
