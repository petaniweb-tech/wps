"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "../../../lib/navigation";
import {
	getNavItems,
	getSelectedMenuClass,
	NavItem,
} from "../../utils/navbarutils";

// Import Components //
import { LocaleSwitcherDesktop } from "./locale-switcher";

// Import Icons //
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Import Assets //
import coloredlogo from "../../../assets/images/img-colored-logo.webp";

function SecondaryNavbar() {
	const trNavbar = useTranslations("Navbar");

	const pathname = usePathname();

	const segments = pathname.split("/");
	const strippedPathname =
		segments.length > 2 ? `/${segments.slice(2).join("/")}` : "/";

	const navItems: NavItem[] = getNavItems(trNavbar);

	return (
		<nav className="hidden fixed lg:flex w-full z-[100] px-sectionpxlg 2xl:px-sectionpx2xl justify-between items-center py-5 bg-white bg-opacity-25 backdrop-blur-lg">
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

			<div className="flex items-start gap-4 transition-all border-b-[1px] border-black border-opacity-25">
				{navItems.map((d, i) => (
					<div
						key={i}
						className={`relative group px-2 pb-[14px] transition-all ${getSelectedMenuClass(strippedPathname, d.link, "border-black")}`}
					>
						<Link href={d.link ?? "#"}>
							<div className="flex cursor-pointer text-sm items-center gap-2 text-neutral-600 group-hover:text-black duration-300">
								<div>{d.label}</div>
								{d.children && (
									<ChevronDownIcon className="transition-all group-hover:rotate-180" />
								)}
							</div>
						</Link>
						{d.children && (
							<div className="absolute left-0 top-9 hidden w-auto flex-col gap-1 rounded bg-white py-2 px-2 shadow-md transition-all group-hover:flex">
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
					</div>
				))}
				<LocaleSwitcherDesktop
					menuColor="text-neutral-600"
					menuHover="text-black"
					dropdownColor="text-neutral-600"
					dropdownHover="text-black"
				/>
			</div>
		</nav>
	);
}

export default SecondaryNavbar;
