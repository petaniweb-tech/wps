import type { Config } from "tailwindcss";

const config = {
	mode: "jit",
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./@/**/*.{ts,tsx,js}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			backgroundImage: {
				bgcontact:
					"url('../../../assets/images/gallery/img-gallery-4.webp')",
			},
			colors: {
				primary: "#216CA9",
			},
			padding: {
				// sm //
				sectionpxsm: "22px",
				// lg //
				sectionpxlg: "160px",
				// 2xl //
				sectionpx2xl: "200px",
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
