import HeroSection from "@/components/HeroSection";
import HighlightsSection from "@/components/HighlightsSection";
import PricingSection from "@/components/PricingSection";
import InstructorSection from "@/components/InstructorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BookingSection from "@/components/BookingSection";
import FaqSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import React from "react";

export default function Home() {
	return (
		<main>
			<HeroSection />
			<HighlightsSection />
			<PricingSection />
			<InstructorSection />
			<TestimonialsSection />
			<BookingSection />
			<FaqSection />
			<Footer />
		</main>
	);
}
