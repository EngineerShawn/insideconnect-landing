// frontend/src/components/TimelineSection.js

import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import {
    SearchIcon,
    IdentificationIcon,
    MailIcon,
    CalendarIcon,
    UsersIcon,
} from "@heroicons/react/outline";

const steps = [
    {
        icon: <SearchIcon className="w-6 h-6 text-[#00BFA5]" />,
        title: "Search for your loved one",
        description: "Use our powerful locator to find where your loved one is housed.",
    },
    {
        icon: <IdentificationIcon className="w-6 h-6 text-[#00BFA5]" />,
        title: "Follow their updates",
        description: "Stay informed with real-time transfer and status changes.",
    },
    {
        icon: <MailIcon className="w-6 h-6 text-[#00BFA5]" />,
        title: "Send letters & documents",
        description: "AI tools help you craft letters and organize files securely.",
    },
    {
        icon: <CalendarIcon className="w-6 h-6 text-[#00BFA5]" />,
        title: "Schedule visits",
        description: "Plan visits directly with supported facilities.",
    },
    {
        icon: <UsersIcon className="w-6 h-6 text-[#00BFA5]" />,
        title: "Join a family circle",
        description: "Connect with others for emotional and logistical support.",
    },
];

export default function TimelineSection() {
    return (
        <section
            id="how-it-works"
            aria-label="How It Works Timeline"
            style={{
                backgroundColor: "#0F2235",
                padding: "4rem 1rem",
                color: "white",
            }}
        >
            {/* Wrapper div replacing Container */}
            <div
                style={{
                    maxWidth: "1000px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center",
                }}
            >
                <h2
                    style={{
                        color: "#00BFA5",
                        fontWeight: "bold",
                        marginBottom: "2rem",
                        fontSize: "2rem", // approx $3xl
                    }}
                >
                    How It Works
                </h2>

                {/* Grid container replaced with CSS Grid div */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr",
                        gap: "1rem",
                        justifyContent: "center",
                    }}
                >
                    {/* Use media query for two columns on small screens and up */}
                    <style>
                        {`
                        @media(min-width: 640px) {
                            div[role="grid"] {
                                grid-template-columns: repeat(2, 1fr);
                                gap: 1.5rem;
                            }
                        }
                        `}
                    </style>

                    {/* Add role grid for accessibility */}
                    <div role="grid" style={{ display: "contents" }}>
                        {steps.map((step, index) => (
                            <Card
                                key={index}
                                isHoverable
                                style={{
                                    backgroundColor: "#173249",
                                    padding: "2rem", // ~$8 spacing (~32px)
                                }}
                                role="gridcell"
                                aria-label={`Step: ${step.title}`}
                            >
                                <CardBody>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.75rem",
                                        }}
                                    >
                                        {step.icon}
                                        <h4
                                            style={{
                                                color: "#00BFA5",
                                                margin: 0,
                                                fontSize: "1.25rem",
                                            }}
                                        >
                                            {step.title}
                                        </h4>
                                    </div>
                                    {/* Spacer replaced with margin-bottom */}
                                    <div style={{ marginBottom: "1rem" }} />
                                    <p
                                        style={{
                                            color: "#E0F7FA",
                                            margin: 0,
                                        }}
                                    >
                                        {step.description}
                                    </p>
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
