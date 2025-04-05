import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import PricingSection from "@/components/PricingSection";
import React from "react";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<HighlightsSection />
			<PricingSection />
		</main>
	);
}
