"use client";

import { motion } from "framer-motion";
import {
  GitGraphIcon,
  LightbulbIcon,
  NotebookPenIcon,
  UsersIcon,
} from "lucide-react";

const processSteps = [
  {
    icon: LightbulbIcon,
    title: "Consultation & Discovery",
    description:
      "We start by understanding your goals and challenges, gathering insights to craft a tailored solution.",
  },
  {
    icon: NotebookPenIcon,
    title: "Planning & Strategy",
    description:
      "Based on the discovery phase, we create a detailed plan with clear timelines and objectives for success.",
  },
  {
    icon: GitGraphIcon,
    title: "Execution & Delivery",
    description:
      "Our team works diligently to implement the solution, ensuring high standards and attention to detail, while keeping you in the loop every step of the way.",
  },
  {
    icon: UsersIcon,
    title: "Review & Feedback",
    description:
      "After delivery, we review the results all together, analyze the feedback and make any necessary adjustments for continuous improvement.",
  },
];

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Process = () => {
  return (
    <motion.section
      aria-labelledby="process-heading"
      className="relative px-4 py-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Background elements */}
      <div className="absolute top-0 -right-20 h-64 w-64 rounded-full bg-gradient-to-bl from-purple-600/10 to-transparent blur-3xl"></div>
      <div className="absolute bottom-0 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-600/10 to-transparent blur-3xl"></div>

      <div className="relative">
        <motion.div
          className="mb-16 flex flex-col gap-4"
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
            How We Work
          </motion.span>

          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <motion.h2
              id="process-heading"
              className="max-w-md bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-3xl font-semibold text-transparent md:text-5xl"
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
              Our Process
            </motion.h2>
            <motion.p
              className="w-full text-neutral-400 md:w-1/3 md:text-right"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              We follow a structured approach to ensure every project is
              delivered with excellence and meets your specific needs.
            </motion.p>
          </div>
        </motion.div>

        <div className="relative">
          {/* Timeline connector */}
          <div className="from-forge-secondary/70 via-forge-secondary/30 absolute top-0 bottom-0 left-6 hidden w-px bg-gradient-to-b to-transparent md:block"></div>

          <div className="flex flex-col gap-16">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col gap-8 md:flex-row md:items-start"
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={stepVariants}
                >
                  <div className="relative">
                    <div className="from-forge-secondary/20 flex h-16 w-16 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br to-transparent shadow-lg backdrop-blur-sm">
                      <IconComponent className="text-forge-secondary size-8" />
                    </div>
                    <span className="bg-forge-secondary absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold shadow-md">
                      {index + 1}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col gap-3">
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="max-w-xl text-neutral-400">
                      {step.description}
                    </p>
                    <div className="from-forge-secondary/80 mt-2 h-px w-24 bg-gradient-to-r to-transparent"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Process;
