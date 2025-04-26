import {
  generateSchemaMetadata,
  navigationSchema,
  organizationSchema,
  privacyPolicySchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";
import PrivacyPolicy from "./components/privacy-policy";

export const metadata: Metadata = {
  title: "Privacy Policy | Forging Dev | Web & App Development Studio",
  description:
    "Learn how Forging Dev handles your personal data and respects your privacy. Our privacy policy outlines our data collection, use, and protection practices.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Forging Dev",
    description:
      "Learn how Forging Dev handles your personal data and respects your privacy.",
    url: "https://www.forging-dev.com/privacy-policy",
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
    privacyPolicySchema,
  ]),
};

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;
