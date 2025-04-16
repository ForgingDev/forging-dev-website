import type { ProjectType, ServiceType } from "@/data/types";

export const CONTACT_INFO = {
  phone: "+40727892022",
  email: "forgingdev37@outlook.com",
  instagram: "https://www.instagram.com/forging_dev/",
  whatsapp: "https://wa.me/40727892022",
};

export const SERVICES: ServiceType[] = [
  {
    text: "Website Development",
    link: "/services/#website",
    icon: "laptop",
  },
  {
    text: "E-Commerce Solutions",
    link: "/services/#ecommerce",
    icon: "shopping-cart",
  },
  {
    text: "Personalized SaaS",
    link: "/services/#saas",
    icon: "cloud",
  },
  {
    text: "UI/UX Design",
    link: "/services/#uiux",
    icon: "pen-tool",
  },
  {
    text: "Strategic SEO",
    link: "/services/#seo",
    icon: "search",
  },
];

export const PROJECTS: ProjectType[] = [
  {
    title: "Liquid Money",
    description: "Online Pawn Shop",
    image: "/projects/liquid_money.webp",
    link: "https://magazin.liquidmoney.ro/",
  },
  {
    title: "Diamantenklotz",
    description: "Jewelry E-Commerce",
    image: "/projects/diamantenklotz.webp",
    link: "https://diamantenklotz.de/",
  },
];
