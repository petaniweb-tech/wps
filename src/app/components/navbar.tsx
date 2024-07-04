import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Link } from "../../../lib/navigation";
import {
	getNavItems,
	getSelectedMenuClass,
	NavItem,
} from "../../utils/navbarutils";

// Import Components //
import { LocaleSwitcherDesktop, LocaleSwitcherMobile } from "./locale-switcher";

// Import Icons //
import {
	ChevronDownIcon,
	HamburgerMenuIcon,
	Cross2Icon,
	TriangleDownIcon,
} from "@radix-ui/react-icons";

// Import Assets //
import whitelogo from "../../../assets/images/img-white-logo.webp";
import whatsapp from "../../../assets/icons/icon-whatsapp.png";
import tiktok from "../../../assets/icons/icon-tiktok.png";
import instagram from "../../../assets/icons/icon-instagram.png";
import email from "../../../assets/icons/icon-email.png";

function Navbar() {
	const trNavbar = useTranslations("Navbar");

	const pathname = usePathname();
	const segments = pathname.split("/");

	const strippedPathname =
		segments.length > 2 ? `/${segments.slice(2).join("/")}` : "/";

	const navItems: NavItem[] = getNavItems(trNavbar);

	// Navbar Container Mobile //
	const [isOpen, setOpen] = useState(false);

	// Dropdown Mobile //
	const [dropdownOpen, setDropdownOpen] = useState<boolean[]>(
		Array(navItems.length).fill(false)
	);
	const [dropdownHeights, setDropdownHeights] = useState<number[]>(
		Array(navItems.length).fill(0)
	);
	const dropdownRefs = useRef<(HTMLDivElement | null)[]>([]);

	// Navbar Toggle //
	const toggleMenu = () => {
		setOpen((prevOpen) => {
			if (!prevOpen) {
				setDropdownOpen(Array(navItems.length).fill(false));
			}
			return !prevOpen;
		});
	};

	// Close menu when navigating //
	const closeMenu = () => {
		setOpen(false);
	};

	const toggleDropdown = (index: number) => {
		setDropdownOpen((prev) => {
			const newDropdownState = [...prev];
			newDropdownState[index] = !newDropdownState[index];
			return newDropdownState;
		});
	};

	const [scrolling, setScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => setScrolling(window.scrollY > 0);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	useEffect(() => {
		const heights = dropdownRefs.current.map(
			(ref) => ref?.scrollHeight || 0
		);
		setDropdownHeights(heights);
	}, [dropdownRefs]);

	return (
		<>
			{/* <-- ==== Navbar Mobile Start ==== --> */}
			<nav className="fixed w-full z-[100] top-0 lg:hidden">
				<div
					className={`flex w-full items-center justify-between px-sectionpxsm py-[26px] transition-all duration-300 ${
						isOpen
							? "bg-transparent"
							: "bg-black bg-opacity-40 backdrop-blur-lg"
					}`}
				>
					{!isOpen && (
						<Link href="/">
							<div
								className={`w-fit h-fit pt-1 block transition-all duration-300 ${
									isOpen ? "opacity-0" : "opacity-100"
								}`}
							>
								<Image
									src={whitelogo}
									alt="Wijaya Putra Santoso"
									title="Wijaya Putra Santoso"
									priority={true}
									className="h-9 w-auto"
								/>
							</div>
						</Link>
					)}

					{/* <-- === Locale Switcher Start === --> */}
					<div
						className={`transition-all duration-300 ${
							isOpen ? "opacity-100" : "opacity-0"
						}`}
					>
						{isOpen && <LocaleSwitcherMobile />}
					</div>
					{/* <-- === Locale Switcher End === --> */}

					{/* <-- === Navbar Toggle Start === --> */}
					<div
						onClick={toggleMenu}
						className="w-fit h-fit justify-self-end flex items-center justify-center"
					>
						{isOpen ? (
							<Cross2Icon className="w-8 h-8 text-white" />
						) : (
							<HamburgerMenuIcon className="w-[30px] h-8 text-white" />
						)}
					</div>
					{/* <-- === Navbar Toggle End === --> */}
				</div>
			</nav>

			{/* <-- ==== Navbar Open Start ==== --> */}
			<div
				className={`fixed w-full h-screen z-[90] lg:hidden
            ${
				isOpen
					? "top-0 left-0 transition-all duration-500 ease-in-out"
					: "-top-full left-0 -translate-y-28 transition-all duration-500 ease-in-out"
			}`}
			>
				<div className="w-full flex flex-col h-full bg-primary px-sectionpxsm pt-36 pb-24 justify-between items-start">
					<div className="flex flex-col w-full gap-6">
						{navItems.map((d, i) => (
							<div
								key={i}
								className={`relative group transition-all ${
									dropdownOpen[i] ? "mb-6" : ""
								}`}
							>
								{d.children ? (
									<div
										onClick={() => toggleDropdown(i)}
										className="flex text-lg items-center gap-3 text-white cursor-pointer"
									>
										<div>{d.label}</div>
										<TriangleDownIcon
											className={`w-5 h-5 transition-transform ${
												dropdownOpen[i]
													? "rotate-180"
													: ""
											}`}
										/>
									</div>
								) : (
									<Link
										href={d.link ?? "#"}
										onClick={closeMenu}
									>
										<div className="flex text-lg items-center gap-3 text-white">
											<div>{d.label}</div>
										</div>
									</Link>
								)}
								{d.children && (
									<div
										ref={(el) => {
											dropdownRefs.current[i] = el;
										}}
										className="translate-y-5 w-full gap-6 flex flex-col overflow-hidden transition-max-height duration-500 ease-in-out"
										style={{
											maxHeight: dropdownOpen[i]
												? `${dropdownHeights[i]}px`
												: "0px",
										}}
									>
										{d.children.map((ch, j) => (
											<Link
												key={j}
												href={ch.link}
												onClick={closeMenu}
											>
												<div className="pb-[10px] text-sm border-b-[1px] border-white border-opacity-80 text-white">
													{ch.label}
												</div>
											</Link>
										))}
									</div>
								)}
							</div>
						))}
					</div>

					<div className="flex w-full items-center justify-between pt-[22px] border-t-[1px] border-white border-opacity-80">
						<div className="w-fit">
							<p className="text-sm text-white">
								{trNavbar("socials")}
							</p>
						</div>
						<div className="flex items-center justify-center gap-4">
							<Link href="https://wa.me/6282132514522">
								<Image
									src={whatsapp}
									alt="WhatsApp"
									priority={true}
									className="h-6 w-auto"
								/>
							</Link>

							<Link
								href="https://www.tiktok.com/@wijayaputrabus"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={tiktok}
									alt="TikTok"
									priority={true}
									className="h-6 w-auto"
								/>
							</Link>

							<Link
								href="https://www.instagram.com/official_wijayaputra"
								target="_blank"
								rel="noopener noreferrer"
							>
								<Image
									src={instagram}
									alt="Instagram"
									priority={true}
									className="h-6 w-auto"
								/>
							</Link>

							<Link href="mailto:wp.trans@yahoo.com">
								<Image
									src={email}
									alt="Email"
									priority={true}
									className="h-6 w-auto"
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* <-- ==== Navbar Open End ==== --> */}
			{/* <-- ==== Navbar Mobile End ==== --> */}

			{/* <-- ==== Navbar Desktop Start ==== --> */}
			<nav
				className={`hidden fixed lg:flex w-full z-[100] px-sectionpxlg 2xl:px-sectionpx2xl justify-between items-center py-5 transition-all duration-300 ${
					scrolling
						? "bg-black bg-opacity-45 backdrop-blur-lg"
						: "bg-transparent"
				}`}
			>
				<Link href="/">
					<div className="w-fit h-fit py-[10px]">
						<Image
							src={whitelogo}
							alt="Wijaya Putra Santoso"
							title="Wijaya Putra Santoso"
							priority={true}
							className="h-9 w-auto"
						/>
					</div>
				</Link>

				<div className="flex items-start gap-4 transition-all border-b-[1px] border-white border-opacity-30">
					{navItems.map((d, i) => (
						<div
							key={i}
							className={`relative group px-2 pb-[14px] transition-all ${getSelectedMenuClass(strippedPathname, d.link, "border-white")}`}
						>
							<Link href={d.link ?? "#"}>
								<div className="flex cursor-pointer text-sm items-center gap-2 text-neutral-200 group-hover:text-white duration-300">
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
											className="group flex cursor-pointer items-center py-2 px-3 w-full rounded hover:bg-[#EDEDED] text-sm text-[#686868] hover:text-black duration-300"
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
						menuColor="text-neutral-200"
						menuHover="text-white"
						dropdownColor="text-neutral-600"
						dropdownHover="text-black"
					/>
				</div>
			</nav>
			{/* <-- ==== Navbar Desktop End ==== --> */}
		</>
	);
}

export default Navbar;
