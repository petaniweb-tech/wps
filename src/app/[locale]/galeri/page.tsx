import { SanityDocument } from "next-sanity";

// Import Sanity //
import { sanityFetch } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";

// Import Components //
import GaleriPage from "@/app/components/sections/galeri-page";
import GaleriCarousel from "@/app/components/galeri-carousel";

export const runtime = "edge";

const GALLERIES_QUERY = `*[_type == "gallery"]|order(number asc){_id, title, englishTitle, year, image}`;

export interface Gallery {
	_id: string;
	title: string;
	year: string;
	image?: string;
}
[];

export default async function Galeri() {
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
			{/* <-- ==== Galeri Mobile Start ==== --> */}
			<section className="block lg:hidden w-full">
				<GaleriPage galleries={formattedGalleries} />
			</section>
			{/* <-- ==== Galeri Mobile End ==== --> */}

			{/* <-- ==== Galeri Desktop Start ==== --> */}
			<section className="hidden lg:block w-full px-sectionpxlg 2xl:px-sectionpx2xl pt-40 pb-44">
				<GaleriCarousel galleries={formattedGalleries} />
			</section>
			{/* <-- ==== Galeri Desktop End ==== --> */}
		</>
	);
}
