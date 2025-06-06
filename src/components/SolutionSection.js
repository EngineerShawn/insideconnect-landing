// frontend/src/components/SolutionSection.js

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import {
    SearchIcon,
    MailIcon,
    CalendarIcon,
    UsersIcon,
} from "@heroicons/react/solid";

export default function SolutionSection() {
    const features = [
        {
            icon: <SearchIcon className="w-6 h-6 text-[#00BFA5]" />,
            title: "Nationwide Inmate Locator",
            description: "Quickly find where your loved one is housed across all states.",
        },
        {
            icon: <MailIcon className="w-6 h-6 text-[#00BFA5]" />,
            title: "AI-Guided Letter Builder",
            description: "Craft thoughtful, impactful messages with our smart writing assistant.",
        },
        {
            icon: <CalendarIcon className="w-6 h-6 text-[#00BFA5]" />,
            title: "Visitation Scheduler",
            description: "Easily plan visits without the phone tag and confusion.",
        },
        {
            icon: <UsersIcon className="w-6 h-6 text-[#00BFA5]" />,
            title: "Private Family Support Circles",
            description: "Connect with others going through the same experience.",
        },
    ];

    return (
        <section className="bg-[#0F2235] text-white py-16 px-4">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-[#00BFA5] mb-10">
                    InsideConnect is the Answer
                </h2>

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                    {features.map((item, index) => (
                        <Card
                            key={index}
                            isHoverable
                            className="bg-[#173249] p-6 shadow-md"
                            role="region"
                            aria-labelledby={`feature-title-${index}`}
                        >
                            <CardBody>
                                <div className="flex items-center gap-4">
                                    {item.icon}
                                    <h4
                                        id={`feature-title-${index}`}
                                        className="text-lg text-[#00BFA5] font-semibold m-0"
                                    >
                                        {item.title}
                                    </h4>
                                </div>
                                {/* Replaced Spacer with Tailwind margin */}
                                <div className="my-4" />
                                <p className="text-sm text-[#E0F7FA]">{item.description}</p>
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
