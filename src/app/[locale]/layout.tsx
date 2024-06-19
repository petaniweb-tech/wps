import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Inter } from "next/font/google";
import "./globals.css";

// Import Components //
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { Toaster } from "../components/ui/toaster";

const inter = localFont({
	src: '../../../assets/fonts/Helvetica.ttf',
	display: 'swap'
});

export const metadata: Metadata = {
	title: "Wijaya Putra Santoso",
	description: "PT. Wijaya Putra Santoso (WPS) Transportation",
};

export interface RootLayoutProps {
	children: React.ReactNode;
	params: {
		defaultLocale: string;
	};
}

export default function RootLayout({
	children,
	params: { defaultLocale },
}: Readonly<RootLayoutProps>) {
	return (
		<html
			lang={defaultLocale}
			className={`scroll-smooth ${inter.className}`}
		>
			<body className="bg-white">
				<Navbar isWhiteLogo={true} />
				{children}
				<Toaster />
				<Footer />
			</body>
		</html>
	);
}
