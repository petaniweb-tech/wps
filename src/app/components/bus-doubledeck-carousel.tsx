"use client";

import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";

import Autoplay from "embla-carousel-autoplay";

// Import Assets //
import doubledeck1 from "../../../assets/images/bus/img-doubledeck-1.webp";
import doubledeck2 from "../../../assets/images/bus/img-doubledeck-2.webp";
import doubledeck3 from "../../../assets/images/bus/img-doubledeck-3.webp";
import doubledeck4 from "../../../assets/images/bus/img-doubledeck-4.webp";
import doubledeck5 from "../../../assets/images/bus/img-doubledeck-5.webp";
import doubledeck6 from "../../../assets/images/bus/img-doubledeck-6.webp";

export default function BusDoubledeckCarousel() {
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
						src={doubledeck1}
						alt="Double Deck 1"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={doubledeck2}
						alt="Double Deck 2"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={doubledeck3}
						alt="Double Deck 3"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={doubledeck4}
						alt="Double Deck 4"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={doubledeck5}
						alt="Double Deck 5"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>

				<CarouselItem className="w-full min-h-max flex">
					<Image
						src={doubledeck6}
						alt="Double Deck 6"
						priority={true}
						className="w-auto min-h-full object-center object-cover h-max"
					/>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
}
