import {
  generatePageMetadata,
  navigationSchema,
  organizationSchema,
  privacyPolicySchema,
  websiteSchema,
} from "@/lib/schema";
import PrivacyPolicy from "./components/privacy-policy";

export const metadata = generatePageMetadata(
  "Privacy Policy",
  "Learn how Forging Dev handles your personal data and respects your privacy. Our privacy policy outlines our data collection, use, and protection practices.",
  [organizationSchema, navigationSchema, websiteSchema, privacyPolicySchema],
  "/privacy-policy",
);

const PrivacyPolicyPage = () => {
  return <PrivacyPolicy />;
};

export default PrivacyPolicyPage;
