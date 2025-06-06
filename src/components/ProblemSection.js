// frontend/src/components/ProblemSection.js

import React from "react";
import { Card, CardBody, Divider } from "@nextui-org/react";

export default function ProblemSection() {
    return (
        <section
            id="about"
            className="bg-[#0D1B2A] text-white py-16 px-4"
        >
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#00BFA5] mb-6">
                    A Broken System
                </h2>

                <ul className="space-y-4 text-white text-left bg-transparent px-6 sm:px-0">
                    <li className="hover:bg-[#112A46] px-4 py-2 rounded transition-colors">
                        • Every state has its own outdated prison portal.
                    </li>
                    <li className="hover:bg-[#112A46] px-4 py-2 rounded transition-colors">
                        • Families can't find where inmates are housed.
                    </li>
                    <li className="hover:bg-[#112A46] px-4 py-2 rounded transition-colors">
                        • Communication is expensive, confusing, and dehumanizing.
                    </li>
                </ul>

                <div className="my-10" />

                <Card className="bg-[#112A46] text-[#E0F7FA]">
                    <CardBody>
                        <p className="italic text-sm md:text-base">
                            "I just wanted to know where my son was... no one could give me a
                            straight answer for days." – Anonymous Mother
                        </p>
                    </CardBody>
                </Card>

                <div className="my-10" />

                <Divider className="bg-[#00BFA5]" />
            </div>
        </section>
    );
}
