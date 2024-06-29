"use client";

import * as React from "react";

import Image from "next/image";
import { usePathname } from "next/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Import Components //
import SwiperNavigation from "./swiper-navigation";

type SwiperRef = any;

interface HeroCarouselProps {
	banners: {
		_id: string;
		title: string;
		englishTitle: string;
		description: string;
		englishDescription: string;
		image?: string;
		video?: string;
		backgroundColor: string;
	}[];
}

export default function HeroCarousel({ banners }: HeroCarouselProps) {
	const [swiperRef, setSwiperRef] = React.useState<SwiperRef | null>(null);
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);
	const pathName = usePathname();

	const isEn = pathName.startsWith("/en");
	const heroTitles = banners.map((banner) =>
		isEn ? banner?.englishTitle : banner?.title ?? ""
	);
	const heroDescriptions = banners.map((banner) =>
		isEn ? banner?.englishDescription : banner?.description ?? ""
	);
	const bgColors = banners.map((banner) => banner?.backgroundColor ?? "");
	const [heroText, setHeroText] = React.useState(heroTitles[0]);
	const [heroDescription, setHeroDescription] = React.useState(
		heroDescriptions[0]
	);
	const [heroColor, setHeroColor] = React.useState(bgColors[0]);

	React.useEffect(() => {
		if (!swiperRef) {
			return;
		}

		setCount(swiperRef.slides.length);
		swiperRef.on("slideChange", () => {
			const selectedIndex = swiperRef.realIndex;
			setCurrent(selectedIndex + 1);
			setHeroText(heroTitles[selectedIndex]);
			setHeroDescription(heroDescriptions[selectedIndex] || "");
			setHeroColor(bgColors[selectedIndex] || "");
		});
	}, [swiperRef, heroDescriptions, heroTitles, bgColors]);

	return (
		<Swiper
			modules={[Autoplay]}
			loop={true}
			autoplay={{
				delay: 4500,
				disableOnInteraction: false,
			}}
			onSwiper={setSwiperRef}
			className="w-full relative"
		>
			<SwiperNavigation />
			{banners.map((banner) => (
				<SwiperSlide
					key={banner._id}
					className="w-full bg-cover object-cover"
				>
					{banner.video ? (
						<video
							loop={true}
							autoPlay={true}
							muted={true}
							controls={false}
							playsInline
							className="w-full h-screen bg-cover object-cover"
						>
							<source src={banner.video} type="video/mp4" />
						</video>
					) : (
						<Image
							src={
								banner?.image ??
								"https://via.placeholder.com/1080x729"
							}
							alt={banner.title}
							priority={true}
							className="w-full h-screen object-cover"
							width={1000}
							height={750}
						/>
					)}
				</SwiperSlide>
			))}
			<div className="absolute z-40 px-sectionpxlg pb-[70px] inset-0 flex flex-col justify-end gap-[14px]">
				<div className="w-full">
					<div
						className="w-full px-8 py-6 flex justify-between items-start"
						style={{
							backgroundColor: `${heroColor}`,
						}}
					>
						<h1
							className="text-[50px] text-white font-semibold leading-tight w-full"
							dangerouslySetInnerHTML={{ __html: heroText }}
						></h1>
						<p className="text-[15px] text-white font-light basis-4/5 pt-1">
							{heroDescription}
						</p>
					</div>
				</div>
				<div className="flex w-full items-center justify-between gap-10">
					<div className="flex w-fit">
						<p className="text-base text-white">0{current}</p>
					</div>
					<div className="w-full flex items-center bg-white h-[1px] bg-opacity-70">
						<div className="flex w-full">
							{banners.map((_, index) => (
								<div
									key={index}
									className={`h-[5px] flex-1 ${current - 1 === index ? "bg-white" : ""}`}
								></div>
							))}
						</div>
					</div>
					<div className="block w-fit">
						<h2 className="text-[40px] text-nowrap tracking-tighter text-white font-semibold">
							{current} / {count}
						</h2>
					</div>
				</div>
			</div>
		</Swiper>
	);
}
