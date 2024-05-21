// Import Components //

import GaleriCarousel from "@/app/components/galeri-carousel";

export const runtime = "edge";

export default function Galeri() {
	return (
		<section className="w-full px-sectionpxlg 2xl:px-sectionpx2xl pt-40 pb-44">
			<GaleriCarousel />
		</section>
	);
}
