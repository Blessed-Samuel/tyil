import { z } from "zod";

export const formSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 3 characters long*" })
    .regex(/^[a-zA-Z\s]+$/, {
      message: "Full name should only contain letters and spaces*",
    }),

  email: z
    .string()
    .email({
      message: "Invalid email address*",
    })
    .refine(val => val.endsWith("gmail.com"), {
      message: "Email must end with gmail.com",
    }),
});

export type FormSchemaType = z.infer<typeof formSchema>;
