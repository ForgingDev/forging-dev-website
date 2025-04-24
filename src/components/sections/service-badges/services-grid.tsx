"use client";

import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import { DynamicIcon } from "lucide-react/dynamic";
import { containerVariants, itemVariants } from "./animation-variants";

export const ServicesGrid = () => {
  return (
    <motion.div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {SERVICES.map((item, index: number) => (
        <motion.a
          href={item.link}
          key={`${item.text}-${index}`}
          className="group"
          variants={itemVariants}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.2 },
          }}
        >
          <div className="hover:border-forge-secondary/30 relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-white/8 hover:shadow-lg">
            {/* Animated gradient accent on hover */}
            <div className="from-forge-secondary absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r to-blue-500 transition-all duration-500 group-hover:w-full"></div>

            <div className="flex items-center gap-4">
              <div className="from-forge-secondary/20 group-hover:from-forge-secondary/40 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br to-blue-600/20 transition-all duration-300 group-hover:to-blue-600/40 group-hover:shadow-md">
                <DynamicIcon
                  name={item.icon}
                  className="group-hover:text-forge-secondary size-6 text-white transition-all duration-300"
                  aria-hidden="true"
                  focusable="false"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  {item.text}
                </h3>
                <p className="mt-1 text-sm text-neutral-400">
                  Explore our {item.text.toLowerCase()} solutions
                </p>
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};
