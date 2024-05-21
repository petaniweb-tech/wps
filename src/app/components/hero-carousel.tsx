"use client";

import * as React from "react";

import { usePathname } from "next/navigation";
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
	}[]
}

export default function HeroCarousel({
	banners,
}: HeroCarouselProps) {
	const [api, setApi] = React.useState<CarouselApi>();
	const [current, setCurrent] = React.useState(0);
	const [count, setCount] = React.useState(0);
	const pathName = usePathname();
	
	const isEn = pathName.startsWith("/en");
	const heroTitles = banners.map((banner) => isEn ? banner?.englishTitle : banner?.title ?? "");
	const heroDescriptions = banners.map(
		(banner) => isEn ? banner?.englishDescription : banner?.description ?? ""
	);
	const bgColors = banners.map((banner) => banner?.backgroundColor ?? "");
	const [heroText, setHeroText] = React.useState(heroTitles[0]);
	const [heroDescription, setHeroDescription] = React.useState(
		heroDescriptions[0]
	);
	const [heroColor, setHeroColor] = React.useState(bgColors[0]);

	React.useEffect(() => {
		if (!api) {
			return;
		}

		setCount(api.scrollSnapList().length);
		setCurrent(api.selectedScrollSnap() + 1);

		api.on("select", () => {
			const selectedIndex = api.selectedScrollSnap();
			setCurrent(selectedIndex + 1);
			setHeroText(heroTitles[selectedIndex]);
			setHeroDescription(heroDescriptions[selectedIndex] || "");
			setHeroColor(bgColors[selectedIndex] || "");
		});
	}, [api, heroDescriptions, heroTitles, bgColors]);

	return (
    <div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 35000,
          }),
        ]}
        setApi={setApi}
        className="w-full relative"
      >
        <CarouselContent>
          {banners.map((banner) => (
            <CarouselItem
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
                  src={banner?.image ?? "https://via.placeholder.com/1080x729"}
                  alt={banner.title}
                  priority={true}
                  className="w-full h-screen object-cover"
                  width={1000}
                  height={750}
                />
              )}
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute px-sectionpxlg pb-[70px] inset-0 flex flex-col justify-end gap-[14px]">
          <div className="w-full">
            <div
              className="w-full px-8 py-6 flex justify-between items-start"
			  style={{
				backgroundColor: `${heroColor}`,
			  }}>
              <h1
                className="text-[50px] text-white font-semibold leading-tight w-full"
                dangerouslySetInnerHTML={{ __html: heroText }}
              ></h1>
              <p className="text-[15px] text-white font-light basis-4/5 pt-1">
				{heroDescription}
			</p>
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
