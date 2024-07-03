import Image from "next/image";

interface GaleriShowcaseProps {
	galleries: {
		_id: string;
		title: string;
		image?: string;
	}[];
}

export default function GaleriShowcase({
	galleries = [],
}: GaleriShowcaseProps) {
	return (
		<div className="flex flex-col w-full gap-[26px]">
			{galleries.map((gallery) => (
				<div key={gallery._id}>
					<Image
						src={
							gallery?.image ??
							"https://via.placeholder.com/1080x729"
						}
						alt={gallery.title}
						priority={true}
						width={1000}
						height={750}
						className="w-full h-auto object-cover"
					/>
				</div>
			))}
		</div>
	);
}
