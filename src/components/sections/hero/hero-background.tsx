"use client";

import { motion } from "framer-motion";
import { CodeIcon, RocketIcon } from "lucide-react";
import { floatingIconVariants } from "./animation-variants";

export const HeroBackground = () => {
  return (
    <>
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 h-full w-full bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>

        <motion.div
          className="bg-forge-secondary/20 absolute top-10 right-32 h-64 w-64 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        <motion.div
          className="absolute bottom-20 -left-10 h-72 w-72 rounded-full bg-blue-600/20 blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-10"></div>
      </div>

      {/* Floating code elements */}
      <motion.div
        className="text-forge-secondary/40 absolute top-24 right-[15%] hidden lg:block"
        variants={floatingIconVariants}
        animate="animate"
      >
        <CodeIcon size={50} />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-[15%] hidden text-blue-500/40 lg:block"
        variants={floatingIconVariants}
        animate="animate"
        transition={{
          delay: 1.5,
          duration: 4,
        }}
      >
        <RocketIcon size={40} />
      </motion.div>
    </>
  );
};
