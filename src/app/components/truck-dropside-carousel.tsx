"use client";

import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

// Import Assets //
import dropside1 from "../../../assets/images/truck/img-dropside-1.webp";
import dropside2 from "../../../assets/images/truck/img-dropside-2.webp";
import dropside3 from "../../../assets/images/truck/img-dropside-3.webp";

export default function TruckDropsideCarousel() {
	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			plugins={[
				Autoplay({
					delay: 3000,
				}),
			]}
			className="w-full h-max"
		>
			<CarouselContent>
				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={dropside1}
						alt="Dropside 1"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={dropside2}
						alt="Dropside 2"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={dropside3}
						alt="Dropside 3"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
}
