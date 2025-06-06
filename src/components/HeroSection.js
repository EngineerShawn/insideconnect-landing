// frontend/src/components/HeroSection.js

import React from "react";
import { Button, Link } from "@nextui-org/react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
            {/* Navbar */}
            <nav className="w-full sticky top-0 z-50 backdrop-blur-sm bg-black/50">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                    <h1 className="text-white text-xl font-bold">InsideConnect</h1>
                    <div className="flex gap-6 items-center text-white font-semibold text-sm">
                        <a href="#about" className="hover:text-[#00BFA5] transition-colors">About</a>
                        <a href="#features" className="hover:text-[#00BFA5] transition-colors">Features</a>
                        <a href="#contact" className="hover:text-[#00BFA5] transition-colors">Contact</a>
                    </div>
                </div>
            </nav>

            {/* Hero Content */}
            <div className="flex flex-col items-center justify-center text-center px-6 pt-28 pb-16 max-w-2xl mx-auto">
                <h2 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
                    Connecting Families. Reforming the System.
                </h2>
                <p className="text-[#E0F7FA] text-lg mb-8">
                    InsideConnect is the first true platform to locate, message, and support incarcerated loved ones across the U.S.
                </p>
                <Button
                    as={Link}
                    href="#waitlist"
                    size="lg"
                    radius="sm"
                    className="bg-[#00BFA5] text-white font-semibold hover:bg-[#00a58f] transition-colors"
                >
                    Join the Waitlist
                </Button>
            </div>
        </section>
    );
}
