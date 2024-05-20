"use client";

import * as React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
	type CarouselApi,
} from "./ui/carousel";
import herocarousel1 from "../../../assets/images/hero/img-hero-1.webp";
import herocarousel2 from "../../../assets/images/hero/img-hero-2.webp";
import herocarousel3 from "../../../assets/images/hero/img-hero-3.webp";

interface HeroCarouselProps {
	bgColorClass?: string;
	bgColorClass3?: string;
	bgColorClass4?: string;
	heroTitles: string[];
	heroDescriptions: string[];
}

export default function HeroCarousel({
	bgColorClass = "bg-inherit",
	bgColorClass3 = "bg-primary",
	bgColorClass4 = "bg-black",
	heroTitles,
	heroDescriptions,
}: HeroCarouselProps) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);
	const [heroTitle, setHeroTitle] = React.useState(heroTitles[0]);
	const [heroDescription, setHeroDescription] = React.useState(
		heroDescriptions[0]
	);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			const selectedIndex = api.selectedScrollSnap();
			setCurrent(selectedIndex + 1);
			setHeroTitle(heroTitles[selectedIndex]);
			setHeroDescription(heroDescriptions[selectedIndex] || "");
		});
	}, [api, heroTitles, heroDescriptions]);

	const getBgColorClass = () => {
		if (current === 3) {
			return bgColorClass3;
		}
		if (current === 4) {
			return bgColorClass4;
		}
		return bgColorClass;
	};

	return (
		<div>
			<Carousel
				opts={{
					align: "start",
					loop: true,
				}}
				plugins={[
					Autoplay({
						delay: 7000,
					}),
				]}
				setApi={setApi}
				className="w-full relative"
			>
				<CarouselContent>
					<CarouselItem className="w-full bg-cover object-cover">
						<video
							loop={true}
							autoPlay={true}
							muted={true}
							controls={false}
							playsInline
							className="w-full h-screen bg-cover object-cover"
						>
							<source src="./vid-hero.mp4" type="video/mp4" />
						</video>
					</CarouselItem>

					<CarouselItem className="w-full bg-cover object-cover">
						<Image
							src={herocarousel1}
							alt="Galeri 1"
							priority={true}
							className="w-full h-screen object-cover"
						/>
					</CarouselItem>

					<CarouselItem className="w-full bg-cover object-cover">
						<Image
							src={herocarousel2}
							alt="Galeri 2"
							priority={true}
							className="w-full h-screen object-cover"
						/>
					</CarouselItem>

					<CarouselItem className="w-full bg-cover object-cover">
						<Image
							src={herocarousel3}
							alt="Galeri 3"
							priority={true}
							className="w-full h-screen object-cover"
						/>
					</CarouselItem>
				</CarouselContent>

				<div className="absolute px-sectionpxlg pb-[70px] inset-0 flex flex-col justify-end gap-[14px]">
					<div className="w-full">
						<div
							className={`w-full px-8 py-6 flex justify-between items-start ${getBgColorClass()}`}
						>
							<h1
								className="text-[50px] text-white font-semibold leading-tight w-full"
								dangerouslySetInnerHTML={{ __html: heroTitle }}
							></h1>
							{current === 2 || current === 3 || current === 4 ? (
								<p className="text-[15px] text-white font-light basis-4/5 pt-1 leading-relaxed">
									{heroDescription}
								</p>
							) : null}
						</div>
					</div>
					<div className="flex justify-between w-full items-center">
						<p className="text-base text-white">0{current}</p>
						<h2 className="text-[40px] tracking-tighter text-white font-semibold">
							{current} / {count}
						</h2>
					</div>
				</div>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		</div>
	);
}
