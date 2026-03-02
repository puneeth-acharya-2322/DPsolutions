import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Pricing Page — Pixel-perfect DOM replica
   Source: C:\Temp\finexo\pricing.html (real Webflow HTML, Feb 2026)

   2 sections (positions: 28206, 35923):
   1. hero-top-wrapper + pricing-content-wrapper (same section)
   2. footer-content-wrapper (CTA two-col)

   CRITICAL — FADE-IN FIX:
   In the real Webflow CMS HTML, ALL 3 pricing-details-wrapper cards
   share the SAME data-w-id="0ccced61-16db-4637-7360-cf22208d4023".
   Webflow IX2 animation config only maps this single ID, so all cards
   get the same fade-in trigger. Using unique IDs (e.g. 4045, 4067)
   breaks the animation — IX2 doesn't find them in its config.
   ────────────────────────────────────────────────────────*/
export default function Pricing() {
    return (
        <>
            {/* ── Section 1: hero + pricing cards (same section in real HTML) ── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">

                    {/* Hero */}
                    <div className="hero-top-wrapper">
                        <div data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4b7"
                            className="hero-top-text-wrapper">
                            <img src="/img/Coins.svg" loading="lazy" alt="" className="hero-top-icon" />
                            <div className="hero-top-subtitle">#1 <span className="hero-top-subtitle-span">FINANCE PLATFORM</span></div>
                        </div>
                        <h1 data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4bd"
                            className="section-top-hero-title features">
                            Flexible <span className="design-text">pricing</span> for <span className="design-text">team</span> usage
                        </h1>
                        <p data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4c4"
                            className="section-top-description">
                            We provide comprehensive financial solutions to help you achieve your goals. From Personalized.
                        </p>
                        <div data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4c6"
                            className="hero-button-wrapper">
                            <a href="/contact" data-w-id="d6e99a6b-32b8-7752-4992-8db9e68f321f"
                                className="primary-button-wrapper secondary w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Book a Demo </div>
                                    <div className="primary-button-text">Book a Demo </div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                            </a>
                            <a data-w-id="717a1373-40c1-701e-7ec9-e70365b0649a" href="/contact"
                                className="download-button-wrapper w-inline-block">
                                <div className="download-button-text">Download App</div>
                                <div className="download-button-icon-wrapper">
                                    <img src="/img/DownloadSimple.svg" loading="lazy" alt="" className="download-button-icon" />
                                    <img src="/img/DownloadSimple-White.svg" loading="lazy" alt="" className="download-button-white-icon" />
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Pricing cards — Webflow CMS commerce list */}
                    <div className="pricing-content-wrapper">
                        <div className="w-dyn-list">
                            <div role="list" className="pricing-collection-list w-dyn-items">

                                {/* ── Basic Plan ─────────────────────────────────────────── */}
                                <div role="listitem" className="w-dyn-item">
                                    {/* All 3 cards share SAME data-w-id — this is how real Webflow CMS
                                        renders CMS list items; IX2 uses this single ID for all cards */}
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <img loading="lazy" src="/img/Pricing-Icon-1.svg" alt="" className="pricing-icon" />
                                            <h2 className="pricing-title">Basic Plan</h2>
                                            <div className="pricing-description">Get started with our pricing plan for more smooth experience</div>
                                        </div>
                                        <h2 className="pricing-price-text">$499</h2>
                                        <a href="/product/basic-plan" className="pricing-button w-inline-block">
                                            <div>Get Started</div>
                                        </a>
                                        <div className="features-text">Features</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Can manually input and categorize',
                                                'Basic income tracking dashboard',
                                                'Allows users to set a monthly',
                                                'Generates simple spending',
                                            ].map(f => (
                                                <div key={f} className="pricing-feature-wrap">
                                                    <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                    <div className="pricing-feature">{f}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* ── Advance Plan ────────────────────────────────────────── */}
                                <div role="listitem" className="w-dyn-item">
                                    {/* Same data-w-id as Basic and Premium — matches real Webflow CMS output */}
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <img loading="lazy" src="/img/Pricing-Icon-2.svg" alt="" className="pricing-icon" />
                                            <h2 className="pricing-title">Advance Plan</h2>
                                            <div className="pricing-description">Get started with our pricing plan for more smooth experience</div>
                                        </div>
                                        <h2 className="pricing-price-text">$699</h2>
                                        <a href="/product/advance-plan" className="pricing-button w-inline-block">
                                            <div>Get Started</div>
                                        </a>
                                        <div className="features-text">Features</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Syncs bank accounts to auto-track',
                                                'Users can create multiple budgets',
                                                'Alerts payments and upcoming expenses',
                                                'Data is accessible across multiple',
                                            ].map(f => (
                                                <div key={f} className="pricing-feature-wrap">
                                                    <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                    <div className="pricing-feature">{f}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* ── Premium Plan ────────────────────────────────────────── */}
                                <div role="listitem" className="w-dyn-item">
                                    {/* Same data-w-id as Basic and Advance */}
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <img loading="lazy" src="/img/Pricing-Icon-3.svg" alt="" className="pricing-icon" />
                                            <h2 className="pricing-title">Premium Plan</h2>
                                            <div className="pricing-description">Get started with our pricing plan for more smooth experience</div>
                                        </div>
                                        <h2 className="pricing-price-text">$999</h2>
                                        <a href="/product/premium-plan" className="pricing-button w-inline-block">
                                            <div>Get Started</div>
                                        </a>
                                        <div className="features-text">Features</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Personalized financial advice based',
                                                'Mutual funds, and crypto assets',
                                                'Automated tax calculations and deduction',
                                                'One-on-one financial consulting',
                                            ].map(f => (
                                                <div key={f} className="pricing-feature-wrap">
                                                    <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                    <div className="pricing-feature">{f}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── Section 2: footer-content-wrapper CTA (from real pricing.html at 35923) ── */}
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
