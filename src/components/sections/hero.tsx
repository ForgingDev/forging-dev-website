"use client";

import { Button } from "@/components/ui/button";
import { CONTACT_INFO } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  CodeIcon,
  FoldersIcon,
  InstagramIcon,
  MailIcon,
  MessageCircleIcon,
  MessageCircleMoreIcon,
  RocketIcon,
  SparklesIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const socialIconVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.8,
      },
    },
  };

  const floatingIconVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-[90vh] items-center"
    >
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

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          {/* Left content column */}
          <div className="lg:w-3/5">
            <motion.div
              className="border-forge-secondary/30 bg-forge-secondary/10 mb-6 inline-flex items-center gap-x-2 rounded-full border px-3 py-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SparklesIcon className="text-forge-secondary h-4 w-4" />
              <span className="text-forge-secondary text-sm font-medium">
                Crafting Digital Excellence
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl"
              id="hero-title"
            >
              <span className="block">Software Development</span>
              <span className="mt-2 block">
                We{" "}
                <span className="from-forge-secondary bg-gradient-to-r to-blue-400 bg-clip-text text-transparent">
                  Get It Right
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-300"
            >
              We help businesses evolve with modern, high-performance software
              that enhances user experience, boosts productivity, and drives
              growth. Innovation meets execution, all in one place.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 flex flex-col gap-5 sm:flex-row"
            >
              <motion.div variants={itemVariants}>
                <Link href="/#contact">
                  <Button className="border-forge-primary bg-forge-primary hover:bg-forge-primary/90 shadow-forge-primary/20 hover:shadow-forge-primary/40 w-full border-2 px-6 py-6 text-lg font-medium text-white shadow-lg transition-all duration-300 focus:ring-2 focus:outline-none sm:w-auto">
                    Get in Touch
                    <MessageCircleMoreIcon
                      className="ml-2 size-5"
                      role="img"
                      aria-label="Get in touch icon"
                    />
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Link href="/#portfolio">
                  <Button className="w-full border-2 border-white/20 bg-white/5 px-6 py-6 text-lg backdrop-blur-sm hover:bg-white/10 focus:ring-2 focus:ring-white/20 focus:outline-none sm:w-auto">
                    Explore our Portfolio
                    <FoldersIcon
                      className="ml-2 size-5"
                      role="img"
                      aria-label="Portfolio icon"
                    />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              variants={socialIconVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 flex items-center gap-6"
            >
              <span className="text-sm font-medium text-neutral-400">
                Connect with us:
              </span>

              <div className="flex gap-4">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-all duration-300"
                >
                  <Link
                    href={CONTACT_INFO.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 focus:outline-none"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <MessageCircleIcon
                      className="group-hover:text-forge-secondary size-5 text-neutral-300 transition-all"
                      role="img"
                      aria-label="WhatsApp chat"
                    />
                  </Link>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-all duration-300"
                >
                  <Link
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 focus:outline-none"
                    aria-label="Email us"
                  >
                    <MailIcon
                      className="group-hover:text-forge-secondary size-5 text-neutral-300 transition-all"
                      role="img"
                      aria-label="Email"
                    />
                  </Link>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="transition-all duration-300"
                >
                  <Link
                    href={CONTACT_INFO.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:bg-white/10 focus:outline-none"
                    aria-label="Visit our Instagram"
                  >
                    <InstagramIcon
                      className="group-hover:text-forge-secondary size-5 text-neutral-300 transition-all"
                      role="img"
                      aria-label="Instagram"
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right illustration/mockup */}
          <motion.div
            className="mt-12 hidden lg:mt-0 lg:block lg:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              <div className="from-forge-secondary/30 absolute inset-0 -z-10 rounded-full bg-gradient-to-tr to-blue-600/20 blur-[60px]"></div>

              <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-xl backdrop-blur-sm">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src="/hero-illustration.svg"
                    alt="Software development illustration"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
