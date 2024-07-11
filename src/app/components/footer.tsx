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
				<div className="flex flex-col bg-primary px-sectionpxsm py-11">
					<div className="block w-full">
						<Image
							src={whitelogo}
							alt="Wijaya Putra Santoso"
							priority={true}
							className="h-9 w-auto"
						/>
					</div>

					<div className="flex flex-col w-full items-start gap-6 mt-11">
						{/* <-- === WhatsApp Start === --> */}
						<Link href="https://wa.me/6282132514522">
							<div className="flex items-center justify-center gap-4">
								<Image
									src={whatsapp}
									alt="WhatsApp"
									priority={true}
									className="h-6 w-auto"
								/>
								<p className="text-[19px] leading-none text-white font-extralight">
									0821 3251 4522
								</p>
							</div>
						</Link>
						{/* <-- === WhatsApp End === --> */}

						{/* <-- === TikTok Start === --> */}
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
									className="h-6 w-auto"
								/>
								<p className="text-[19px] leading-none text-white font-extralight">
									@wijayaputrabus
								</p>
							</div>
						</Link>
						{/* <-- === TikTok End === --> */}

						{/* <-- === Email Start === --> */}
						<Link href="mailto:wp.trans@yahoo.com">
							<div className="flex items-center justify-center gap-4">
								<Image
									src={email}
									alt="Email"
									priority={true}
									className="h-6 w-auto"
								/>
								<p className="text-[19px] leading-none text-white font-extralight">
									wp.trans@yahoo.com
								</p>
							</div>
						</Link>
						{/* <-- === Email End === --> */}
					</div>

					<div className="flex flex-col w-full items-start mt-11 gap-8">
						<div className="flex flex-col gap-7">
							<div className="flex flex-col gap-2">
								<h5 className="text-lg text-white">
									POOL MALANG
								</h5>
								<p className="text-[15px] text-white text-wrap leading-[1.6]">
									Jl. Raya Wendit Barat No.7, Krajan,
									Kabupaten Malang
								</p>
							</div>

							<div className="flex flex-col gap-2">
								<h5 className="text-lg text-white">
									POOL TANGERANG
								</h5>
								<p className="text-[15px] text-white text-wrap leading-[1.6]">
									Jl. Raya Serang, Kragilan, Kabupaten Serang,
									Banten
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
			{/* <-- ==== Footer Mobile End ==== --> */}

			{/* <-- ==== Footer Desktop Start ==== --> */}
			<footer className="hidden lg:block w-full px-sectionpxlg 2xl:px-sectionpx2xl py-20 bg-primary">
				<div className="flex w-full items-center justify-between">
					{/* <-- === WhatsApp Start === --> */}
					<Link
						href="https://wa.me/6282132514522"
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex w-fit py-[10px] gap-4 items-center justify-center cursor-pointer whitespace-nowrap">
							<Image
								src={whatsapp}
								alt="WhatsApp"
								priority={true}
								className="h-[38px] w-auto"
							/>
							<div className="flex flex-col items-start gap-1">
								<h5 className="text-[15px] text-white font-medium text-nowrap">
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
						<div className="flex w-fit py-[10px] gap-4 items-center justify-center cursor-pointer whitespace-nowrap">
							<Image
								src={tiktok}
								alt="TikTok"
								priority={true}
								className="h-[38px] w-auto"
							/>
							<div className="flex flex-col items-start gap-1">
								<h5 className="text-[15px] text-white font-medium text-nowrap">
									TIKTOK
								</h5>
								<p className="text-xs text-white font-light text-nowrap">
									@wijayaputrabus
								</p>
							</div>
						</div>
					</Link>
					{/* <-- === TikTok End === --> */}

					{/* <-- === Email Start === --> */}
					<Link href="mailto:wp.trans@yahoo.com">
						<div className="flex w-fit py-[10px] gap-4 items-center justify-center cursor-pointer whitespace-nowrap">
							<Image
								src={email}
								alt="Email"
								priority={true}
								className="h-[38px] w-auto"
							/>
							<div className="flex flex-col items-start gap-1">
								<h5 className="text-[15px] text-white font-medium text-nowrap">
									EMAIL
								</h5>
								<p className="text-xs text-white font-light text-nowrap">
									wp.trans@yahoo.com
								</p>
							</div>
						</div>
					</Link>
					{/* <-- === Email End === --> */}

					{/* <-- === Divider Start === --> */}
					<div className="block h-auto w-[1px] bg-white self-stretch"></div>
					{/* <-- === Divider End === --> */}

					{/* <-- === Pool Malang Start === --> */}
					<div className="flex flex-col gap-[6px] items-start justify-center">
						<h5 className="text-[13px] text-white font-medium text-nowrap">
							POOL MALANG
						</h5>
						<p className="text-xs text-white font-light">
							Jl. Raya Wendit Barat No.7,
							<br />
							Krajan, Kabupaten Malang
						</p>
					</div>
					{/* <-- === Pool Malang End === --> */}

					{/* <-- === Pool Tangerang Start === --> */}
					<div className="flex flex-col gap-[6px] items-start justify-center">
						<h5 className="text-[13px] text-white font-medium text-nowrap">
							POOL TANGERANG
						</h5>
						<p className="text-xs text-white font-light">
							Jl. Raya Serang, Kragilan,
							<br />
							Kabupaten Serang, Banten
						</p>
					</div>
					{/* <-- === Pool Tangerang End === --> */}
				</div>
			</footer>
			{/* <-- ==== Footer Desktop End ==== --> */}
		</>
	);
}
