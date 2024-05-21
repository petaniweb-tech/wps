import { SanityDocument } from "next-sanity";

// Import Sanity //
import { sanityFetch } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { urlForVideo } from "../../../sanity/lib/file";

// Import Components //
import HeroCarousel from "../components/hero-carousel";
import RouteSection from "../components/route-section";
import { GaleriSection } from "../components/galeri-section";

export const runtime = "edge";
const BANNERS_QUERY = `*[_type == "banner"]|order(number asc){_id, title, englishTitle, image, description, englishDescription, video, number, backgroundColor}`;

export interface Banner {
    _id: string;
    title: string;
    description: string;
    backgroundColor: string;
    image?: string;
    video?: string;
}[];

export default async function Home() {
  const banners = await sanityFetch<SanityDocument[]>({ query: BANNERS_QUERY });
  const formattedBanners = banners.map((banner: any) => {
    return {
      ...banner,
      ...(banner?.image && { image: urlForImage(banner.image) }),
      ...(banner?.video && { video: urlForVideo(banner.video) }),
      ...(banner?.backgroundColor?.hex && {
        backgroundColor: banner?.backgroundColor?.hex,
      }),
    };
  });

  return (
    <>
      {/* <-- ==== Hero Section Start ==== --> */}
      <div className="w-full h-screen">
        <HeroCarousel banners={formattedBanners} />
      </div>
      {/* <-- ==== Hero Section End ==== --> */}

	  <RouteSection />

      <GaleriSection />
    </>
  );
}
