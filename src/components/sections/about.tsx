"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 px-4 py-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Background elements */}
      <div className="absolute top-0 -left-32 h-72 w-72 rounded-full bg-gradient-to-tr from-blue-600/10 to-transparent blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-gradient-to-bl from-purple-600/10 to-transparent blur-3xl"></div>

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
            Who We Are
          </motion.span>

          <div className="flex flex-col gap-6 md:flex-row md:justify-between">
            <motion.h2
              id="about-heading"
              className="max-w-md bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 100,
              }}
            >
              About Us
            </motion.h2>
            <div className="md:w-2/3">
              <motion.p
                className="text-lg leading-relaxed text-neutral-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "circOut" }}
              >
                At{" "}
                <span className="text-forge-secondary font-medium">
                  Forging Dev
                </span>
                , we specialize in delivering top-tier services designed to meet
                the unique needs of our clients. With years of industry
                expertise, we offer tailored solutions that drive success and
                growth.
              </motion.p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h3 className="mb-4 text-xl font-semibold">Our Approach</h3>
            <p className="text-neutral-400">
              Our commitment to quality, customer satisfaction, and innovation
              sets us apart in the industry. Whether you&apos;re seeking
              personalized Software Development or Digital Business Growth, we
              are your trusted partner for reliable, high-quality results.
            </p>
            <div className="from-forge-secondary/80 mt-4 h-px w-24 bg-gradient-to-r to-transparent"></div>
          </motion.div>

          <motion.div
            className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h3 className="mb-4 text-xl font-semibold">Our Values</h3>
            <p className="text-neutral-400">
              We focus on building lasting relationships through exceptional
              service and transparent communication. Our development processes
              emphasize reliability, security, and scalable solutions tailored
              to your specific needs.
            </p>
            <div className="from-forge-secondary/80 mt-4 h-px w-24 bg-gradient-to-r to-transparent"></div>
          </motion.div>
        </div>

        <motion.dl
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3"
          aria-label="Company Stats"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.3, delayChildren: 0.6 }}
        >
          {[
            { value: "4+", label: "Years of Experience" },
            { value: "6+", label: "Happy Clients" },
            { value: "10+", label: "Projects Completed" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-6 backdrop-blur-sm"
              variants={{
                hidden: { opacity: 0, scale: 0.5, y: 20 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                },
              }}
            >
              <dt className="from-forge-secondary bg-gradient-to-r to-white bg-clip-text text-5xl font-bold text-transparent">
                {stat.value}
              </dt>
              <dd className="mt-2 text-center text-neutral-400">
                {stat.label}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </motion.section>
  );
};

export default About;
