"use client";

import { ContactBackground } from "@/components/sections/contact/contact-background";
import { ContactContent } from "@/components/sections/contact/contact-content";
import { ContactHeader } from "@/components/sections/contact/contact-header";
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
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <ContactBackground />

      <div className="relative">
        <ContactHeader />
        <ContactContent />
      </div>
    </motion.section>
  );
};

export default Contact;
