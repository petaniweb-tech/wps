"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Navbar from "./navbar";
import SecondaryNavbar from "./secondary-navbar";

const NavbarWrapper = () => {
	const [isMobile, setIsMobile] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const secondaryNavbarPaths = [
		"/tentang-kami",
		"/about-us",
		"/armada",
		"/fleet",
		"/galeri",
		"/gallery",
	];

	const shouldUseSecondaryNavbar = secondaryNavbarPaths.some((path) =>
		pathname.includes(path)
	);

	if (
		pathname.includes("/hubungi-kami") ||
		pathname.includes("/contact-us")
	) {
		return isMobile ? <SecondaryNavbar /> : <Navbar />;
	}

	if (shouldUseSecondaryNavbar) {
		return <SecondaryNavbar />;
	}

	return <Navbar />;
};

export default NavbarWrapper;
