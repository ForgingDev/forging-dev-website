import type { IconName } from "lucide-react/dynamic";

export type ServiceType = {
  text: string;
  link: string;
  icon: IconName;
};

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
};

export type FAQType = {
  question: string;
  answer: string;
};
