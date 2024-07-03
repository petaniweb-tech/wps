import { useTranslations } from "next-intl";

// Import Components //
import ContactFormWrapper from "@/app/components/contact-from-wrapper";

export default function HubungiKami() {
	const trHubungikamiPage = useTranslations("HubungikamiPage");

	return (
		<>
			{/* <-- ==== Hubungi Kami Mobile Start ==== --> */}
			<section className="flex flex-col lg:hidden w-full px-sectionpxsm pt-36 pb-20">
				<div className="flex w-full justify-center pb-3 border-b-[3px] border-primary">
					<h1 className="text-[22px] font-semibold text-center">
						{trHubungikamiPage("headline")}
					</h1>
				</div>

				<div className="w-full mt-14">
					<ContactFormWrapper />
				</div>
			</section>
			{/* <-- ==== Hubungi Kami Mobile End ==== --> */}

			{/* <-- ==== Hubungi Kami Desktop Start ==== --> */}
			<section className="hidden lg:block w-full bg-cover bg-center bg-bgcontact h-screen pt-36 pb-20 px-sectionpxlg 2xl:px-sectionpx2xl">
				<div className="w-full flex items-center justify-end">
					<ContactFormWrapper />
				</div>
			</section>
			{/* <-- ==== Hubungi Kami Desktop End ==== --> */}
		</>
	);
}
