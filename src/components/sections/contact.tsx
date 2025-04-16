import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import React from "react";

const Contact = (): React.ReactElement => {
  return (
    <section
      aria-labelledby="contact-heading"
      id="contact"
      className="scroll-mt-24"
    >
      <div className="flex flex-col gap-8 md:flex-row md:justify-between">
        <h2
          id="contact-heading"
          className="mb-4 text-4xl font-semibold md:mb-0"
        >
          Let&apos;s talk
        </h2>
        <p className="w-full text-right text-neutral-400 md:w-1/2">
          We&apos;d love to hear from you. Whether you have a question, a
          project in mind, or just want to discuss, we&apos;re here to help.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ContactForm />
        </div>
        <ContactInfo />
      </div>
    </section>
  );
};

export default Contact;
