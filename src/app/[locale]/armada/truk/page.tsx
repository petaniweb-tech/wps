import Image from "next/image";

import { useTranslations } from "next-intl";

// Import Components //
import TruckDropsideCarousel from "@/app/components/truck-dropside-carousel";
import TruckWingboxCarousel from "@/app/components/truck-wingbox-carousel";
import TruckLongtrailerCarousel from "@/app/components/truck-longtrailer-carousel";

// Import Assets //
import dropsideicon from "../../../../../assets/icons/icon-dropside.webp";
import wingboxicon from "../../../../../assets/icons/icon-wingbox.webp";
import longtrailericon from "../../../../../assets/icons/icon-longtrailer.webp";

export default function Truk() {
	const trTrukPage = useTranslations("TrukPage");

	return (
		<section className="w-full flex flex-col gap-40 px-sectionpxlg 2xl:px-sectionpx2xl pt-60 pb-44">
			{/* <-- === Drop Side Start === --> */}
			<div className="flex justify-between items-start gap-20 h-max">
				<div className="flex flex-col w-full h-full lg:basis-2/4 items-start gap-[86px]">
					<div className="flex items-center gap-5 w-full">
						<div className="bg-primary w-3 h-3 rounded-full"></div>
						<h1 className="text-[40px] font-semibold self-start leading-none">
							DROP SIDE
						</h1>
					</div>
					<div className="px-20 flex justify-center items-center">
						<Image
							src={dropsideicon}
							alt="Drop Side Truck"
							priority={true}
							className="w-full h-auto"
						/>
					</div>
					<div className="flex flex-col w-full gap-4">
						<div className="flex items-center justify-between">
							<p className="text-[17px] font-semibold text-left">
								{trTrukPage("tonnage")}
							</p>
							<p className="text-[17px] font-semibold text-right">
								max 31T
							</p>
						</div>
						<div className="w-full h-[2px] bg-black"></div>
						<div className="flex flex-col w-full gap-3">
							<div className="flex items-center justify-between">
								<p className="text-[17px] text-left">
									{trTrukPage("length")}
								</p>
								<p className="text-[17px] text-right">9.5m</p>
							</div>
							<div className="flex items-center justify-between">
								<p className="text-[17px] text-left">
									{trTrukPage("width")}
								</p>
								<p className="text-[17px] text-right">2.40m</p>
							</div>
							<div className="flex items-center justify-between">
								<p className="text-[17px] text-left">
									{trTrukPage("height")}
								</p>
								<p className="text-[17px] text-right">
									{trTrukPage("load")} 2.60m
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full flex items-center justify-center h-full">
					<TruckDropsideCarousel />
				</div>
			</div>
			{/* <-- === Drop Side End === --> */}

			{/* <-- === Wing Box Start === --> */}
			<div className="flex justify-between items-start gap-20 h-max">
				<div className="flex flex-col w-full h-full lg:basis-2/4 items-start gap-[86px]">
					<div className="flex items-center gap-5 w-full">
						<div className="bg-primary w-3 h-3 rounded-full"></div>
						<h1 className="text-[40px] font-semibold self-start leading-none">
							WING BOX
						</h1>
					</div>
					<div className="px-20 flex justify-center items-center">
						<Image
							src={wingboxicon}
							alt="Wing Box Truck"
							priority={true}
							className="w-full h-auto"
						/>
					</div>
					<div className="flex flex-col w-full gap-4">
						<div className="flex items-center justify-between">
							<p className="text-[17px] font-semibold text-left">
								{trTrukPage("tonnage")}
							</p>
							<p className="text-[17px] font-semibold text-right">
								20T - 28T
							</p>
						</div>
						<div className="w-full h-[2px] bg-black"></div>
						<div className="flex flex-col w-full gap-3">
							<div className="flex items-center justify-between">
								<p className="text-[17px] text-left">
									{trTrukPage("length")}
								</p>
								<p className="text-[17px] text-right">9.5m</p>
							</div>
							<div className="flex items-center justify-between">
								<p className="text-[17px] text-left">
									{trTrukPage("width")}
								</p>
								<p className="text-[17px] text-right">2.40m</p>
							</div>
							<div className="flex items-center justify-between">
								<p className="text-[17px] text-left">
									{trTrukPage("height")}
								</p>
								<p className="text-[17px] text-right">
									{trTrukPage("load")} 2.60m
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full flex items-center justify-center h-full">
					<TruckWingboxCarousel />
				</div>
			</div>
			{/* <-- === Wing Box End === --> */}

			{/* <-- === Long Trailer Start === --> */}
			<div className="flex justify-between items-start gap-20 h-max">
				<div className="flex flex-col w-full h-full lg:basis-2/4 items-start gap-[86px]">
					<div className="flex items-center gap-5 w-full">
						<div className="bg-primary w-3 h-3 rounded-full"></div>
						<h1 className="text-[40px] font-semibold self-start leading-none">
							LONG TRAILER
						</h1>
					</div>
					<div className="px-20 flex justify-center items-center">
						<Image
							src={longtrailericon}
							alt="Long Trailer Icon"
							priority={true}
							className="w-full h-auto"
						/>
					</div>
					<div className="flex flex-col w-full gap-4">
						<div className="flex items-center justify-between">
							<p className="text-[17px] font-semibold text-left">
								{trTrukPage("tonnage")}
							</p>
							<p className="text-[17px] font-semibold text-right">
								max 55T
							</p>
						</div>
						<div className="w-full h-[2px] bg-black"></div>
						<div className="flex flex-col w-full gap-3">
							<div className="flex items-center justify-between">
								<p className="text-[17px] text-left">
									{trTrukPage("length")}
								</p>
								<p className="text-[17px] text-right">9.5m</p>
							</div>
							<div className="flex items-center justify-between">
								<p className="text-[17px] text-left">
									{trTrukPage("width")}
								</p>
								<p className="text-[17px] text-right">2.40m</p>
							</div>
							<div className="flex items-center justify-between">
								<p className="text-[17px] text-left">
									{trTrukPage("height")}
								</p>
								<p className="text-[17px] text-right">
									{trTrukPage("load")} 2.60m
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full flex items-center justify-center h-full">
					<TruckLongtrailerCarousel />
				</div>
			</div>
			{/* <-- === Long Trailer End === --> */}
		</section>
	);
}
