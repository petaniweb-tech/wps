import { useTranslations } from "next-intl";

// Import Components //
import BusHighdeckCarousel from "@/app/components/bus-highdeck-carousel";
import BusDoubledeckCarousel from "@/app/components/bus-doubledeck-carousel";

export default function Bus() {
	const trBusPage = useTranslations("BusPage");

	return (
		<>
			{/* <-- ==== Armada Bus Section Mobile Start ==== --> */}
			<section className="w-full flex flex-col lg:hidden px-sectionpxsm pt-36 pb-16">
				<div className="flex w-full justify-center pb-3 border-b-[3px] border-primary">
					<h1 className="text-[22px] font-semibold text-center">
						{trBusPage("headline")}
					</h1>
				</div>

				<div className="flex flex-col w-full gap-24 mt-14">
					{/* <-- === Super High Deck Start === --> */}
					<div className="flex flex-col w-full gap-8">
						<BusHighdeckCarousel />

						<div className="flex items-center justify-between w-full">
							<div className="flex items-center justify-Start gap-3">
								<div className="w-[10px] h-[10px] rounded-full bg-primary"></div>
								<h3 className="text-[22px] font-semibold">
									SUPER HIGH DECK
								</h3>
							</div>
						</div>

						{/* <-- == Description Super High Deck Start == --> */}
						<div className="w-full flex flex-col">
							<div className="w-full flex items-center justify-between pt-1 pb-[14px] border-b border-black">
								<p className="text-base text-black text-left">
									{trBusPage("totalSeatMobile")}
								</p>
								<p className="text-base text-black text-right">
									60 Seat
								</p>
							</div>

							<div className="w-full flex items-center justify-between py-[14px] border-b border-black">
								<p className="text-base text-black text-left">
									{trBusPage("facilitiesMobile")}
								</p>
								<p className="text-base text-black text-right">
									{trBusPage("facilities1")}
								</p>
							</div>

							<div className="w-full flex items-center justify-end py-[14px] border-b border-black">
								<p className="text-base text-black text-right">
									{trBusPage("facilities2")}
								</p>
							</div>

							<div className="w-full flex items-center justify-end py-[14px]">
								<p className="text-base text-black text-right">
									{trBusPage("facilities3")}
								</p>
							</div>
						</div>
						{/* <-- == Description Super High Deck End == --> */}
					</div>
					{/* <-- === Super High Deck End === --> */}

					{/* <-- === High Double Deck Start === --> */}
					<div className="flex flex-col w-full gap-8">
						<BusDoubledeckCarousel />

						<div className="flex items-center justify-between w-full">
							<div className="flex items-center justify-Start gap-3">
								<div className="w-[10px] h-[10px] rounded-full bg-primary"></div>
								<h3 className="text-[22px] font-semibold">
									HIGH DOUBLE DECK
								</h3>
							</div>
						</div>

						{/* <-- == Description High Double Deck Start == --> */}
						<div className="w-full flex flex-col">
							<div className="w-full flex items-center justify-between pt-1 pb-[14px] border-b border-black">
								<p className="text-base text-black text-left">
									{trBusPage("totalSeatMobile")}
								</p>
								<p className="text-base text-black text-right">
									50 Seat
								</p>
							</div>

							<div className="w-full flex items-center justify-between py-[14px] border-b border-black">
								<p className="text-base text-black text-left">
									{trBusPage("facilitiesMobile")}
								</p>
								<p className="text-base text-black text-right">
									{trBusPage("facilities1")}
								</p>
							</div>

							<div className="w-full flex items-center justify-end py-[14px] border-b border-black">
								<p className="text-base text-black text-right">
									{trBusPage("facilities2")}
								</p>
							</div>

							<div className="w-full flex items-center justify-end py-[14px]">
								<p className="text-base text-black text-right">
									{trBusPage("facilities3")}
								</p>
							</div>
						</div>
						{/* <-- == Description High Double Deck End == --> */}
					</div>
					{/* <-- === High Double Deck End === --> */}
				</div>
			</section>
			{/* <-- ==== Armada Bus Section Mobile Start ==== --> */}

			{/* <-- ==== Armada Bus Section Desktop Start ==== --> */}
			<section className="w-full hidden lg:flex flex-col gap-40 px-sectionpxlg 2xl:px-sectionpx2xl pt-60 pb-44">
				{/* <-- === Super High Deck Start === --> */}
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
									60 Seat
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
				{/* <-- === Super High Deck End === --> */}

				{/* <-- === High Double Deck End === --> */}
				<div className="flex justify-between items-start gap-14 h-max">
					<div className="flex flex-col w-full h-full lg:basis-2/4 items-start gap-14">
						<div className="flex items-center gap-5 w-full">
							<div className="bg-primary w-3 h-3 rounded-full"></div>
							<h1 className="text-[28px] font-semibold self-start leading-none">
								HIGH DOUBLE DECK
							</h1>
						</div>

						<div className="flex flex-col w-full gap-4">
							<div className="flex items-center justify-between">
								<p className="text-[17px] font-semibold text-left">
									{trBusPage("totalSeat")}
								</p>
								<p className="text-[17px] font-semibold text-right">
									50 Seat
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
				{/* <-- === High Double Deck End === --> */}
			</section>
			{/* <-- ==== Armada Bus Section Desktop Start ==== --> */}
		</>
	);
}
