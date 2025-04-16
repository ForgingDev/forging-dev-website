import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "First name must be at least 2 characters" })
    .max(50, { message: "First name must be at most 50 characters" }),
  lastName: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters" })
    .max(50, { message: "Last name must be at most 50 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z
    .string()
    .min(6, { message: "Phone number must be at least 6 digits" })
    .max(20, { message: "Phone number must be at most 20 digits" })
    .regex(/^[0-9+\-\s()]*$/, { message: "Please enter a valid phone number" })
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be at most 1000 characters" }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
