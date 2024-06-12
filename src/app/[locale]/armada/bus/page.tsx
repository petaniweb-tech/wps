import { useTranslations } from "next-intl";

// Import Components //
import BusHighdeckCarousel from "@/app/components/bus-highdeck-carousel";
import BusDoubledeckCarousel from "@/app/components/bus-doubledeck-carousel";

export default function Bus() {
	const trBusPage = useTranslations("BusPage");

	return (
		<section className="w-full flex flex-col gap-40 px-sectionpxlg 2xl:px-sectionpx2xl pt-60 pb-44">
			{/* <-- === High Deck Start === --> */}
			<div className="flex justify-between items-start gap-14 h-max">
				<div className="flex flex-col w-full h-full lg:basis-2/4 items-start gap-14">
					<div className="flex items-center gap-5 w-full">
						<div className="bg-primary w-3 h-3 rounded-full"></div>
						<h1 className="text-[28px] font-semibold self-start leading-none">
							SUPER HIGH DECK
						</h1>
					</div>

					<div className="flex flex-col w-full gap-4">
						<div className="flex items-center justify-between">
							<p className="text-[17px] font-semibold text-left">
								{trBusPage("totalSeat")}
							</p>
							<p className="text-[17px] font-semibold text-right">
								60
							</p>
						</div>
						<div className="w-full h-[2px] bg-black"></div>
						<div className="flex flex-col w-full gap-3">
							<div className="flex items-center justify-between">
								<p className="text-[17px] font-semibold text-left">
									{trBusPage("facilities")}
								</p>
								<p className="text-[17px] font-semibold text-right">
									{trBusPage("facilities1")}
								</p>
							</div>
							<div className="flex items-center justify-end">
								<p className="text-[17px] font-semibold text-right">
									{trBusPage("facilities2")}
								</p>
							</div>
							<div className="flex items-center justify-end">
								<p className="text-[17px] font-semibold text-right">
									{trBusPage("facilities3")}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full flex items-center justify-center h-full">
					<BusHighdeckCarousel />
				</div>
			</div>
			{/* <-- === High Deck End === --> */}

			{/* <-- === Double Deck End === --> */}
			<div className="flex justify-between items-start gap-14 h-max">
				<div className="flex flex-col w-full h-full lg:basis-2/4 items-start gap-14">
					<div className="flex items-center gap-5 w-full">
						<div className="bg-primary w-3 h-3 rounded-full"></div>
						<h1 className="text-[28px] font-semibold self-start leading-none">
							SUPER DOUBLE DECK
						</h1>
					</div>

					<div className="flex flex-col w-full gap-4">
						<div className="flex items-center justify-between">
							<p className="text-[17px] font-semibold text-left">
								{trBusPage("totalSeat")}
							</p>
							<p className="text-[17px] font-semibold text-right">
								50
							</p>
						</div>
						<div className="w-full h-[2px] bg-black"></div>
						<div className="flex flex-col w-full gap-3">
							<div className="flex items-center justify-between">
								<p className="text-[17px] font-semibold text-left">
									{trBusPage("facilities")}
								</p>
								<p className="text-[17px] font-semibold text-right">
									{trBusPage("facilities1")}
								</p>
							</div>
							<div className="flex items-center justify-end">
								<p className="text-[17px] font-semibold text-right">
									{trBusPage("facilities2")}
								</p>
							</div>
							<div className="flex items-center justify-end">
								<p className="text-[17px] font-semibold text-right">
									{trBusPage("facilities3")}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full flex items-center justify-center h-full">
					<BusDoubledeckCarousel />
				</div>
			</div>
			{/* <-- === Double Deck End === --> */}
		</section>
	);
}
