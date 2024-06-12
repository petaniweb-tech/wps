"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormSchema, FormDataSchema } from "../../lib/schema";
import ContactFormEmail from "../../emails/contact-form-email";

type Inputs = z.infer<typeof FormDataSchema>;

export async function addEntry(data: Inputs) {
	const result = FormDataSchema.safeParse(data);

	if (result.success) {
		return { success: true, data: result.data };
	}

	if (result.error) {
		return { success: false, error: result.error.format() };
	}
}

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
	const result = ContactFormSchema.safeParse(data);

	if (result.success) {
		const { name, email, phone, message } = result.data;
		try {
			const data = await resend.emails.send({
				from: "onboarding@resend.dev",
				to: ["ilyas@petaniweb.com", "aliffirdaus@petaniweb.com"],
				subject: "WPS Contact Form",
				text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "-"}\nMessage: ${message}`,
				react: ContactFormEmail({
					name,
					email,
					phone: phone || "-",
					message,
				}),
			});
			return { success: true, data };
		} catch (error) {
			return { success: false, error };
		}
	}

	if (result.error) {
		return { success: false, error: result.error.format() };
	}
}
