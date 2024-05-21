import { useTranslations } from "next-intl";
import GaleriCarousel from "./galeri-carousel";

export function GaleriSection() {

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
          <div className="w-full pt-24">
            <GaleriCarousel />
          </div>
          {/* <-- ==== Galeri Carousel End ==== --> */}
        </section>
        {/* <-- ==== Galeri Section Start ==== --> */}
      </div>
    );
}