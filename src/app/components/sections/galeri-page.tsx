import { useTranslations } from "next-intl";

// Import Component //
import GaleriShowcase from "../galeri-showcase";

export const runtime = "edge";
const GALLERIES_QUERY = `*[_type == "gallery"]|order(number asc){_id, title, englishTitle, year, image}`;

export interface Gallery {
	_id: string;
	title: string;
	image?: string;
}
[];

interface GaleriPageProps {
	galleries: {
		_id: string;
		title: string;
		image?: string;
	}[];
}

export default function GaleriPage({ galleries }: GaleriPageProps) {
	const trGaleri = useTranslations("GallerySection");

	return (
		<section className="flex flex-col lg:hidden w-full px-sectionpxsm pt-36 pb-16">
			<div className="flex w-full justify-center pb-3 border-b-[3px] border-primary">
				<h1 className="text-[22px] font-semibold text-center">
					{trGaleri("headline")}
				</h1>
			</div>

			<div className="flex flex-col w-full mt-14">
				<GaleriShowcase galleries={galleries} />
			</div>
		</section>
	);
}
