"use client";

import Lottie from "lottie-react";
import map from "../../../assets/animations/anim-map.json";

export default function RouteMap() {
	return (
		<section>
			<Lottie animationData={map} className="w-full h-auto" />
		</section>
	);
}
