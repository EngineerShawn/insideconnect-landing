// frontend/src/components/PricingSection.js

import React from "react";
import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Divider,
} from "@nextui-org/react";

const plans = [
    {
        name: "Free Tier",
        price: "$0/mo",
        features: ["Nationwide Inmate Locator", "Real-time Tracking"],
        comingSoon: false,
    },
    {
        name: "Premium",
        price: "Coming Soon",
        features: ["AI Letter Builder", "Document Vault", "Commissary Tracker"],
        comingSoon: true,
    },
];

export default function PricingSection() {
    return (
        <section
            id="pricing"
            className="py-16 px-4 text-white"
            style={{ backgroundColor: "#112A46" }}
        >
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 mb-10">
                    Early Access & Pricing
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            isHoverable={!plan.comingSoon}
                            className={`bg-[#173249] flex flex-col justify-between h-full ${plan.comingSoon ? "opacity-60 pointer-events-none" : ""
                                }`}
                            aria-label={`${plan.name} plan ${plan.comingSoon ? "coming soon" : "available"}`}
                        >
                            <CardBody>
                                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                                    {plan.name}
                                </h3>
                                <p className="text-lg text-cyan-100">{plan.price}</p>

                                <Divider className="my-4 border-cyan-700" />

                                <ul className="text-left text-cyan-50 space-y-2">
                                    {plan.features.map((feat, idx) => (
                                        <li key={idx} className="text-base">
                                            • {feat}
                                        </li>
                                    ))}
                                </ul>
                            </CardBody>

                            <CardFooter>
                                {plan.comingSoon ? (
                                    <Button
                                        isDisabled
                                        className="bg-gray-600 text-gray-300 w-full cursor-not-allowed"
                                    >
                                        Coming Soon
                                    </Button>
                                ) : (
                                    <Button
                                        className="bg-teal-400 text-[#003440] font-semibold w-full transition-colors duration-300 hover:bg-teal-500"
                                    >
                                        Get Early Access
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
