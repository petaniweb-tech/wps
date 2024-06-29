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
): string =>
	currentPath === link || (currentPath === "/" && link === "/")
		? `border-b-2 ${selectedBorderColor}`
		: "border-b-2 border-transparent";
