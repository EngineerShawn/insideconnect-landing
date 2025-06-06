// src/components/FeaturesSection.js

import React from "react";
import { Card, CardBody, Image, Spacer } from "@nextui-org/react";

const featureList = [
    {
        name: "Inmate Timeline",
        description: "Track movement, transfers, and key status updates over time.",
        image: "/features/timeline-mockup.png",
    },
    {
        name: "Legal Doc Vault",
        description: "Securely upload and store legal documents in one trusted place.",
        image: "/features/docvault-mockup.png",
    },
    {
        name: "Commissary Tracker",
        description: "Monitor balances and deposit history with clarity and ease.",
        image: "/features/commissary-mockup.png",
    },
    {
        name: "AI Letter Generator",
        description: "Write thoughtful letters with the help of AI-trained support.",
        image: "/features/ai-lettergen-mockup.png",
    },
];

export default function FeaturesSection() {
    return (
        <section
            id="features"
            className="bg-[#112A46] py-16 px-4 text-white"
            aria-label="Platform Features Section"
        >
            <div className="max-w-[1100px] mx-auto text-center">
                <h2 className="text-[#00BFA5] font-bold text-3xl mb-8">Platform Features</h2>

                <div
                    className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-2 
            lg:grid-cols-4 
            gap-6 
            justify-items-center
          "
                >
                    {featureList.map((feature, index) => (
                        <Card
                            key={index}
                            isHoverable
                            className="bg-[#173249] w-full max-w-[340px] shadow-lg transition-transform hover:scale-[1.03]"
                            role="article"
                            aria-labelledby={`feature-title-${index}`}
                            aria-describedby={`feature-desc-${index}`}
                        >
                            <CardBody className="p-6">
                                <Image
                                    src={feature.image}
                                    alt={feature.name}
                                    width={340}
                                    height={200}
                                    className="rounded-lg object-cover mb-4"
                                />
                                <h4
                                    id={`feature-title-${index}`}
                                    className="text-[#00BFA5] text-xl font-semibold mb-2"
                                >
                                    {feature.name}
                                </h4>
                                <p
                                    id={`feature-desc-${index}`}
                                    className="text-[#E0F7FA] text-base m-0"
                                >
                                    {feature.description}
                                </p>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                <Spacer y={4} />
            </div>
        </section>
    );
}
