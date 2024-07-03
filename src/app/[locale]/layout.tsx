import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Import Components //
import { NextIntlClientProvider } from "next-intl";
import NavbarWrapper from "../components/navbar-wrapper";
import Footer from "../components/footer";
import { Toaster } from "../components/ui/toaster";

const inter = localFont({
	src: "../../../assets/fonts/Helvetica.ttf",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Wijaya Putra Santoso",
	description: "PT. Wijaya Putra Santoso (WPS) Transportation",
};

export interface RootLayoutProps {
	children: React.ReactNode;
	params: {
		locale: string;
	};
}

export default function RootLayout({
	children,
	params: { locale },
}: RootLayoutProps) {
	let messages;
	try {
		messages = require(`../../../messages/${locale}.json`);
	} catch (error) {
		console.error(`Could not load messages for locale: ${locale}`);
	}

	return (
		<html lang={locale} className={`scroll-smooth ${inter.className}`}>
			<body className="bg-white">
				<NextIntlClientProvider locale={locale} messages={messages}>
					<NavbarWrapper />
					{children}
					<Toaster />
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
