import { z } from "zod";

export const FormDataSchema = z.object({
	name: z.string().min(1, { message: "Name is required." }),
	phone: z.string().optional(),
	message: z.string().min(1, { message: "Message is required." }),
});

export const ContactFormSchema = z.object({
	name: z.string().min(1, { message: "Name is required." }),
	email: z
		.string()
		.min(1, { message: "Email is required." })
		.email("Invalid email."),
	phone: z.string().optional(),
	message: z.string().min(1, { message: "Message is required." }),
});
