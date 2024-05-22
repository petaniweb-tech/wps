import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { locales, localePrefix } from "../lib/navigation";

const intlMiddleware = createMiddleware({
	defaultLocale: "id",
	localePrefix,
	locales,

	pathnames: {
		"/": "/",

		"/tentang-kami": {
			id: "/tentang-kami",
			en: "/about-us",
		},

		"/armada/truk": {
			id: "/armada/truk",
			en: "/fleet/truck",
		},

		"/armada/bus": {
			id: "/armada/bus",
			en: "/fleet/bus",
		},

		"/galeri": {
			id: "/galeri",
			en: "/gallery",
		},

		"/hubungi-kami": {
			id: "/hubungi-kami",
			en: "/contact-us",
		},
	},
});

export function middleware(request: NextRequest) {
	const pathname = request.nextUrl.pathname;

	if (!locales.some((locale) => pathname.startsWith(`/${locale}`))) {
		const defaultLocale = "id";
		const newUrl = new URL(`/${defaultLocale}${pathname}`, request.url);
		return NextResponse.redirect(newUrl);
	}

	return intlMiddleware(request);
}

export const config = {
	matcher: ["/", "/(en|id)/:path*"],
};
