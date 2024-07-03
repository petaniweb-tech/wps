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
		<>
			{/* <-- ==== Armada Truk Section Mobile Start ==== --> */}
			<section className="w-full flex flex-col lg:hidden px-sectionpxsm pt-36 pb-16">
				<div className="flex w-full justify-center pb-3 border-b-[3px] border-primary">
					<h1 className="text-[22px] font-semibold text-center">
						{trTrukPage("headline")}
					</h1>
				</div>

				<div className="flex flex-col w-full gap-24 mt-14">
					{/* <-- === Drop Side Start === --> */}
					<div className="flex flex-col w-full gap-8">
						<TruckDropsideCarousel />

						<div className="flex items-center justify-between w-full">
							<div className="flex items-center justify-center gap-3">
								<div className="w-[10px] h-[10px] rounded-full bg-primary"></div>
								<h3 className="text-[22px] font-semibold">
									DROP SIDE
								</h3>
							</div>

							<Image
								src={dropsideicon}
								alt="Drop Side Truck"
								priority={true}
								className="h-9 w-auto"
							/>
						</div>

						{/* <-- == Description Drop Side Start == --> */}
						<div className="w-full flex flex-col">
							<div className="w-full flex items-center justify-between pt-1 pb-[14px] border-b border-black">
								<p className="text-base text-black text-left">
									{trTrukPage("tonnage")}
								</p>
								<p className="text-base text-black text-right">
									Max 31T
								</p>
							</div>

							<div className="w-full flex items-center justify-between py-[14px] border-b border-black">
								<p className="text-base text-black text-left uppercase">
									{trTrukPage("length")}
								</p>
								<p className="text-base text-black text-right">
									9.5m
								</p>
							</div>

							<div className="w-full flex items-center justify-between py-[14px] border-b border-black">
								<p className="text-base text-black text-left uppercase">
									{trTrukPage("width")}
								</p>
								<p className="text-base text-black text-right">
									2.40m
								</p>
							</div>

							<div className="w-full flex items-center justify-between py-[14px]">
								<p className="text-base text-black text-left uppercase">
									{trTrukPage("height")}
								</p>
								<p className="text-base text-black text-right">
									Max 2.60m
								</p>
							</div>
						</div>
						{/* <-- == Description Drop Side End == --> */}
					</div>
					{/* <-- === Drop Side End === --> */}

					{/* <-- === Wing Box Start === --> */}
					<div className="flex flex-col w-full gap-8">
						<TruckWingboxCarousel />

						<div className="flex items-center justify-between w-full">
							<div className="flex items-center justify-center gap-3">
								<div className="w-[10px] h-[10px] rounded-full bg-primary"></div>
								<h3 className="text-[22px] font-semibold">
									WING BOX
								</h3>
							</div>

							<Image
								src={wingboxicon}
								alt="Wing Box Truck"
								priority={true}
								className="h-9 w-auto"
							/>
						</div>

						{/* <-- == Description Wing Box Start == --> */}
						<div className="w-full flex flex-col">
							<div className="w-full flex items-center justify-between pt-1 pb-[14px] border-b border-black">
								<p className="text-base text-black text-left">
									{trTrukPage("tonnage")}
								</p>
								<p className="text-base text-black text-right">
									20T - 28T
								</p>
							</div>

							<div className="w-full flex items-center justify-between py-[14px] border-b border-black">
								<p className="text-base text-black text-left uppercase">
									{trTrukPage("length")}
								</p>
								<p className="text-base text-black text-right">
									9.5m
								</p>
							</div>

							<div className="w-full flex items-center justify-between py-[14px] border-b border-black">
								<p className="text-base text-black text-left uppercase">
									{trTrukPage("width")}
								</p>
								<p className="text-base text-black text-right">
									2.40m
								</p>
							</div>

							<div className="w-full flex items-center justify-between py-[14px]">
								<p className="text-base text-black text-left uppercase">
									{trTrukPage("height")}
								</p>
								<p className="text-base text-black text-right">
									2.35m - 2.50m
								</p>
							</div>
						</div>
						{/* <-- == Description Wing Box End == --> */}
					</div>
					{/* <-- === Wing Box End === --> */}

					{/* <-- === Long Trailer Start === --> */}
					<div className="flex flex-col w-full gap-8">
						<TruckLongtrailerCarousel />

						<div className="flex items-center justify-between w-full">
							<div className="flex items-center justify-center gap-3">
								<div className="w-[10px] h-[10px] rounded-full bg-primary"></div>
								<h3 className="text-[22px] font-semibold">
									LONG TRAILER
								</h3>
							</div>

							<Image
								src={longtrailericon}
								alt="Long Trailer Truck"
								priority={true}
								className="h-9 w-auto"
							/>
						</div>

						{/* <-- == Description Long Trailer Start == --> */}
						<div className="w-full flex flex-col">
							<div className="w-full flex items-center justify-between pt-1 pb-[14px] border-b border-black">
								<p className="text-base text-black text-left">
									{trTrukPage("tonnage")}
								</p>
								<p className="text-base text-black text-right">
									Max 55T
								</p>
							</div>

							<div className="w-full flex items-center justify-between py-[14px] border-b border-black">
								<p className="text-base text-black text-left uppercase">
									{trTrukPage("length")}
								</p>
								<p className="text-base text-black text-right">
									14m
								</p>
							</div>

							<div className="w-full flex items-center justify-between py-[14px] border-b border-black">
								<p className="text-base text-black text-left uppercase">
									{trTrukPage("width")}
								</p>
								<p className="text-base text-black text-right">
									2.50m
								</p>
							</div>

							<div className="w-full flex items-center justify-between py-[14px]">
								<p className="text-base text-black text-left uppercase">
									{trTrukPage("height")}
								</p>
								<p className="text-base text-black text-right">
									Max 2.60m
								</p>
							</div>
						</div>
						{/* <-- == Description Long Trailer End == --> */}
					</div>
					{/* <-- === Long Trailer End === --> */}
				</div>
			</section>
			{/* <-- ==== Armada Truk Section Mobile End ==== --> */}

			{/* <-- ==== Armada Truk Section Desktop Start ==== --> */}
			<section className="w-full hidden lg:flex flex-col gap-40 px-sectionpxlg 2xl:px-sectionpx2xl pt-60 pb-44">
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
									Max 31T
								</p>
							</div>
							<div className="w-full h-[2px] bg-black"></div>
							<div className="flex flex-col w-full gap-3">
								<div className="flex items-center justify-between">
									<p className="text-[17px] text-left">
										{trTrukPage("length")}
									</p>
									<p className="text-[17px] text-right">
										9.5m
									</p>
								</div>
								<div className="flex items-center justify-between">
									<p className="text-[17px] text-left">
										{trTrukPage("width")}
									</p>
									<p className="text-[17px] text-right">
										2.40m
									</p>
								</div>
								<div className="flex items-center justify-between">
									<p className="text-[17px] text-left">
										{trTrukPage("height")}
									</p>
									<p className="text-[17px] text-right">
										Max 2.60m
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
									<p className="text-[17px] text-right">
										9.5m
									</p>
								</div>
								<div className="flex items-center justify-between">
									<p className="text-[17px] text-left">
										{trTrukPage("width")}
									</p>
									<p className="text-[17px] text-right">
										2.40m
									</p>
								</div>
								<div className="flex items-center justify-between">
									<p className="text-[17px] text-left">
										{trTrukPage("height")}
									</p>
									<p className="text-[17px] text-right">
										2.35m - 2.50m
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
									Max 55T
								</p>
							</div>
							<div className="w-full h-[2px] bg-black"></div>
							<div className="flex flex-col w-full gap-3">
								<div className="flex items-center justify-between">
									<p className="text-[17px] text-left">
										{trTrukPage("length")}
									</p>
									<p className="text-[17px] text-right">
										14m
									</p>
								</div>
								<div className="flex items-center justify-between">
									<p className="text-[17px] text-left">
										{trTrukPage("width")}
									</p>
									<p className="text-[17px] text-right">
										2.50m
									</p>
								</div>
								<div className="flex items-center justify-between">
									<p className="text-[17px] text-left">
										{trTrukPage("height")}
									</p>
									<p className="text-[17px] text-right">
										Max 2.60m
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
			{/* <-- ==== Armada Truk Section Desktop End ==== --> */}
		</>
	);
}
