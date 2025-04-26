import {
  cookiePolicySchema,
  generateSchemaMetadata,
  navigationSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";
import CookiePolicy from "./components/cookie-policy";

export const metadata: Metadata = {
  title: "Cookie Policy | Forging Dev | Web & App Development Studio",
  description:
    "Learn about how Forging Dev uses cookies and similar technologies on our website. Understand what cookies we use, why we use them, and how you can control them.",
  alternates: {
    canonical: "/cookie-policy",
  },
  openGraph: {
    title: "Cookie Policy | Forging Dev",
    description:
      "Learn about how Forging Dev uses cookies and similar technologies on our website.",
    url: "https://www.forging-dev.com/cookie-policy",
    siteName: "Forging Dev",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Forging Dev - Software Development Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  ...generateSchemaMetadata([
    organizationSchema,
    navigationSchema,
    websiteSchema,
    cookiePolicySchema,
  ]),
};

const CookiePolicyPage = () => {
  return <CookiePolicy />;
};

export default CookiePolicyPage;
