import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Pricing Page — Exact DOM replica from finexo-template.webflow.io
   Source: pricing.html (real HTML extracted Feb 2026)
   
   Inner pages use hero-top-wrapper inside a plain <section class="section">
   Pricing list is a Webflow CMS Commerce list (w-dyn-list/w-dyn-items)
   Real class names: pricing-details-wrapper, pricing-top-wrapper,
                     pricing-title, pricing-price-text, pricing-button,
                     pricing-feature-wrap, pricing-feature-icon
   ────────────────────────────────────────────────────────*/
export default function Pricing() {
    return (
        <section className="section">
            <div className="w-layout-blockcontainer container w-container">

                {/* Page Hero — matches real pricing.html hero-top-wrapper pattern */}
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
                        <Link to="/contact" data-w-id="d6e99a6b-32b8-7752-4992-8db9e68f321f"
                            className="primary-button-wrapper secondary w-inline-block">
                            <div className="primary-button-wrap">
                                <div className="primary-button-text">Book a Demo </div>
                                <div className="primary-button-text">Book a Demo </div>
                            </div>
                            <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                        </Link>
                        <Link data-w-id="717a1373-40c1-701e-7ec9-e70365b0649a" to="/contact"
                            className="download-button-wrapper w-inline-block">
                            <div className="download-button-text">Download App</div>
                            <div className="download-button-icon-wrapper">
                                <img src="/img/DownloadSimple.svg" loading="lazy" alt="" className="download-button-icon" />
                                <img src="/img/DownloadSimple-White.svg" loading="lazy" alt="" className="download-button-white-icon" />
                            </div>
                        </Link>
                    </div>
                </div>

                {/* Pricing Cards — Webflow CMS list (static replica) */}
                <div className="pricing-content-wrapper">
                    <div className="w-dyn-list">
                        <div role="list" className="pricing-collection-list w-dyn-items">

                            {/* Basic Plan */}
                            <div role="listitem" className="w-dyn-item">
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
                                        {['Can manually input and categorize', 'Basic income tracking dashboard', 'Allows users to set a monthly', 'Generates simple spending'].map(f => (
                                            <div key={f} className="pricing-feature-wrap">
                                                <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                <div className="pricing-feature">{f}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Advance Plan */}
                            <div role="listitem" className="w-dyn-item">
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
                                        {['Syncs bank accounts to auto-track', 'Users can create multiple budgets', 'Alerts payments and upcoming expenses', 'Data is accessible across multiple'].map(f => (
                                            <div key={f} className="pricing-feature-wrap">
                                                <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                <div className="pricing-feature">{f}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Premium Plan */}
                            <div role="listitem" className="w-dyn-item">
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
                                        {['Personalized financial advice based', 'Mutual funds, and crypto assets', 'Automated tax calculations and deduction', 'One-on-one financial consulting'].map(f => (
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
    )
}
