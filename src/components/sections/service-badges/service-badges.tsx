"use client";

import { ServicesBackground } from "@/components/sections/service-badges/services-background";
import { ServicesGrid } from "@/components/sections/service-badges/services-grid";
import { ServicesHeader } from "@/components/sections/service-badges/services-header";
import { motion } from "framer-motion";

const ServiceBadges = () => {
  return (
    <motion.section
      id="services"
      aria-label="Our Services"
      className="relative scroll-mt-24 overflow-hidden py-20 xl:overflow-visible"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <ServicesBackground />

      <div className="container mx-auto px-4">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </motion.section>
  );
};

export default ServiceBadges;
