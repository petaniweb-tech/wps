// src/utils/navbarUtils.ts
export type NavItem = {
	label: string;
	link: string;
	children?: NavItem[];
};

export const getNavItems = (trNavbar: any): NavItem[] => [
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

export const getSelectedMenuClass = (
	currentPath: string,
	link: string,
	selectedBorderColor: string
): string => {
	const borderColor = `border-b-2 ${selectedBorderColor}`;
	const transparentBorder = "border-b-2 border-transparent";

	if (currentPath === "/about-us" && link === "/tentang-kami")
		return borderColor;
	if (currentPath === "/gallery" && link === "/galeri") return borderColor;
	if (currentPath === "/contact-us" && link === "/hubungi-kami")
		return borderColor;

	const isFleetPath =
		currentPath.startsWith("/armada") || currentPath.startsWith("/fleet");
	const isFleetLink = link === "#";

	if (isFleetPath && isFleetLink) return borderColor;

	return currentPath === link || (currentPath === "/" && link === "/")
		? borderColor
		: transparentBorder;
};
