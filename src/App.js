import React from "react";

// Import all sections
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialSection from "./components/TestimonialSection";
import TimelineSection from "./components/TimelineSection";
import PricingSection from "./components/PricingSection";
import FooterSection from "./components/FooterSection";

export default function App() {
    return (
        <main>
            {/* Render all sections in the specified order */}
            <HeroSection />
            <ProblemSection />
            <SolutionSection />
            <FeaturesSection />
            <TestimonialSection />
            <TimelineSection />
            <PricingSection />
            <FooterSection />
        </main>
    );
}
