import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselPrevious,
	CarouselNext,
} from "./ui/carousel";

// Import Assets //
import galericarousel1 from "../../../assets/images/gallery/img-gallery-1.webp";
import galericarousel2 from "../../../assets/images/gallery/img-gallery-2.webp";
import galericarousel3 from "../../../assets/images/gallery/img-gallery-3.webp";
import galericarousel4 from "../../../assets/images/gallery/img-gallery-4.webp";
import galericarousel5 from "../../../assets/images/gallery/img-gallery-5.webp";
import galericarousel6 from "../../../assets/images/gallery/img-gallery-6.webp";
import galericarousel7 from "../../../assets/images/gallery/img-gallery-7.webp";
import galericarousel8 from "../../../assets/images/gallery/img-gallery-8.webp";

export default function GaleriCarousel() {
	return (
		<Carousel
			opts={{
				align: "start",
				loop: true,
			}}
			className="w-full"
		>
			<CarouselContent>
				<CarouselItem className="w-full flex flex-col">
					<Image
						src={galericarousel1}
						alt="Galeri 1"
						priority={true}
						className="w-full h-auto"
					/>
					<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white font-medium">
								Picture Name 1
							</p>
						</div>
						<div className="w-full h-[1px] bg-white"></div>
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white text-right font-medium">
								2024
							</p>
						</div>
					</div>
				</CarouselItem>

				<CarouselItem className="w-full flex flex-col">
					<Image
						src={galericarousel2}
						alt="Galeri 2"
						priority={true}
						className="w-full h-auto"
					/>
					<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white font-medium">
								Picture Name 2
							</p>
						</div>
						<div className="w-full h-[1px] bg-white"></div>
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white text-right font-medium">
								2024
							</p>
						</div>
					</div>
				</CarouselItem>

				<CarouselItem className="w-full flex flex-col">
					<Image
						src={galericarousel3}
						alt="Galeri 3"
						priority={true}
						className="w-full h-auto"
					/>
					<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white font-medium">
								Picture Name 3
							</p>
						</div>
						<div className="w-full h-[1px] bg-white"></div>
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white text-right font-medium">
								2024
							</p>
						</div>
					</div>
				</CarouselItem>

				<CarouselItem className="w-full flex flex-col">
					<Image
						src={galericarousel4}
						alt="Galeri 4"
						priority={true}
						className="w-full h-auto"
					/>
					<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white font-medium">
								Picture Name 4
							</p>
						</div>
						<div className="w-full h-[1px] bg-white"></div>
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white text-right font-medium">
								2024
							</p>
						</div>
					</div>
				</CarouselItem>

				<CarouselItem className="w-full flex flex-col">
					<Image
						src={galericarousel5}
						alt="Galeri 5"
						priority={true}
						className="w-full h-auto"
					/>
					<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white font-medium">
								Picture Name 5
							</p>
						</div>
						<div className="w-full h-[1px] bg-white"></div>
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white text-right font-medium">
								2024
							</p>
						</div>
					</div>
				</CarouselItem>

				<CarouselItem className="w-full flex flex-col">
					<Image
						src={galericarousel6}
						alt="Galeri 6"
						priority={true}
						className="w-full h-auto"
					/>
					<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white font-medium">
								Picture Name 6
							</p>
						</div>
						<div className="w-full h-[1px] bg-white"></div>
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white text-right font-medium">
								2024
							</p>
						</div>
					</div>
				</CarouselItem>

				<CarouselItem className="w-full flex flex-col">
					<Image
						src={galericarousel7}
						alt="Galeri 7"
						priority={true}
						className="w-full h-auto"
					/>
					<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white font-medium">
								Picture Name 7
							</p>
						</div>
						<div className="w-full h-[1px] bg-white"></div>
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white text-right font-medium">
								2024
							</p>
						</div>
					</div>
				</CarouselItem>

				<CarouselItem className="w-full flex flex-col">
					<Image
						src={galericarousel8}
						alt="Galeri 8"
						priority={true}
						className="w-full h-auto"
					/>
					<div className="bg-primary w-full flex justify-between lg:gap-16 items-center h-auto lg:px-16 lg:py-9">
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white font-medium">
								Picture Name 8
							</p>
						</div>
						<div className="w-full h-[1px] bg-white"></div>
						<div className="w-fit whitespace-nowrap">
							<p className="lg:text-[22px] text-white text-right font-medium">
								2024
							</p>
						</div>
					</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
