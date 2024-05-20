// Import Components //
import ContactForm from "@/app/components/contact-form";

export const runtime = "edge";

export default function Contact() {
	return (
		<section className="w-full bg-cover bg-center bg-bgcontact h-auto pt-36 pb-20 px-sectionpxlg 2xl:px-sectionpx2xl">
			<div className="w-full flex items-center justify-end">
				<ContactForm />
			</div>
		</section>
	);
}
