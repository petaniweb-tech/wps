import React from "react";
import { useSwiper } from "swiper/react";

// Import Icons //
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function SwiperNavigation() {
	const swiper = useSwiper();

	return (
		<>
			<button
				onClick={() => swiper.slidePrev()}
				className="absolute flex items-center justify-center z-50 left-[18px] lg:left-10 top-1/2 -translate-y-1/2 w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-black lg:bg-white bg-opacity-40 lg:bg-opacity-30 lg:hover:bg-opacity-25 backdrop-blur border-none duration-300"
			>
				<ArrowLeftIcon className="h-4 lg:h-5 w-4 lg:w-5 text-white" />
			</button>

			<button
				onClick={() => swiper.slideNext()}
				className="absolute flex items-center justify-center z-50 right-[18px] lg:right-10 top-1/2 -translate-y-1/2 w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-black lg:bg-white bg-opacity-40 lg:bg-opacity-30 lg:hover:bg-opacity-25 backdrop-blur border-none duration-300"
			>
				<ArrowRightIcon className="h-4 lg:h-5 w-4 lg:w-5 text-white" />
			</button>
		</>
	);
}
