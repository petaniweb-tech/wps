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
				<div className="flex w-full items-start justify-between bg-primary py-10 gap-10 px-sectionpxsm">
					<Image
						src={whitelogo}
						alt="Wijaya Putra Santoso"
						priority={true}
						className="w-28 h-auto"
					/>

					<div className="flex flex-col gap-9 w-full items-start pl-10 border-l border-white">
						<div className="flex flex-col items-start justify-start gap-5">
							<Link href="https://wa.me/6282132514522">
								<div className="flex items-center justify-center gap-4">
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
								<div className="flex items-center justify-center gap-4">
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
								<div className="flex items-center justify-center gap-4">
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
								<div className="flex items-center justify-center gap-4">
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

						<div className="flex flex-col">
							<h3 className="text-base text-white">LOCATION</h3>

							<div className="flex flex-col mt-9 gap-5">
								<div className="flex flex-col gap-2">
									<h5 className="text-sm text-white">
										POOL MALANG
									</h5>
									<p className="text-xs text-white text-wrap leading-[1.6]">
										Jl. Raya Wendit Barat No.7, Krajan,
										Kabupaten Malang
									</p>
								</div>

								<div className="flex flex-col gap-2">
									<h5 className="text-sm text-white">
										POOL TANGERANG
									</h5>
									<p className="text-xs text-white text-wrap leading-[1.6]">
										Jl. Raya Serang, Kragilan,
										<br />
										Kabupaten Serang, Banten
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{/* <-- ==== Footer Mobile End ==== --> */}

			{/* <-- ==== Footer Desktop Start ==== --> */}
			<footer className="hidden lg:block w-full px-[70px] 2xl:px-32 py-20 bg-primary">
				<div className="flex w-full items-center justify-between">
					<div className="flex w-fit items-center justify-center gap-11 2xl:gap-12 py-3">
						{/* <-- === WhatsApp Start === --> */}
						<Link
							href="https://wa.me/6282132514522"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="flex w-fit gap-4 items-center justify-center cursor-pointer whitespace-nowrap">
								<Image
									src={whatsapp}
									alt="WhatsApp"
									priority={true}
									className="h-[38px] w-auto"
								/>
								<div className="flex flex-col items-start gap-1">
									<h5 className="text-sm text-white font-medium text-nowrap">
										WHATSAPP
									</h5>
									<p className="text-xs text-white font-light text-nowrap">
										0821 3251 4522
									</p>
								</div>
							</div>
						</Link>
						{/* <-- === WhatsApp End === --> */}

						{/* <-- === TikTok Start === --> */}
						<Link
							href="https://www.tiktok.com/@wijayaputrabus"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="flex w-fit gap-4 items-center justify-center cursor-pointer whitespace-nowrap">
								<Image
									src={tiktok}
									alt="TikTok"
									priority={true}
									className="h-[38px] w-auto"
								/>
								<div className="flex flex-col items-start gap-1">
									<h5 className="text-sm text-white font-medium text-nowrap">
										TIKTOK
									</h5>
									<p className="text-xs text-white font-light text-nowrap">
										@wijayaputrabus
									</p>
								</div>
							</div>
						</Link>
						{/* <-- === TikTok End === --> */}

						{/* <-- === Instagram Start === --> */}
						<Link
							href="https://www.instagram.com/official_wijayaputra"
							target="_blank"
							rel="noopener noreferrer"
						>
							<div className="flex w-fit gap-4 items-center justify-center cursor-pointer whitespace-nowrap">
								<Image
									src={instagram}
									alt="Instagram"
									priority={true}
									className="h-[38px] w-auto"
								/>
								<div className="flex flex-col items-start gap-1">
									<h5 className="text-sm text-white font-medium text-nowrap">
										INSTAGRAM
									</h5>
									<p className="text-xs text-white font-light text-nowrap">
										official_wijayaputra
									</p>
								</div>
							</div>
						</Link>
						{/* <-- === Instagram End === --> */}

						{/* <-- === Email Start === --> */}
						<Link href="mailto:wp.trans@yahoo.com">
							<div className="flex w-fit gap-4 items-center justify-center cursor-pointer whitespace-nowrap">
								<Image
									src={email}
									alt="Email"
									priority={true}
									className="h-[38px] w-auto"
								/>
								<div className="flex flex-col items-start gap-1">
									<h5 className="text-sm text-white font-medium text-nowrap">
										EMAIL
									</h5>
									<p className="text-xs text-white font-light text-nowrap">
										wp.trans@yahoo.com
									</p>
								</div>
							</div>
						</Link>
						{/* <-- === Email End === --> */}
					</div>

					<div className="block h-auto w-[1px] bg-white self-stretch"></div>

					<div className="flex w-auto items-center justify-center gap-11 2xl:gap-12">
						<div className="w-fit whitespace-nowrap items-center justify-center">
							<h5 className="text-base text-white font-medium text-nowrap">
								LOCATION
							</h5>
						</div>

						<div className="flex flex-col gap-1 items-start justify-center">
							<h5 className="text-[13px] text-white font-medium text-nowrap">
								POOL MALANG
							</h5>
							<p className="text-xs text-white font-light">
								Jl. Raya Wendit Barat No.7,
								<br />
								Krajan, Kabupaten Malang
							</p>
						</div>

						<div className="flex flex-col gap-1 items-start justify-center">
							<h5 className="text-[13px] text-white font-medium text-nowrap">
								POOL TANGERANG
							</h5>
							<p className="text-xs text-white font-light">
								Jl. Raya Serang, Kragilan,
								<br />
								Kabupaten Serang, Banten
							</p>
						</div>
					</div>
				</div>
			</footer>
			{/* <-- ==== Footer Desktop End ==== --> */}
		</>
	);
}
