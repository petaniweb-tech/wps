import createMiddleware from "next-intl/middleware";
import { locales, localePrefix } from "../lib/navigation";

export default createMiddleware({
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

export const config = {
	matcher: ["/", "/(en|id)/:path*"],
};
