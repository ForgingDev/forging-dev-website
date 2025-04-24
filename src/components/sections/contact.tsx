"use client";

import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import { motion } from "framer-motion";
import React from "react";

const Contact = (): React.ReactElement => {
  return (
    <motion.section
      aria-labelledby="contact-heading"
      id="contact"
      className="relative scroll-mt-24 px-4 py-20"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gradient-to-bl from-purple-600/10 to-transparent blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-600/10 to-transparent blur-3xl"></div>

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
            Get In Touch
          </motion.span>

          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <motion.h2
              id="contact-heading"
              className="max-w-md bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-3xl font-bold text-transparent md:text-5xl"
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
              Let&apos;s talk
            </motion.h2>
            <motion.p
              className="w-full text-neutral-400 md:w-1/3 md:text-right"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              We&apos;d love to hear from you. Whether you have a question, a
              project in mind, or just want to discuss, we&apos;re here to help.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="lg:col-span-2">
            <motion.div
              className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="from-forge-secondary/5 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-tr to-blue-600/5"></div>
              <ContactForm />
            </motion.div>
          </div>

          <motion.div
            className="relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="to-forge-secondary/5 absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-blue-600/5"></div>
            <ContactInfo />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
