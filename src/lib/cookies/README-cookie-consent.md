# Cookie Consent System for Forging Dev Website

This document outlines how to use the GDPR-compliant cookie consent system implemented on the Forging Dev website.

## Overview

The cookie consent system provides:

- A user-friendly cookie banner that appears on first visit
- Options to accept all, reject all, or customize cookie preferences
- Storage of consent in the browser's localStorage and server-side cookies
- Server-side cookie validation using Next.js cookies API
- Utilities to check if specific cookie categories are allowed
- React hook for accessing consent status in components
- Smooth animations using Framer Motion

## Components & Files

The system consists of the following files:

1. **`/src/components/ui/cookie-banner.tsx`**: The UI component for the cookie consent banner with Framer Motion animations
2. **`/src/lib/cookie-consent.ts`**: Client-side utilities for managing localStorage consent
3. **`/src/lib/cookie-actions.ts`**: Server Actions for managing server-side cookies using Next.js API
4. **`/src/lib/use-cookie-consent.ts`**: React hook for accessing consent in components
5. **`/src/components/server-cookie-checker.tsx`**: Server Component for conditional content based on cookie consent
6. **`/src/components/analytics-script.tsx`**: Example integration for analytics scripts

## How to Use

### 1. Client-Side Consent Checking

To check if a specific cookie category is allowed in client components:

```tsx
import { isCategoryAllowed } from "@/lib/cookie-consent";

// For basic JS/TS files
if (isCategoryAllowed("analytics")) {
  // Initialize analytics
}
```

### 2. Using the React Hook in Client Components

For React client components that need to know about consent:

```tsx
import { useCookieConsent } from "@/lib/use-cookie-consent";

const AnalyticsComponent = () => {
  const { isCategoryAllowed, isConsentGiven } = useCookieConsent();

  useEffect(() => {
    if (isCategoryAllowed("analytics")) {
      // Initialize analytics
    }
  }, [isCategoryAllowed]);

  return null;
};
```

### 3. Server-Side Consent Checking

For server components, use the `ServerCookieChecker` component:

```tsx
import { ServerCookieChecker } from "@/components/server-cookie-checker";

export default function Page() {
  return (
    <div>
      <h1>My Page</h1>

      {/* Content that only renders if analytics cookies are accepted */}
      <ServerCookieChecker
        category="analytics"
        fallback={<p>Analytics disabled</p>}
      >
        <div>Analytics-dependent content here</div>
      </ServerCookieChecker>
    </div>
  );
}
```

### 4. Conditional Script Loading

The example `AnalyticsScripts` component demonstrates how to conditionally load scripts:

```tsx
// This is already implemented in the codebase and included in layout.tsx
import { AnalyticsScripts } from "@/components/analytics-script";

// Add it to your layout
export default function Layout({ children }) {
  return (
    <html>
      <body>
        {children}
        <CookieBanner />
        <AnalyticsScripts />{" "}
        {/* Only loads if analytics cookies are accepted */}
      </body>
    </html>
  );
}
```

## Cookie Categories

The system supports four cookie categories:

1. **Essential**: Always enabled, can't be disabled (required for the site to function)
2. **Analytics**: For tracking user behavior and site performance
3. **Functional**: For enhanced features and personalization
4. **Targeting**: For advertising and marketing purposes

## How It Works

The system uses two storage mechanisms to ensure comprehensive consent management:

1. **Client-side localStorage**: For UI state and immediate user consent
2. **Server-side cookies**: Using Next.js cookies API for server-side validation

When a user makes a choice:

1. The consent is saved to localStorage for client-side use
2. A Server Action is called to set HTTP cookies for server-side use
3. Server Components can then check these cookies to determine if content should be loaded

## Customization

To modify the cookie banner text or appearance:

- Edit `/src/components/ui/cookie-banner.tsx`

To customize animations, update the Framer Motion properties:

```tsx
<motion.div
  initial={{ y: 100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: 100, opacity: 0 }}
  transition={{ type: "spring", stiffness: 300, damping: 30 }}
  // ...
>
```

To add new cookie categories or change default settings:

- `/src/lib/cookie-consent.ts` (client-side)
- `/src/lib/cookie-actions.ts` (server-side)

## Next.js Cookies API

This implementation leverages the Next.js 15 cookies API:

- **Server-side validation**: Using `cookies()` in Server Components
- **Cookie management**: Using `cookies().set()` in Server Actions
- **Server-client sync**: Keeping localStorage and HTTP cookies in sync
