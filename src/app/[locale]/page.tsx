import { SanityDocument } from "next-sanity";

// Import Sanity //
import { sanityFetch } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { urlForVideo } from "../../../sanity/lib/file";

// Import Components //
import HeroCarousel from "../components/hero-carousel";
import RouteSection from "../components/sections/route-section";
import GaleriSection from "../components/sections/galeri-section";

// export const runtime = "edge";
const BANNERS_QUERY = `*[_type == "banner"]|order(number asc){_id, title, englishTitle, image, description, englishDescription, video, number, backgroundColor}`;
const GALLERIES_QUERY = `*[_type == "gallery"]|order(number asc){_id, title, englishTitle, year, image}`;

export interface Banner {
	_id: string;
	title: string;
	description: string;
	backgroundColor: string;
	image?: string;
	video?: string;
}
[];

export interface Gallery {
	_id: string;
	title: string;
	year: string;
	image?: string;
}
[];

const mapRgba = (rgb: any): string => {
	const { r, g, b, a } = rgb;

	return `rgba(${r}, ${g}, ${b}, ${a})`;
};

export default async function Home() {
	const banners = await sanityFetch<SanityDocument[]>({
		query: BANNERS_QUERY,
	});
	const formattedBanners = banners.map((banner: any) => {
		return {
			...banner,
			...(banner?.image && { image: urlForImage(banner.image) }),
			...(banner?.video && { video: urlForVideo(banner.video) }),
			...(banner?.backgroundColor?.rgb && {
				backgroundColor: mapRgba(banner?.backgroundColor?.rgb),
			}),
		};
	});

	const galleries = await sanityFetch<SanityDocument[]>({
		query: GALLERIES_QUERY,
	});
	const formattedGalleries = galleries.map((gallery: any) => {
		return {
			...gallery,
			...(gallery?.image && { image: urlForImage(gallery.image) }),
		};
	});

	return (
		<>
			<div className="mt-96 lg:hidden"></div>
			{/* <-- ==== Hero Section Start ==== --> */}
			<div className="w-full h-screen">
				<HeroCarousel banners={formattedBanners} />
			</div>
			{/* <-- ==== Hero Section End ==== --> */}

			<RouteSection />

			<GaleriSection galleries={formattedGalleries} />
		</>
	);
}
