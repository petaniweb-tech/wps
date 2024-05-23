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
import longtrailer1 from "../../../assets/images/truck/img-longtrailer-1.webp";
import longtrailer2 from "../../../assets/images/truck/img-longtrailer-2.webp";
import longtrailer3 from "../../../assets/images/truck/img-longtrailer-3.webp";

export default function TruckLongtrailerCarousel() {
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
						src={longtrailer1}
						alt="Longtrailer 1"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={longtrailer2}
						alt="Longtrailer 2"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={longtrailer3}
						alt="Longtrailer 3"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
}
