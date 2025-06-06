// frontend/src/components/TestimonialSection.js

import React from "react";
import { Card, CardBody } from "@nextui-org/react";

const testimonials = [
    {
        quote: "Before InsideConnect, I had no idea where my brother was transferred.",
        name: "- Concerned Sister",
    },
    {
        quote: "Finally, something that treats families with respect.",
        name: "- Father of Two",
    },
];

export default function TestimonialSection() {
    return (
        <section
            id="testimonials"
            aria-label="Customer Testimonials"
            style={{
                backgroundColor: "#0D1B2A",
                paddingTop: "4rem",  // Equivalent to $16 spacing (~64px)
                paddingBottom: "4rem",
                paddingLeft: "1rem",  // Equivalent to $4 spacing (~16px)
                paddingRight: "1rem",
                color: "white",
            }}
        >
            {/* Container div to center and constrain width */}
            <div
                style={{
                    maxWidth: "900px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center",
                    marginBottom: "3rem",  // ~$12 spacing (~48px)
                }}
            >
                <h2
                    style={{
                        color: "#00BFA5",
                        fontWeight: "bold",
                        fontSize: "2rem", // Approx $3xl
                        marginBottom: "2rem", // ~$8 spacing (~32px)
                    }}
                >
                    Real Voices, Real Impact
                </h2>
            </div>

            {/* Flex container replaced with div + CSS for responsive grid */}
            <div
                style={{
                    maxWidth: "900px",
                    marginLeft: "auto",
                    marginRight: "auto",
                    display: "flex",
                    gap: "2rem", // ~$8 spacing (~32px)
                    flexWrap: "wrap",
                    justifyContent: "center",
                }}
            >
                {testimonials.map((t, index) => (
                    <Card
                        key={index}
                        role="region"
                        aria-label={`Testimonial from ${t.name.replace("-", "").trim()}`}
                        style={{
                            backgroundColor: "#173249",
                            padding: "2rem", // ~$8 spacing (~32px)
                            minHeight: "200px",
                            flex: "1 1 300px",
                            boxSizing: "border-box",
                        }}
                    >
                        <CardBody>
                            <p
                                style={{
                                    color: "#E0F7FA",
                                    fontSize: "1.125rem", // ~$lg spacing (~18px)
                                    fontStyle: "italic",
                                    marginBottom: "1rem", // ~$4 spacing (~16px)
                                    lineHeight: "1.4",
                                }}
                            >
                                “{t.quote}”
                            </p>
                            <span
                                style={{
                                    color: "#7FDBFF",
                                    fontWeight: "bold",
                                    fontSize: "1rem", // ~$md spacing (~16px)
                                }}
                            >
                                {t.name}
                            </span>
                        </CardBody>
                    </Card>
                ))}
            </div>
        </section>
    );
}
