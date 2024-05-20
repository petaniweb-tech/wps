import Image from "next/image";
import Link from "next/link";

// Import Icons //
import { ChevronDownIcon } from "@radix-ui/react-icons";

// Import Assets //
import logo from "../../../assets/images/img-logo.webp";

type NavItem = {
	label: string;
	link: string;
	children?: NavItem[];
};

const navItems: NavItem[] = [
	{
		label: "BERANDA",
		link: "/",
	},
	{
		label: "TENTANG KAMI",
		link: "/tentang-kami",
	},
	{
		label: "ARMADA",
		link: "#",
		children: [
			{
				label: "ARMADA TRUK",
				link: "/armada/truk",
			},
			{
				label: "ARMADA BUS",
				link: "/armada/bus",
			},
		],
	},
	{
		label: "GALERI",
		link: "/galeri",
	},
	{
		label: "HUBUNGI KAMI",
		link: "/hubungi-kami",
	},
];

function Navbar() {
	return (
		<>
			{/* <-- ==== Navbar Mobile Start ==== --> */}
			{/* <-- ==== Navbar Mobile End ==== --> */}

			{/* <-- ==== Navbar Desktop Start ==== --> */}
			<nav className="hidden fixed lg:flex w-full z-50 px-sectionpxlg 2xl:px-sectionpx2xl justify-between items-center py-5 bg-black bg-opacity-45 backdrop-blur">
				{/* <-- === Logo Start === --> */}
				<Link href="/">
					<Image
						src={logo}
						alt="Wijaya Putra Santoso"
						title="Wijaya Putra Santoso"
						priority={true}
						className="h-16 w-auto"
					/>
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
								<div className="flex cursor-pointer text-sm items-center gap-2 text-gray-300 group-hover:text-white duration-300">
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
											className="group flex cursor-pointer items-center py-2 px-3 w-full rounded hover:bg-[#EDEDED] text-sm text-[#686868] hover:text-black duration-300"
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
				</div>
				{/* <-- === Navbar Links End === --> */}
			</nav>
			{/* <-- ==== Navbar Desktop End ==== --> */}
		</>
	);
}

export default Navbar;
