import Link from "next/link";
import Image from "next/image";

// Import Assets //
import whatsapp from "../../../assets/icons/icon-whatsapp.png";
import tiktok from "../../../assets/icons/icon-tiktok.png";
import email from "../../../assets/icons/icon-email.png";

export default function Footer() {
	return (
		<footer className="w-full lg:px-sectionpxlg 2xl:px-sectionpx2xl lg:py-20 bg-primary">
			<div className="flex lg:justify-center lg:px-6">
				<div className="flex items-center lg:gap-6 w-full justify-center lg:py-2">
					<Image
						src={whatsapp}
						alt="Whatsapp"
						priority={true}
						className="lg:h-12 w-auto"
					/>
					<div className="flex flex-col items-start gap-1">
						<h5 className="lg:text-xl text-white font-medium">
							WHATSAPP
						</h5>
						<p className="lg:text-sm text-white font-light">
							081332764050
						</p>
					</div>
				</div>

				<div className="flex items-center lg:gap-6 w-full justify-center lg:py-2 border-x-[1px] border-white">
					<Image
						src={tiktok}
						alt="Whatsapp"
						priority={true}
						className="lg:h-12 w-auto"
					/>
					<div className="flex flex-col items-start gap-1">
						<h5 className="lg:text-xl text-white font-medium">
							TIKTOK
						</h5>
						<p className="lg:text-sm text-white font-light">
							@officialwijayaputra
						</p>
					</div>
				</div>

				<div className="flex items-center lg:gap-6 w-full justify-center lg:py-2">
					<Image
						src={email}
						alt="Whatsapp"
						priority={true}
						className="lg:h-12 w-auto"
					/>
					<div className="flex flex-col items-start gap-1">
						<h5 className="lg:text-xl text-white font-medium">
							EMAIL
						</h5>
						<p className="lg:text-sm text-white font-light">
							wijayaputra@gmail.com
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
