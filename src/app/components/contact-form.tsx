"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ContactFormSchema } from "../../../lib/schema";
import { sendEmail } from "@/app/_action";
import { useToast } from "./ui/use-toast";

export type ContactFormInputs = z.infer<typeof ContactFormSchema>;

interface ContactFormProps {
	translations: {
		formName: string;
		namePlaceholder: string;
		emailPlaceholder: string;
		phonePlaceholder: string;
		messagePlaceholder: string;
		submit: string;
		toastSuccess: string;
		toastError: string;
	};
}

export default function ContactForm({ translations }: ContactFormProps) {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<ContactFormInputs>({
		resolver: zodResolver(ContactFormSchema),
	});

	const { toast } = useToast();

	const processForm: SubmitHandler<ContactFormInputs> = async (data) => {
		const result = await sendEmail(data);

		if (result?.success) {
			console.log({ data: result.data });
			toast({
				description: translations.toastSuccess,
			});
			reset();
			return;
		}

		// Toast Error //
		toast({
			description: translations.toastError,
		});
		console.log(result?.error);
	};

	return (
		<section className="flex flex-col bg-white w-[48%] h-auto px-8 pt-[26px] pb-8">
			<div className="flex w-fit border-b-[5px] pr-20 lg:pb-[14px] border-primary">
				<h1 className="lg:text-2xl font-semibold text-center">
					{translations.formName}
				</h1>
			</div>
			{/* <-- === Form Start === --> */}
			<form
				onSubmit={handleSubmit(processForm)}
				className="flex flex-col w-full mt-8 gap-5"
			>
				{/* <-- == Name Start == --> */}
				<div>
					<input
						type="text"
						placeholder={translations.namePlaceholder}
						autoComplete="off"
						required
						{...register("name")}
						className="w-full px-4 pt-[11px] pb-[13px] bg-inherit placeholder-[#aaaaaa] text-black text-base border border-[#aaaaaa] focus:outline-primary"
					/>
					{errors.name?.message && (
						<p className="ml-1 mt-1 text-sm text-red-400">
							{errors.name.message}
						</p>
					)}
				</div>
				{/* <-- == Name End == --> */}

				{/* <-- == Email Start == --> */}
				<div>
					<input
						type="email"
						placeholder={translations.emailPlaceholder}
						autoComplete="off"
						required
						{...register("email")}
						className="w-full px-4 pt-[11px] pb-[13px] bg-inherit placeholder-[#aaaaaa] text-black text-base border border-[#aaaaaa] focus:outline-primary"
					/>
					{errors.email?.message && (
						<p className="ml-1 mt-1 text-sm text-red-400">
							{errors.email.message}
						</p>
					)}
				</div>
				{/* <-- == Email End == --> */}

				{/* <-- == Phone Start == --> */}
				<div>
					<input
						type="tel"
						placeholder={translations.phonePlaceholder}
						autoComplete="off"
						{...register("phone")}
						className="w-full px-4 pt-[11px] pb-[13px] bg-inherit placeholder-[#aaaaaa] text-black text-base border border-[#aaaaaa] focus:outline-primary"
					/>
				</div>
				{/* <-- == Phone End == --> */}

				{/* <-- == Message Start == --> */}
				<div>
					<textarea
						placeholder={translations.messagePlaceholder}
						autoComplete="off"
						rows={6}
						{...register("message")}
						className="w-full px-4 pt-[11px] pb-[13px] bg-inherit placeholder-[#aaaaaa] text-black text-base border border-[#aaaaaa] focus:outline-primary"
					/>
				</div>
				{/* <-- == Message End == --> */}

				<button
					type="submit"
					className="w-full bg-primary px-4 pt-3 pb-4 text-base text-white hover:bg-[#3787C8] duration-300"
				>
					{translations.submit}
				</button>
			</form>
			{/* <-- === Form End === --> */}
		</section>
	);
}
