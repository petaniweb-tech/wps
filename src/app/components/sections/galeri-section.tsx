import { useTranslations } from "next-intl";
import GaleriCarousel from "../galeri-carousel";

export const runtime = "edge";
const GALLERIES_QUERY = `*[_type == "gallery"]|order(number asc){_id, title, englishTitle, year, image}`;

export interface Gallery {
	_id: string;
	title: string;
	year: string;
	image?: string;
}
[];

interface GaleriSectionProps {
	galleries: {
		_id: string;
		title: string;
		englishTitle: string;
		year: string;
		image?: string;
	}[];
}

export default function GaleriSection({ galleries }: GaleriSectionProps) {
	const trGallery = useTranslations("GallerySection");
	return (
		<div>
			{/* <-- ==== Galeri Section Start ==== --> */}
			<section className="lg:px-sectionpxlg 2xl:px-sectionpx2xl lg:pt-52 lg:pb-44">
				<div className="flex justify-center">
					<div className="flex w-fit lg:border-b-[6px] lg:px-24 lg:pb-[14px] border-primary">
						<h1 className="lg:text-3xl font-semibold text-center">
							{trGallery("headline")}
						</h1>
					</div>
				</div>

				{/* <-- ==== Galeri Carousel Start ==== --> */}
				<div className="w-full pt-20">
					<GaleriCarousel galleries={galleries} />
				</div>
				{/* <-- ==== Galeri Carousel End ==== --> */}
			</section>
			{/* <-- ==== Galeri Section Start ==== --> */}
		</div>
	);
}
