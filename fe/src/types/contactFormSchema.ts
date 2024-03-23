import z from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string({
      required_error: 'Name is required',
    })
    .min(1, {
      message: 'Name is required',
    }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email({
      message: 'Invalid email address',
    }),
  subject: z
    .string({
      required_error: 'Subject is required',
    })
    .min(1, {
      message: 'Subject is required',
    }),
  text: z
    .string({
      required_error: 'Message is required',
    })
    .min(1, {
      message: 'Message is required',
    })
    .max(1000, {
      message: 'Message is too long',
    }),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
