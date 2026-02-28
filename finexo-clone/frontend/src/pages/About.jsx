/* ─────────────────────────────────────────────────────────
   About Page — Exact DOM replica from finexo-template.webflow.io
   Source: about.html (real HTML extracted Feb 2026)
   
   6 sections:
   1. hero-top-wrapper (page hero)
   2. Stats counter section (section-top-wrapper with counters)
   3. about-content-wrapper section
   4. Testimonial section (section-top-wrapper testimonial)
   5. FAQ section (shared with home)
   6. Footer CTA (shared footer-content-wrapper — handled by Footer component)
   ────────────────────────────────────────────────────────*/
import FAQSection from '../components/sections/FAQSection'

export default function About() {
    return (
        <>
            {/* Section 1 — Page Hero */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="hero-top-wrapper">
                        <div className="hero-top-wrap">
                            <div data-w-id="fd4c5637-868a-ed33-73d2-399393944a92"
                                className="hero-top-text-wrapper">
                                <img src="/img/Coins.svg" loading="lazy" alt="" className="hero-top-icon" />
                                <div className="hero-top-subtitle">#1 <span className="hero-top-subtitle-span">FINANCE PLATFORM</span></div>
                            </div>
                            <h1 data-w-id="fd4c5637-868a-ed33-73d2-399393944a98"
                                className="section-top-hero-title features">
                                We help you manage<br /> <span className="design-text">and</span> grow your finances
                            </h1>
                        </div>
                        <div data-w-id="fd4c5637-868a-ed33-73d2-399393944a9d"
                            className="about-hero-image-wrapper">
                            <img src="/img/Blog-Image.webp" loading="lazy" alt="" className="about-hero-image"
                                sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 — Stats / Counters */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div data-w-id="06d7160a-5dd8-2353-a72d-8bb2710e7272"
                            className="section-top-subtitle-wrap">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">ABOUT US</div>
                        </div>
                        <h2 data-w-id="06d7160a-5dd8-2353-a72d-8bb2710e7276"
                            className="section-top-title">
                            We help you manage <span className="design-text">and</span> grow your finances
                        </h2>
                    </div>
                    <div data-w-id="06d7160a-5dd8-2353-a72d-8bb2710e727a"
                        className="about-counter-wrapper">
                        <div className="about-counter-wrap">
                            <h2 className="about-counter-number">300<span className="design-text">+</span></h2>
                            <div className="about-counter-title">Happy clients</div>
                        </div>
                        <div className="about-counter-wrap">
                            <h2 className="about-counter-number">$4.5<span className="design-text">M</span></h2>
                            <div className="about-counter-title">Capital Raised</div>
                        </div>
                        <div className="about-counter-wrap">
                            <h2 className="about-counter-number">120<span className="design-text">+</span></h2>
                            <div className="about-counter-title">Team Members</div>
                        </div>
                        <div className="about-counter-wrap">
                            <h2 className="about-counter-number">20<span className="design-text">+</span></h2>
                            <div className="about-counter-title">Awards Won</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 — About content with image */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="about-content-wrapper">
                        <div className="section-top-wrapper left">
                            <div data-w-id="26efd2c1-c2af-b320-3da8-3f93ba1dde2e"
                                className="section-top-subtitle-wrap">
                                <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                                <div className="section-top-subtitle">ABOUT US</div>
                            </div>
                            <h2 data-w-id="26efd2c1-c2af-b320-3da8-3f93ba1dde32"
                                className="section-top-title">
                                We help you to track and manage your finances
                            </h2>
                            <div data-w-id="26efd2c1-c2af-b320-3da8-3f93ba1dde36"
                                className="section-subtitle">
                                We provide comprehensive financial solutions to help you achieve your goals.
                            </div>
                        </div>
                        <div data-w-id="26efd2c1-c2af-b320-3da8-3f93ba1dde38"
                            className="about-image-wrapper">
                            <img src="/img/Blog-Image-2.webp" loading="lazy" alt="" className="about-image"
                                sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 4 — Testimonials */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div data-w-id="b3a49b58-d23d-b3e1-6c74-4f2a4e5d1234"
                            className="section-top-subtitle-wrap">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">Testimonials</div>
                        </div>
                        <h2 data-w-id="b3a49b58-d23d-b3e1-6c74-4f2a4e5d1235"
                            className="section-top-title testimonial">
                            What our <span className="design-text">clients</span> say about us!
                        </h2>
                    </div>
                    <div data-w-id="b3a49b58-d23d-b3e1-6c74-4f2a4e5d1236"
                        className="testimonial-content-wrapper">
                        {[
                            { name: 'Sarah Johnson', role: 'Financial Analyst', text: 'The platform has completely transformed how I manage my portfolio. The insights are incredibly valuable.' },
                            { name: 'Michael Chen', role: 'Small Business Owner', text: 'As a business owner, tracking finances used to be a headache. This tool made it so much easier.' },
                            { name: 'Emily Rodriguez', role: 'Freelance Designer', text: 'I love how the dashboard gives me a clear picture of my financial health at a glance.' },
                        ].map((t) => (
                            <div key={t.name} className="testimonial-card-wrapper">
                                <div className="testimonial-top-wrapper">
                                    <div className="testimonial-name">{t.name}</div>
                                    <div className="testimonial-role">{t.role}</div>
                                </div>
                                <div className="testimonial-description">{t.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 5 — FAQ (shared component) */}
            <FAQSection />
        </>
    )
}
