"use client";

import { AboutBackground } from "@/components/sections/about/about-background";
import { AboutHeader } from "@/components/sections/about/about-header";
import { AboutStats } from "@/components/sections/about/about-stats";
import { AboutValues } from "@/components/sections/about/about-values";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 overflow-hidden px-4 py-20 xl:overflow-visible"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <AboutBackground />

      <div className="relative">
        <AboutHeader />
        <AboutValues />
        <AboutStats />
      </div>
    </motion.section>
  );
};

export default About;
