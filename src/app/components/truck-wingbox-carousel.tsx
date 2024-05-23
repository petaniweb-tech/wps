"use client";

import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

// Import Assets //
import wingbox1 from "../../../assets/images/truck/img-wingbox-1.webp";
import wingbox2 from "../../../assets/images/truck/img-wingbox-2.webp";
import wingbox3 from "../../../assets/images/truck/img-wingbox-3.webp";

export default function TruckWingboxCarousel() {
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
						src={wingbox1}
						alt="Wingbox 1"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={wingbox2}
						alt="Wingbox 2"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={wingbox3}
						alt="Wingbox 3"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
}
