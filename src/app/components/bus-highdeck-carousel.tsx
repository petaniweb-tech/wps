"use client";

import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

// Import Assets //
import highdeck1 from "../../../assets/images/bus/img-highdeck-1.webp";
import highdeck2 from "../../../assets/images/bus/img-highdeck-2.webp";
import highdeck3 from "../../../assets/images/bus/img-highdeck-3.webp";
import highdeck4 from "../../../assets/images/bus/img-highdeck-4.webp";
import highdeck5 from "../../../assets/images/bus/img-highdeck-5.webp";
import highdeck6 from "../../../assets/images/bus/img-highdeck-6.webp";

export default function BusHighdeckCarousel() {
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
						src={highdeck1}
						alt="High Deck 1"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={highdeck2}
						alt="High Deck 2"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={highdeck3}
						alt="High Deck 3"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={highdeck4}
						alt="High Deck 4"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={highdeck5}
						alt="High Deck 5"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={highdeck6}
						alt="High Deck 6"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
}
