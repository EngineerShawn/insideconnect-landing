// src/components/FooterSection.js

import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function FooterSection() {
    return (
        <footer
            className="bg-[#081829] py-8 px-4 text-[#7FDBFF]"
            aria-label="Site Footer"
        >
            <div className="max-w-[900px] mx-auto">
                <nav
                    className="flex flex-wrap justify-between items-center gap-4"
                    aria-label="Footer Navigation"
                >
                    {/* Left links */}
                    <div className="flex flex-wrap gap-6">
                        <a
                            href="/terms"
                            className="font-semibold hover:text-[#00BFA5] transition-colors"
                        >
                            Terms
                        </a>
                        <a
                            href="/privacy"
                            className="font-semibold hover:text-[#00BFA5] transition-colors"
                        >
                            Privacy
                        </a>
                        <a
                            href="/contact"
                            className="font-semibold hover:text-[#00BFA5] transition-colors"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-6">
                        <a
                            href="https://facebook.com/InsideConnect"
                            aria-label="Facebook"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#00BFA5] transition-colors"
                        >
                            <FaFacebookF size={20} />
                        </a>
                        <a
                            href="https://twitter.com/InsideConnect"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#00BFA5] transition-colors"
                        >
                            <FaTwitter size={20} />
                        </a>
                        <a
                            href="https://linkedin.com/company/InsideConnect"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#00BFA5] transition-colors"
                        >
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </nav>

                <p className="text-center text-sm text-[#5E8C99] mt-6">
                    © {new Date().getFullYear()} InsideConnect. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
