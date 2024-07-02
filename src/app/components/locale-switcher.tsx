"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState, useTransition } from "react";

// Import Icons //
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Import Assets //
import idflag from "../../../assets/icons/icon-id.svg";
import enflag from "../../../assets/icons/icon-en.svg";

interface LocaleSwitcherProps {
	menuColor: string;
	menuHover: string;
	dropdownColor: string;
	dropdownHover: string;
}

export const LocaleSwitcherMobile: React.FC = () => {
	const locale = useLocale();
	const router = useRouter();

	const handleLocaleChange = (value: string) => {
		router.replace(`/${value}`);
	};

	return (
		<div className="flex items-center justify-center gap-3">
			<Image
				src={locale === "id" ? idflag : enflag}
				alt={locale.toUpperCase()}
				priority={true}
				className="h-4 w-5"
			/>
			<div className="flex items-center justify-center gap-3">
				<div
					onClick={() => handleLocaleChange("id")}
					className={`text-lg leading-none ${locale === "id" ? "text-white font-bold" : "text-white"}`}
				>
					ID
				</div>

				<div className="w-[1px] h-5 bg-white"></div>

				<div
					onClick={() => handleLocaleChange("en")}
					className={`text-lg leading-none ${locale === "en" ? "text-white font-bold" : "text-white"}`}
				>
					EN
				</div>
			</div>
		</div>
	);
};

export const LocaleSwitcherDesktop: React.FC<LocaleSwitcherProps> = ({
	menuColor,
	menuHover,
	dropdownColor,
	dropdownHover,
}) => {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const locale = useLocale();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [isDropdownOpen, setDropdownOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const handleLocaleChange = (value: string) => {
		const newPath = `/${value}${pathname.replace(`/${locale}`, "")}`;
		const newQuery = searchParams.toString();
		const newUrl = newQuery ? `${newPath}?${newQuery}` : newPath;

		startTransition(() => {
			router.replace(newUrl);
		});
		setDropdownOpen(false);
	};

	const handleClickOutside = (event: MouseEvent) => {
		if (
			dropdownRef.current &&
			!dropdownRef.current.contains(event.target as Node)
		) {
			setDropdownOpen(false);
		}
	};

	useEffect(() => {
		if (isDropdownOpen) {
			document.addEventListener("click", handleClickOutside);
		} else {
			document.removeEventListener("click", handleClickOutside);
		}

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [isDropdownOpen]);

	useEffect(() => {
		setDropdownOpen(false);
	}, [pathname]);

	return (
		<div ref={dropdownRef} className="relative">
			<div
				className={`flex cursor-pointer text-sm items-center gap-2 ${menuColor} group-hover:${menuHover} duration-300`}
				onClick={() => setDropdownOpen(!isDropdownOpen)}
			>
				<div className="flex items-center gap-[10px]">
					<Image
						src={locale === "id" ? idflag : enflag}
						alt={locale.toUpperCase()}
						priority={true}
						className="h-3 w-4"
					/>
					<div>{locale.toUpperCase()}</div>
				</div>
				<ChevronDownIcon
					className={`transition-all ${isDropdownOpen ? "rotate-180" : ""}`}
				/>
			</div>

			{isDropdownOpen && (
				<div className="absolute right-0 top-9 flex w-auto flex-col gap-1 rounded bg-white py-2 px-2 shadow-md transition-all flex-nowrap">
					<div
						className={`group flex cursor-pointer justify-start items-center py-2 pl-3 pr-12 gap-[10px] w-full rounded hover:bg-[#EDEDED] text-sm ${dropdownColor} hover:${dropdownHover} duration-300`}
						onClick={() => handleLocaleChange("id")}
					>
						<Image
							src={idflag}
							alt="ID"
							priority={true}
							className="h-3 w-4"
						/>
						<div className="whitespace-nowrap">ID</div>
					</div>
					<div
						className={`group flex cursor-pointer justify-start items-center py-2 pl-3 pr-12 gap-[10px] w-full rounded hover:bg-[#EDEDED] text-sm ${dropdownColor} hover:${dropdownHover} duration-300`}
						onClick={() => handleLocaleChange("en")}
					>
						<Image
							src={enflag}
							alt="EN"
							priority={true}
							className="h-3 w-4"
						/>
						<div className="whitespace-nowrap">EN</div>
					</div>
				</div>
			)}
		</div>
	);
};

const LocaleSwitcher: React.FC<LocaleSwitcherProps> = (props) => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize(); // Check initial screen size
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return isMobile ? (
		<LocaleSwitcherMobile />
	) : (
		<LocaleSwitcherDesktop {...props} />
	);
};

export default LocaleSwitcher;
