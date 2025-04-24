"use client";

import { PROJECTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const projectVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

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
      {/* Background elements */}
      <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-gradient-to-br from-purple-600/10 to-transparent blur-3xl"></div>
      <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-gradient-to-tl from-blue-600/10 to-transparent blur-3xl"></div>

      <div className="relative">
        <motion.div
          className="mb-20 flex flex-col gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-forge-secondary text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Portfolio
          </motion.span>

          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <motion.h2
              id="portfolio-heading"
              className="max-w-2xl bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              Crafting digital experiences that matter
            </motion.h2>
            <motion.p
              className="w-full text-neutral-400 md:w-1/3 md:text-right"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Explore our recent work and see how we deliver impactful solutions
              that drive success for our clients.
            </motion.p>
          </div>
        </motion.div>

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
            <motion.div
              key={project.title}
              custom={index}
              variants={projectVariants}
              className={`${index % 3 === 1 ? "md:mt-12" : index % 3 === 2 ? "md:mt-24" : ""}`}
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden rounded-xl"
              >
                <div className="absolute inset-0 z-10 bg-gradient-to-tl from-blue-600/30 to-purple-600/30 opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>

                <div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900/80 shadow-xl backdrop-blur-sm transition-all duration-300 group-hover:shadow-blue-500/20">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={600}
                      height={450}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="group-hover:text-forge-secondary text-xl font-semibold transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm text-neutral-400">
                      {project.description ||
                        "Innovative digital solution crafted with precision and creativity."}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {/* Simple tag display using project type */}
                        {project.tags?.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs text-neutral-300"
                          >
                            {tag}
                          </span>
                        )) || (
                          <span className="rounded-full bg-neutral-800 px-2.5 py-0.5 text-xs text-neutral-300">
                            Case Study
                          </span>
                        )}
                      </div>

                      <span className="text-forge-secondary text-sm font-medium opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        View Project →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
