"use client";

import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";

export const ProjectsGrid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3"
      role="region"
      aria-roledescription="carousel"
      aria-label="Project Gallery"
      aria-live="polite"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.15 }}
    >
      {PROJECTS.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </motion.div>
  );
};
