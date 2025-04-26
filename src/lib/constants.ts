import type { FAQType, ProjectType, ServiceType } from "@/data/types";

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
  {
    text: "Mobile Apps",
    link: "/services/#mobile",
    icon: "smartphone",
  },
];

export const PROJECTS: ProjectType[] = [
  {
    title: "Liquid Money",
    description: "Online Pawn Shop",
    image: "/projects/liquid_money.webp",
    link: "https://magazin.liquidmoney.ro/",
    tags: ["E-Commerce", "Finance"],
  },
  {
    title: "Diamantenklotz",
    description: "Jewelry E-Commerce",
    image: "/projects/diamantenklotz.webp",
    link: "https://diamantenklotz.de/",
    tags: ["Jewelry", "E-Commerce"],
  },
];

export const FAQS: FAQType[] = [
  {
    question: "What services does Forging Dev offer?",
    answer:
      "Forging Dev specializes in custom web development, e-commerce solutions, and application development. We create tailored digital solutions to help businesses establish their online presence, automate processes, and grow their digital footprint.",
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The timeline varies depending on the complexity of the project. A simple informational website can take 2-4 weeks, while complex e-commerce platforms or custom applications might take 2-6 months. During our initial consultation, we'll provide a more accurate timeline based on your specific requirements.",
  },
  {
    question: "What is your development process?",
    answer:
      "Our development process includes: 1) Discovery & Requirements Gathering, 2) Planning & Design, 3) Development, 4) Testing & Quality Assurance, 5) Deployment, and 6) Ongoing Support & Maintenance. We maintain transparent communication throughout the entire process.",
  },
  {
    question: "Do you provide ongoing maintenance and support?",
    answer:
      "Yes, we offer ongoing maintenance and support packages to ensure your website or application remains secure, up-to-date, and functioning optimally. These packages can be customized based on your specific needs and budget.",
  },
  {
    question: "How do you handle website security?",
    answer:
      "Security is a top priority for us. We implement industry best practices including HTTPS encryption, regular security updates, secure coding practices, data encryption, and protection against common vulnerabilities like SQL injection and XSS attacks. We also offer ongoing security monitoring for our maintenance clients.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "Absolutely! We build websites with SEO best practices in mind, including proper semantic HTML, schema markup, optimized page speed, and mobile responsiveness. We can also provide guidance on content strategy and integrate analytics tools to help you track and improve your online performance.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We work with modern technologies like React, Next.js, TypeScript, and Tailwind CSS for frontend development. For backend solutions, we utilize Node.js, Express, and various database technologies depending on project requirements. We&apos;re technology-agnostic and choose the best tools for each specific project.",
  },
  {
    question: "How much does a website or application cost?",
    answer:
      "Every project is unique, and pricing depends on complexity, features, timeline, and specific requirements. We provide detailed quotes after our initial consultation. We&apos;re transparent about costs and work to find solutions that fit your budget while meeting your business objectives.",
  },
  {
    question: "Do you work with clients internationally?",
    answer:
      "Yes, while we&apos;re based in Romania, we work with clients worldwide. We use modern communication tools and project management software to ensure smooth collaboration regardless of location or time zone differences.",
  },
  {
    question: "How can I get started with Forging Dev?",
    answer:
      "Getting started is easy! Simply contact us through our website&apos;s contact form, email, or phone. We&apos;ll schedule an initial consultation to discuss your project, understand your goals, and determine how we can best help you achieve them.",
  },
];

export const NAVBAR_LINKS = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "About",
    href: "/#about",
  },
  {
    text: "Services",
    href: "/#services",
  },
  {
    text: "Portfolio",
    href: "/#portfolio",
  },
];

export const CONSENT_KEY = "forging-dev-cookie-consent";
export const CONSENT_STATUS_COOKIE = "forging-dev-cookie-consent-status";
export const CONSENT_CATEGORIES_COOKIE =
  "forging-dev-cookie-consent-categories";
export const COOKIE_EXPIRY_DAYS = 365; // 1 year
