import About from "@/components/sections/about/about";
import Contact from "@/components/sections/contact/contact";
import Hero from "@/components/sections/hero/hero";
import Process from "@/components/sections/process/process";
import Projects from "@/components/sections/projects/projects";
import ServiceBadges from "@/components/sections/service-badges/service-badges";
import {
  generateSchemaMetadata,
  localBusinessSchema,
  navigationSchema,
  organizationSchema,
  professionalServiceSchema,
  servicesSchema,
  websiteSchema,
} from "@/lib/schema";
import { Metadata } from "next";

export const metadata: Metadata = {
  ...generateSchemaMetadata([
    organizationSchema,
    professionalServiceSchema,
    localBusinessSchema,
    servicesSchema,
    websiteSchema,
    navigationSchema,
  ]),
};

const Homepage = () => {
  return (
    <main>
      <Hero />
      <ServiceBadges />
      <About />
      <Process />
      <Projects />
      <Contact />
    </main>
  );
};

export default Homepage;
