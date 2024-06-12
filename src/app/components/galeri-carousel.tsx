"use client";

import Image from "next/image";

import { usePathname } from "next/navigation";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "./ui/carousel";

interface GaleriCarouselProps {
	galleries: {
		_id: string;
		title: string;
		englishTitle: string;
		year: string;
		image?: string;
	}[];
}

export default function HeroCarousel({ galleries }: GaleriCarouselProps) {
	const pathName = usePathname();

	const isEn = pathName.startsWith("/en");

	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			className="w-full"
		>
			<CarouselContent>
				{galleries.map((gallery) => (
					<CarouselItem
						key={gallery._id}
						className="w-full flex flex-col"
					>
						<Image
							src={
								gallery?.image ??
								"https://via.placeholder.com/1080x729"
							}
							alt={gallery.title}
							priority={true}
							className="w-full h-screen object-cover"
							width={1000}
							height={750}
						/>
						<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
							<div className="w-fit whitespace-nowrap">
								<p className="lg:text-[22px] text-white font-medium">
									{isEn
										? gallery.englishTitle
										: gallery.title}
								</p>
							</div>
							<div className="w-full h-[1px] bg-white"></div>
							<div className="w-fit whitespace-nowrap">
								<p className="lg:text-[22px] text-white text-right font-medium">
									{gallery.year}
								</p>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
