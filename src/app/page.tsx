import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import PricingSection from "@/components/PricingSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import React from "react";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<HighlightsSection />
			<PricingSection />
			<InstructorSection />
			<TestimonialsSection />
		</main>
	);
}
