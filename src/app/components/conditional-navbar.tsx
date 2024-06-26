"use client";

import { usePathname } from "next/navigation";
import Navbar from "./navbar";

const ConditionalNavbar = () => {
	const pathname = usePathname();

	if (
		pathname.includes("/tentang-kami") ||
		pathname.includes("/about-us") ||
		pathname.includes("/armada") ||
		pathname.includes("/fleet") ||
		pathname.includes("/galeri") ||
		pathname.includes("/gallery")
	) {
		return null;
	}

	return <Navbar />;
};

export default ConditionalNavbar;
