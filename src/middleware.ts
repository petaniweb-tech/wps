import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	// A list of all locales that are supported
	locales: ["id", "en"],

	// Used when no locale matches
	defaultLocale: "id",

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

export const config = {
	// Match only internationalized pathnames
	matcher: ["/", "/(en|id)/:path*"],
};
