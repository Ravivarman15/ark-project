import Navbar from "@/components/ark/Navbar";
import Footer from "@/components/ark/Footer";
import WhatsAppSticky from "@/components/ark/WhatsAppSticky";
import SEOHead from "@/components/SEOHead";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title="Privacy Policy | ARK Learning Arena"
                description="Privacy Policy of ARK Learning Arena explaining data collection, Meta API usage, automated responses, and data protection practices."
                canonical="https://tuitionwithark.com/privacy-policy"
            />
            <Navbar />

            <main className="pt-[72px]">
                {/* Header */}
                <section className="bg-gradient-to-br from-[#0B2C55] via-[#0d3360] to-[#071c36] text-white py-14 md:py-20">
                    <div className="max-w-[900px] mx-auto px-4 sm:px-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight">
                            Privacy <span className="text-[#FFC107]">Policy</span>
                        </h1>
                        <p className="text-white/60 mt-3 text-sm md:text-base">
                            The ARK – Learning Arena<br />
                            Effective Date: 02 March 2026
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="py-12 md:py-20 bg-white">
                    <div className="max-w-[900px] mx-auto px-4 sm:px-6">
                        <div className="space-y-10 text-[15px] md:text-base leading-relaxed text-muted-foreground">

                            {/* 1. Introduction */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-[#0B2C55] mb-4">
                                    <span className="text-[#FFC107] mr-1.5">1.</span> Introduction
                                </h2>
                                <div className="space-y-4">
                                    <p>
                                        The ARK – Learning Arena ("we," "our," "us") operates educational and coaching services and uses automated tools integrated with Meta Platforms to enhance communication and engagement on our official social media accounts.
                                    </p>
                                    <p>
                                        This Privacy Policy explains how we collect, use, store, and protect information when users interact with our content via Instagram and Facebook.
                                    </p>
                                    <p>
                                        Our services integrate with Meta Platforms, Inc. APIs in accordance with the Meta Platform Terms and Developer Policies.
                                    </p>
                                </div>
                            </div>

                            {/* 2. Data We Collect */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-[#0B2C55] mb-4">
                                    <span className="text-[#FFC107] mr-1.5">2.</span> Data We Collect
                                </h2>
                                <p className="mb-4">
                                    When users interact with our official Facebook or Instagram pages, we may collect:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5">
                                    <li>Public profile name</li>
                                    <li>Public profile ID</li>
                                    <li>Comment content</li>
                                    <li>Message content (if user sends a message)</li>
                                    <li>Timestamp of interaction</li>
                                    <li>Engagement metadata</li>
                                </ul>
                                <div className="mt-4 space-y-4">
                                    <p>
                                        We collect only the information necessary to operate our automated engagement and lead response systems.
                                    </p>
                                    <p>
                                        We do not collect passwords, private account data, or non-public profile information.
                                    </p>
                                </div>
                            </div>

                            {/* 3. How We Use the Data */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-[#0B2C55] mb-4">
                                    <span className="text-[#FFC107] mr-1.5">3.</span> How We Use the Data
                                </h2>
                                <p className="mb-4">
                                    We process collected data for the following purposes:
                                </p>
                                <ul className="list-disc pl-6 space-y-1.5">
                                    <li>Automated comment replies</li>
                                    <li>Lead qualification and follow-up</li>
                                    <li>Responding to inquiries about our educational programs</li>
                                    <li>Internal analytics and engagement improvement</li>
                                    <li>CRM-based lead tracking</li>
                                </ul>
                                <p className="mt-4">
                                    All processing is directly related to communication and service facilitation.
                                </p>
                            </div>

                            {/* 4. Automated Responses */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-[#0B2C55] mb-4">
                                    <span className="text-[#FFC107] mr-1.5">4.</span> Automated Responses
                                </h2>
                                <p className="mb-4">We use automated systems to:</p>
                                <ul className="list-disc pl-6 space-y-1.5">
                                    <li>Reply to specific keywords in comments</li>
                                    <li>Send informational messages via direct message</li>
                                    <li>Provide links to registration forms or lead magnets</li>
                                </ul>
                                <p className="mt-4">
                                    These automated responses are rule-based and triggered only by user interaction.
                                </p>
                            </div>

                            {/* 5. Data Storage & Retention */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-[#0B2C55] mb-4">
                                    <span className="text-[#FFC107] mr-1.5">5.</span> Data Storage &amp; Retention
                                </h2>
                                <div className="space-y-4">
                                    <p>Comment and engagement data may be stored in a secure internal database.</p>
                                    <p>Lead information may be stored in a CRM system for follow-up.</p>
                                    <p>Data is retained only for business and communication purposes.</p>
                                    <p>Users may request deletion of their data at any time (see Section 8).</p>
                                    <p>We implement reasonable administrative and technical safeguards to protect stored data.</p>
                                </div>
                            </div>

                            {/* 6. Data Sharing */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-[#0B2C55] mb-4">
                                    <span className="text-[#FFC107] mr-1.5">6.</span> Data Sharing
                                </h2>
                                <p className="mb-4">We do not sell user data.</p>
                                <p className="mb-4">We may share data only with:</p>
                                <ul className="list-disc pl-6 space-y-1.5">
                                    <li>Authorized internal team members</li>
                                    <li>CRM or automation service providers</li>
                                    <li>Hosting providers necessary to operate the system</li>
                                </ul>
                                <p className="mt-4">
                                    All third-party service providers are expected to comply with data protection standards.
                                </p>
                            </div>

                            {/* 7. Legal Basis for Processing */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-[#0B2C55] mb-4">
                                    <span className="text-[#FFC107] mr-1.5">7.</span> Legal Basis for Processing
                                </h2>
                                <p className="mb-4">Data is processed:</p>
                                <ul className="list-disc pl-6 space-y-1.5">
                                    <li>Based on user-initiated interaction (commenting or messaging)</li>
                                    <li>For legitimate business interests related to communication and service delivery</li>
                                    <li>In compliance with Meta Platform Terms</li>
                                </ul>
                            </div>

                            {/* 8. Data Deletion Request */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-[#0B2C55] mb-4">
                                    <span className="text-[#FFC107] mr-1.5">8.</span> Data Deletion Request
                                </h2>
                                <p className="mb-4">Users may request deletion of their data by emailing:</p>
                                <div className="bg-muted/40 border border-border rounded-xl p-4 mb-4">
                                    <p className="font-semibold text-[#0B2C55]">
                                        <a href="mailto:admin@thearktuition.com" className="text-[#FFC107] hover:underline">admin@thearktuition.com</a>
                                    </p>
                                    <p className="text-sm mt-1 text-muted-foreground">
                                        Subject Line: "Data Deletion Request – Meta Interaction"
                                    </p>
                                </div>
                                <p>
                                    Upon verification, we will delete stored personal data within a reasonable time frame.
                                </p>
                            </div>

                            {/* 9. Compliance with Meta Policies */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-[#0B2C55] mb-4">
                                    <span className="text-[#FFC107] mr-1.5">9.</span> Compliance with Meta Policies
                                </h2>
                                <p className="mb-4">Our application complies with:</p>
                                <ul className="list-disc pl-6 space-y-1.5">
                                    <li>Meta Platform Terms</li>
                                    <li>Meta Developer Policies</li>
                                    <li>Facebook and Instagram API usage guidelines</li>
                                </ul>
                                <p className="mt-4">
                                    We only access permissions explicitly granted by Meta and approved during App Review.
                                </p>
                            </div>

                            {/* 10. Changes to This Policy */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-[#0B2C55] mb-4">
                                    <span className="text-[#FFC107] mr-1.5">10.</span> Changes to This Policy
                                </h2>
                                <p className="mb-4">
                                    We reserve the right to update this Privacy Policy to reflect operational, legal, or regulatory changes.
                                </p>
                                <p>Updates will be posted on this page with a revised effective date.</p>
                            </div>

                            {/* 11. Contact Information */}
                            <div>
                                <h2 className="text-xl md:text-2xl font-black text-[#0B2C55] mb-4">
                                    <span className="text-[#FFC107] mr-1.5">11.</span> Contact Information
                                </h2>
                                <div className="bg-muted/40 border border-border rounded-xl p-5">
                                    <p className="font-bold text-[#0B2C55] text-lg">The ARK – Learning Arena</p>
                                    <p className="mt-1">Chennai, Tamil Nadu, India</p>
                                    <p className="mt-1">
                                        Email:{" "}
                                        <a href="mailto:admin@thearktuition.com" className="text-[#FFC107] hover:underline font-medium">
                                            admin@thearktuition.com
                                        </a>
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppSticky />
        </div>
    );
}
