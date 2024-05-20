import { useTranslations } from "next-intl";

export default function ContactForm() {
	const trHubungikamiPage = useTranslations("HubungikamiPage");

	return (
		<section className="flex flex-col bg-white w-[48%] h-auto px-8 pt-[26px] pb-8">
			<div className="flex w-fit border-b-[5px] pr-20 lg:pb-[14px] border-primary">
				<h1 className="lg:text-2xl font-semibold text-center">
					{trHubungikamiPage("formName")}
				</h1>
			</div>
			{/* <-- === Form Start === --> */}
			<form className="flex flex-col w-full mt-8 gap-5">
				{/* <-- == Name Start == --> */}
				<div>
					<input
						type="text"
						placeholder={trHubungikamiPage("namePlaceholder")}
						autoComplete="off"
						required
						className="w-full px-4 pt-[11px] pb-[13px] bg-inherit placeholder-[#aaaaaa] text-black text-base border border-[#aaaaaa] focus:outline-primary"
					/>
				</div>
				{/* <-- == Name End == --> */}

				{/* <-- == Email Start == --> */}
				<div>
					<input
						type="email"
						placeholder={trHubungikamiPage("emailPlaceholder")}
						autoComplete="off"
						required
						className="w-full px-4 pt-[11px] pb-[13px] bg-inherit placeholder-[#aaaaaa] text-black text-base border border-[#aaaaaa] focus:outline-primary"
					/>
				</div>
				{/* <-- == Email End == --> */}

				{/* <-- == Phone Start == --> */}
				<div>
					<input
						type="tel"
						placeholder={trHubungikamiPage("phonePlaceholder")}
						autoComplete="off"
						required
						className="w-full px-4 pt-[11px] pb-[13px] bg-inherit placeholder-[#aaaaaa] text-black text-base border border-[#aaaaaa] focus:outline-primary"
					/>
				</div>
				{/* <-- == Phone End == --> */}

				{/* <-- == Message Start == --> */}
				<div>
					<textarea
						placeholder={trHubungikamiPage("messagePlaceholder")}
						autoComplete="off"
						rows={6}
						className="w-full px-4 pt-[11px] pb-[13px] bg-inherit placeholder-[#aaaaaa] text-black text-base border border-[#aaaaaa] focus:outline-primary"
					/>
				</div>
				{/* <-- == Message End == --> */}

				<button className="w-full bg-primary px-4 pt-3 pb-4 text-base text-white hover:bg-[#3787C8] duration-300">
					{trHubungikamiPage("submit")}
				</button>
			</form>
			{/* <-- === Form End === --> */}
		</section>
	);
}
