import Image from "next/image";
import { useTranslations } from "next-intl";

// Import Components //
import RouteMap from "../route-map";

// Import Assets //
import ontime from "../../../../assets/icons/icon-ontime.webp";
import safetyfirst from "../../../../assets/icons/icon-safetyfirst.webp";
import professional from "../../../../assets/icons/icon-professional.webp";

export default function RouteSection() {
	const trRoute = useTranslations("RouteSection");
	return (
		<section className="px-sectionpxsm lg:px-sectionpxlg 2xl:px-sectionpx2xl pt-16 lg:pt-36 pb-20 lg:pb-0">
			<div className="flex justify-start lg:justify-center">
				<div className="flex w-fit lg:border-b-[6px] lg:pb-[14px] border-primary">
					<h1 className="text-[32px] lg:text-3xl font-semibold text-left lg:text-center">
						{trRoute("headline")}
					</h1>
				</div>
			</div>
			<div className="w-full h-auto mt-9 lg:mt-10">
				<RouteMap />
			</div>

			{/* <-- ==== Rute Content Mobile Start ==== --> */}
			<div className="flex flex-col lg:hidden w-full mt-10">
				<div className="w-full px-5">
					<div className="w-full h-fit border-l border-black">
						<div className="flex flex-col">
							<div className="flex justify-start pl-5 pt-[15px] pb-[18px] items-center gap-8 border-b border-black">
								<Image
									src={ontime}
									alt="Pengiriman Tepat Waktu"
									priority={true}
									className="h-10 w-auto"
								/>
								<h3 className="text-[17px]">
									{trRoute("ontime")}
								</h3>
							</div>
							<div className="flex justify-start pl-5 pt-[15px] pb-[18px] items-center gap-8 border-b border-black">
								<Image
									src={safetyfirst}
									alt="Safety First"
									priority={true}
									className="h-10 w-auto"
								/>
								<h3 className="text-[17px] italic">
									Safety First
								</h3>
							</div>
							<div className="flex justify-start pl-5 pt-[15px] pb-[18px] items-center gap-8">
								<Image
									src={professional}
									alt="Professional"
									priority={true}
									className="h-10 w-auto"
								/>
								<h3 className="text-[17px]">Professional</h3>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full flex flex-col mt-10 gap-5">
					<h3 className="text-3xl text-black font-semibold leading-[1.4]">
						{trRoute("title")}
					</h3>
					<p className="text-base text-black font-light leading-relaxed">
						{trRoute("description")}
					</p>
				</div>
			</div>
			{/* <-- ==== Rute Content Mobile Start ==== --> */}

			{/* <-- ==== Rute Content Desktop Start ==== --> */}
			<div className="hidden lg:flex justify-between items-center mt-16">
				<div className="w-full flex flex-col lg:pr-20">
					<h2 className="lg:text-[44px] font-semibold text-black lg:leading-tight">
						{trRoute("title")}
					</h2>
					<p className="text-base text-black font-light lg:leading-relaxed lg:mt-8">
						{trRoute("description")}
					</p>
				</div>
				<div className="w-full h-fit border-l border-black lg:basis-3/5">
					<div className="flex flex-col">
						<div className="flex justify-start lg:pl-7 lg:pt-5 lg:pb-6 items-center lg:gap-6 border-b border-black">
							<Image
								src={ontime}
								alt="Pengiriman Tepat Waktu"
								priority={true}
								className="h-11 w-auto"
							/>
							<h3 className="text-lg">{trRoute("ontime")}</h3>
						</div>
						<div className="flex justify-start lg:pl-7 lg:pt-5 lg:pb-6 items-center lg:gap-6 border-b border-black">
							<Image
								src={safetyfirst}
								alt="Safety First"
								priority={true}
								className="h-11 w-auto"
							/>
							<h3 className="text-lg italic">Safety First</h3>
						</div>
						<div className="flex justify-start lg:pl-7 lg:pt-5 lg:pb-6 items-center lg:gap-6">
							<Image
								src={professional}
								alt="Professional"
								priority={true}
								className="h-11 w-auto"
							/>
							<h3 className="text-lg">Professional</h3>
						</div>
					</div>
				</div>
			</div>
			{/* <-- ==== Rute Content Desktop Start ==== --> */}
		</section>
	);
}
