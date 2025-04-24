"use client";

import { ProcessBackground } from "@/components/sections/process/process-background";
import { ProcessHeader } from "@/components/sections/process/process-header";
import { ProcessSteps } from "@/components/sections/process/process-steps";
import { motion } from "framer-motion";

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
      <ProcessBackground />

      <div className="relative">
        <ProcessHeader />
        <ProcessSteps />
      </div>
    </motion.section>
  );
};

export default Process;
