import Link from "next/link";
import Image from "next/image";

// Import Assets //
import whitelogo from "../../../assets/images/img-white-logo.webp";
import whatsapp from "../../../assets/icons/icon-whatsapp.png";
import tiktok from "../../../assets/icons/icon-tiktok.png";
import instagram from "../../../assets/icons/icon-instagram.png";
import email from "../../../assets/icons/icon-email.png";

export default function Footer() {
	return (
		<>
			{/* <-- ==== Footer Mobile Start ==== --> */}
			<footer className="block lg:hidden w-full">
				<div className="flex w-full items-start justify-between bg-primary py-10 px-sectionpxsm">
					<Image
						src={whitelogo}
						alt="Wijaya Putra Santoso"
						priority={true}
						className="h-7 w-auto"
					/>

					<div className="block h-auto w-[1px] bg-white self-stretch"></div>

					<div className="flex flex-col items-start gap-5">
						<Link href="https://wa.me/6282132514522">
							<div className="flex items-center justify-center gap-6">
								<Image
									src={whatsapp}
									alt="WhatsApp"
									priority={true}
									className="w-[22px] h-auto"
								/>
								<p className="text-[15px] leading-none text-white font-extralight">
									0821 3251 4522
								</p>
							</div>
						</Link>

						<Link
							href="https://www.tiktok.com/@wijayaputrabus"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="flex items-center justify-center gap-6">
								<Image
									src={tiktok}
									alt="TikTok"
									priority={true}
									className="w-[22px] h-auto"
								/>
								<p className="text-[15px] leading-none text-white font-extralight">
									@wijayaputrabus
								</p>
							</div>
						</Link>

						<Link
							href="https://www.instagram.com/official_wijayaputra"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="flex items-center justify-center gap-6">
								<Image
									src={instagram}
									alt="Instagram"
									priority={true}
									className="w-[22px] h-auto"
								/>
								<p className="text-[15px] leading-none text-white font-extralight">
									official_wijayaputra
								</p>
							</div>
						</Link>

						<Link href="mailto:wp.trans@yahoo.com">
							<div className="flex items-center justify-center gap-6">
								<Image
									src={email}
									alt="Email"
									priority={true}
									className="w-[22px] h-auto"
								/>
								<p className="text-[15px] leading-none text-white font-extralight">
									wp.trans@yahoo.com
								</p>
							</div>
						</Link>
					</div>
				</div>
			</footer>
			{/* <-- ==== Footer Mobile End ==== --> */}

			{/* <-- ==== Footer Desktop Start ==== --> */}
			<footer className="hidden lg:block w-full px-sectionpxlg 2xl:px-sectionpx2xl py-20 bg-primary">
				<div className="flex w-full items-center justify-between">
					<Link
						href="https://wa.me/6282132514522"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex items-center gap-6 w-full justify-center py-2">
							<Image
								src={whatsapp}
								alt="WhatsApp"
								priority={true}
								className="h-12 w-auto"
							/>
							<div className="flex flex-col items-start gap-1">
								<h5 className="text-xl text-white font-medium">
									WHATSAPP
								</h5>
								<p className="text-sm text-white font-light">
									0821 3251 4522
								</p>
							</div>
						</div>
					</Link>

					<div className="block h-auto w-[1px] bg-white self-stretch"></div>

					<Link
						href="https://www.tiktok.com/@wijayaputrabus"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex items-center gap-6 w-full justify-center py-2">
							<Image
								src={tiktok}
								alt="TikTok"
								priority={true}
								className="h-12 w-auto"
							/>
							<div className="flex flex-col items-start gap-1">
								<h5 className="text-xl text-white font-medium">
									TIKTOK
								</h5>
								<p className="text-sm text-white font-light">
									@wijayaputrabus
								</p>
							</div>
						</div>
					</Link>

					<div className="block h-auto w-[1px] bg-white self-stretch"></div>

					<Link
						href="https://www.instagram.com/official_wijayaputra"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex items-center gap-6 w-full justify-center py-2">
							<Image
								src={instagram}
								alt="Instagram"
								priority={true}
								className="h-12 w-auto"
							/>
							<div className="flex flex-col items-start gap-1">
								<h5 className="text-xl text-white font-medium">
									INSTAGRAM
								</h5>
								<p className="text-sm text-white font-light">
									official_wijayaputra
								</p>
							</div>
						</div>
					</Link>

					<div className="block h-auto w-[1px] bg-white self-stretch"></div>

					<Link href="mailto:wp.trans@yahoo.com">
						<div className="flex items-center gap-6 w-full justify-center py-2">
							<Image
								src={email}
								alt="Email"
								priority={true}
								className="h-12 w-auto"
							/>
							<div className="flex flex-col items-start gap-1">
								<h5 className="text-xl text-white font-medium">
									EMAIL
								</h5>
								<p className="text-sm text-white font-light">
									wp.trans@yahoo.com
								</p>
							</div>
						</div>
					</Link>
				</div>
			</footer>
			{/* <-- ==== Footer Desktop End ==== --> */}
		</>
	);
}
