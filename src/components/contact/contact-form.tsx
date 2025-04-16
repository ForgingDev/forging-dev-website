"use client";

import { Button } from "@/components/ui/button";
import { FormLabel } from "@/components/ui/form-label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validation/contact-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SendIcon } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = (): React.ReactElement => {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues): Promise<void> => {
    setIsSubmitting(true);
    try {
      // In a real implementation, you would send the form data to your API
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form data submitted:", data);
      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-6"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="space-y-1.5">
          <FormLabel htmlFor="firstName">First Name</FormLabel>
          <Input
            id="firstName"
            placeholder="John"
            {...register("firstName")}
            error={errors.firstName?.message}
            disabled={isSubmitting}
          />
        </div>

        <div className="space-y-1.5">
          <FormLabel htmlFor="lastName">Last Name</FormLabel>
          <Input
            id="lastName"
            placeholder="Doe"
            {...register("lastName")}
            error={errors.lastName?.message}
            disabled={isSubmitting}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <FormLabel htmlFor="email">Email Address</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="john.doe@example.com"
          {...register("email")}
          error={errors.email?.message}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-1.5">
        <FormLabel htmlFor="phone" optional>
          Phone Number
        </FormLabel>
        <Input
          id="phone"
          placeholder="+1 (555) 123-4567"
          {...register("phone")}
          error={errors.phone?.message}
          disabled={isSubmitting}
        />
      </div>

      <div className="space-y-1.5">
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          placeholder="Tell us about your project or inquiries..."
          {...register("message")}
          error={errors.message?.message}
          disabled={isSubmitting}
        />
      </div>

      {submitSuccess && (
        <div className="rounded-md bg-green-500/10 p-3 text-center text-sm text-green-500">
          Thank you! Your message has been sent successfully.
        </div>
      )}

      <div className="flex justify-start">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="border-forge-primary bg-forge-primary/10 hover:bg-forge-primary/20 text-forge-primary focus:ring-forge-primary w-fit border-2 py-5 text-base focus:ring-2 focus:outline-none"
        >
          Send Message
          <SendIcon className="ml-1 size-4" aria-hidden="true" />
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
