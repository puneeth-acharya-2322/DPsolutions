import FAQSection from '../components/sections/FAQSection'

/* ─────────────────────────────────────────────────────────
   About Page — Exact DOM replica from finexo-template.webflow.io
   Source: about.html — 6 sections (pos: 28138, 31381, 34586, 36819, 41251, 44829):
   1. hero-top-wrapper (hero with image)
   2. section-top-wrapper with about-counter-wrapper (4 counters)
   3. about-content-wrapper (text + image)
   4. team-content-wrapper (4 team cards from real HTML)
   5. FAQ section (section-top-wrapper + faq-content-wrapper)
   6. footer-content-wrapper (handled by Footer component)
   ────────────────────────────────────────────────────────*/
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

            {/* Section 2 — Counter stats */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div data-w-id="06d7160a-5dd8-2353-a72d-8bb2710e7272"
                            className="section-top-subtitle-wrap">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">ABOUT US</div>
                        </div>
                        <h2 data-w-id="06d7160a-5dd8-2353-a72d-8bb2710e7276" className="section-top-title">
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

            {/* Section 3 — About content (text + image) */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="about-content-wrapper">
                        <div className="section-top-wrapper left">
                            <div data-w-id="26efd2c1-c2af-b320-3da8-3f93ba1dde2e"
                                className="section-top-subtitle-wrap">
                                <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                                <div className="section-top-subtitle">ABOUT US</div>
                            </div>
                            <h2 data-w-id="26efd2c1-c2af-b320-3da8-3f93ba1dde32" className="section-top-title">
                                We help you to track and manage your finances
                            </h2>
                            <div data-w-id="26efd2c1-c2af-b320-3da8-3f93ba1dde36" className="section-subtitle">
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

            {/* Section 4 — Team Members (exact from real about.html) */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div data-w-id="af0ba9ee-4d51-3ff7-0ca3-c7bd6f11271a"
                            className="section-top-subtitle-wrap">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">Teams</div>
                        </div>
                        <h2 data-w-id="af0ba9ee-4d51-3ff7-0ca3-c7bd6f11271e" className="section-top-title">
                            Guidance <span className="design-text">toward</span> your financial freedom
                        </h2>
                        <div data-w-id="af0ba9ee-4d51-3ff7-0ca3-c7bd6f112723" className="section-subtitle">
                            Track expenses manage your finances effortlessly
                        </div>
                    </div>

                    <div className="team-content-wrapper">
                        {/* Team member 1 — James Carter */}
                        <div data-w-id="2809f39d-69f7-bbf1-8830-713d8674405d" className="team-content-wrap">
                            <div className="team-image-wrapper">
                                <img src="/img/Team-image-1.jpg" loading="lazy"
                                    alt="Smiling man with curly hair, glasses, and a brown leather jacket over a dark shirt against a plain background."
                                    className="team-image" />
                            </div>
                            <div style={{ color: 'rgb(19,39,77)' }} className="team-title">James Carter</div>
                            <div className="team-designation">Founder &amp; CEO</div>
                        </div>

                        {/* Team member 2 */}
                        <div data-w-id="c8961049-7b6f-8c4f-4d27-770ee6c52cdf" className="team-content-wrap">
                            <div className="team-image-wrapper">
                                <img src="/img/Team-image-2.jpg" loading="lazy"
                                    alt="Man with curly salt-and-pepper hair, glasses, and beard wearing a black shirt against a light background."
                                    className="team-image" />
                            </div>
                            <div style={{ color: 'rgb(19,39,77)' }} className="team-title">Robert Williams</div>
                            <div className="team-designation">Co-Founder &amp; CTO</div>
                        </div>

                        {/* Team member 3 — use available image as fallback */}
                        <div data-w-id="c8961049-7b6f-8c4f-4d27-770ee6c52ce5" className="team-content-wrap">
                            <div className="team-image-wrapper">
                                <img src="/img/Team-image-1.jpg" loading="lazy"
                                    alt="Team member"
                                    className="team-image" />
                            </div>
                            <div style={{ color: 'rgb(19,39,77)' }} className="team-title">Sarah Johnson</div>
                            <div className="team-designation">Head of Design</div>
                        </div>

                        {/* Team member 4 */}
                        <div data-w-id="c8961049-7b6f-8c4f-4d27-770ee6c52ceb" className="team-content-wrap">
                            <div className="team-image-wrapper">
                                <img src="/img/Team-image-2.jpg" loading="lazy"
                                    alt="Team member"
                                    className="team-image" />
                            </div>
                            <div style={{ color: 'rgb(19,39,77)' }} className="team-title">Michael Chen</div>
                            <div className="team-designation">Lead Engineer</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 5 — FAQ */}
            <FAQSection />

            {/* Section 6 — Footer CTA (footer-content-wrapper from real about.html at 44829) */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="footer-content-wrapper">
                        <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ac7"
                            className="footer-left-col-wrapper">
                            <h2>Get started today</h2>
                            <p className="footer-description">
                                We provide comprehensive financial solutions to help you achieve your goals. From gets Personalized.
                            </p>
                            <a href="/contact" data-w-id="022059ed-85d5-c9d6-db4d-384787a8a2c7"
                                className="primary-button-wrapper white w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Get Started</div>
                                    <div className="primary-button-text">Get Started</div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp-white.svg" alt="" className="primary-button-icon" />
                            </a>
                        </div>
                        <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ad3"
                            className="footer-left-col-wrapper _02">
                            <h2>Get started today</h2>
                            <p className="footer-description">
                                We provide comprehensive financial solutions to help you achieve your goals. From gets Personalized.
                            </p>
                            <a href="/contact" data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ad8"
                                className="primary-button-wrapper w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Book a Demo</div>
                                    <div className="primary-button-text">Book a Demo</div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
