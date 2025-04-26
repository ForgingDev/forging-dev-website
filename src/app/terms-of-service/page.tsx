import {
  generateSchemaMetadata,
  navigationSchema,
  organizationSchema,
  termsOfServiceSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";
import TermsOfService from "./components/terms-of-service";

export const metadata: Metadata = {
  title: "Terms of Service | Forging Dev | Web & App Development Studio",
  description:
    "Read the terms and conditions governing the use of Forging Dev's services. Our terms of service outline the rules, guidelines, and legal agreements between you and our company.",
  alternates: {
    canonical: "/terms-of-service",
  },
  openGraph: {
    title: "Terms of Service | Forging Dev",
    description:
      "Read the terms and conditions governing the use of Forging Dev's services.",
    url: "https://www.forging-dev.com/terms-of-service",
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
    termsOfServiceSchema,
  ]),
};

const TermsOfServicePage = () => {
  return <TermsOfService />;
};

export default TermsOfServicePage;
