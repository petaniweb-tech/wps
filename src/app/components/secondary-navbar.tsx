"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "../../../lib/navigation";

// Import Components //
import LocaleSwitcher from "./locale-switcher";

// Import Icons //
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Import Assets //
import coloredlogo from "../../../assets/images/img-colored-logo.webp";

type NavItem = {
	label: string;
	link: string;
	children?: NavItem[];
};

function SecondaryNavbar() {
	const trNavbar = useTranslations("Navbar");

	const navItems: NavItem[] = [
		{
			label: trNavbar("home"),
			link: "/",
		},
		{
			label: trNavbar("aboutUs"),
			link: "/tentang-kami",
		},
		{
			label: trNavbar("fleet"),
			link: "#",
			children: [
				{
					label: trNavbar("fleetTruck"),
					link: "/armada/truk",
				},
				{
					label: trNavbar("fleetBus"),
					link: "/armada/bus",
				},
			],
		},
		{
			label: trNavbar("gallery"),
			link: "/galeri",
		},
		{
			label: trNavbar("contactUs"),
			link: "/hubungi-kami",
		},
	];

	return (
		<>
			{/* <-- ==== Navbar Mobile Start ==== --> */}
			{/* <-- ==== Navbar Mobile End ==== --> */}

			{/* <-- ==== Navbar Desktop Start ==== --> */}
			<nav className="hidden fixed lg:flex w-full z-[100] px-sectionpxlg 2xl:px-sectionpx2xl justify-between items-center py-5 bg-white bg-opacity-25 backdrop-blur-lg">
				{/* <-- === Logo Start === --> */}
				<Link href="/">
					<div className="w-fit h-fit pt-[10px]">
						<Image
							src={coloredlogo}
							alt="Wijaya Putra Santoso"
							title="Wijaya Putra Santoso"
							priority={true}
							className="h-9 w-auto"
						/>
					</div>
				</Link>
				{/* <-- === Logo End === --> */}

				{/* <-- === Navbar Links Start === --> */}
				<div className="flex items-center gap-4 transition-all">
					{navItems.map((d, i) => (
						<div
							key={i}
							className="relative group px-2 py-3 transition-all"
						>
							<Link href={d.link ?? "#"}>
								<div className="flex cursor-pointer text-sm items-center gap-2 text-neutral-600 group-hover:text-black duration-300">
									<div>{d.label}</div>
									{d.children && (
										<ChevronDownIcon className="transition-all group-hover:rotate-180" />
									)}
								</div>
							</Link>

							{/* <-- == Dropdown Menu Start == --> */}
							{d.children && (
								<div className="absolute left-0 top-11 hidden w-auto flex-col gap-1 rounded bg-white py-2 px-2 shadow-md transition-all group-hover:flex">
									{d.children.map((ch, j) => (
										<Link
											key={j}
											href={ch.link}
											className="group flex cursor-pointer items-center py-2 px-3 w-full rounded hover:bg-[#EDEDED] text-sm text-neutral-500 hover:text-black duration-300"
										>
											<div className="whitespace-nowrap">
												{ch.label}
											</div>
										</Link>
									))}
								</div>
							)}
							{/* <-- == Dropdown Menu End == --> */}
						</div>
					))}
					{/* <LocaleSwitcher /> */}
					<LocaleSwitcher
						menuColor="text-neutral-600"
						menuHover="text-black"
						dropdownColor="text-neutral-600"
						dropdownHover="text-black"
					/>
				</div>
				{/* <-- === Navbar Links End === --> */}
			</nav>
			{/* <-- ==== Navbar Desktop End ==== --> */}
		</>
	);
}

export default SecondaryNavbar;
