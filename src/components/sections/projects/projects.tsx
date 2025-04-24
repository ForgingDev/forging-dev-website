"use client";

import { ProjectsBackground } from "@/components/sections/projects/projects-background";
import { ProjectsGrid } from "@/components/sections/projects/projects-grid";
import { ProjectsHeader } from "@/components/sections/projects/projects-header";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative scroll-mt-24 px-4 py-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <ProjectsBackground />

      <div className="relative">
        <ProjectsHeader />
        <ProjectsGrid />
      </div>
    </motion.section>
  );
};

export default Projects;
