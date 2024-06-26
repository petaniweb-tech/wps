// Import Components //
import SecondaryNavbar from "@/app/components/secondary-navbar";

export default function GaleriLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<SecondaryNavbar />
			{children}
		</>
	);
}
