"use client";

import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import { SparklesIcon } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

const ServiceBadges = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="services"
      aria-label="Our Services"
      className="relative scroll-mt-24 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background elements */}
      <div className="via-forge-secondary/5 absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-transparent"></div>
      <div className="absolute top-1/2 -left-20 h-64 w-64 -translate-y-1/2 rounded-full bg-gradient-to-tr from-blue-600/10 to-transparent blur-3xl"></div>
      <div className="from-forge-secondary/10 absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-gradient-to-bl to-transparent blur-3xl"></div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat opacity-5"></div>

      {/* Frosted dividers */}
      <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
      <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>

      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="mb-16 flex flex-col gap-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="border-forge-secondary/30 bg-forge-secondary/10 text-forge-secondary mx-auto flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium tracking-wider uppercase"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SparklesIcon className="h-4 w-4" />
            What We Offer
          </motion.span>

          <motion.h2
            className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-4xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our Specialized Services
          </motion.h2>

          <motion.p
            className="mx-auto max-w-2xl text-neutral-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We deliver cutting-edge solutions tailored to your specific needs.
            Our expertise spans across multiple domains to help your business
            succeed.
          </motion.p>
        </motion.div>

        {/* Services grid */}
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
      </div>
    </motion.section>
  );
};

export default ServiceBadges;
