import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Our Vision Page — Dashapatmaja Solutions
   Structure mirrors Pricing.jsx: hero + cards + footer CTA
   ────────────────────────────────────────────────────────*/
export default function OurVision() {
    return (
        <>
            {/* ── Section 1: hero + vision content ── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">

                    {/* Hero */}
                    <div className="hero-top-wrapper">
                        <div data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4b7"
                            className="hero-top-text-wrapper">
                            <img src="/img/Coins.svg" loading="lazy" alt="" className="hero-top-icon" />
                            <div className="hero-top-subtitle">#1 <span className="hero-top-subtitle-span">Dashapatmaja Solutions</span></div>
                        </div>
                        <h1 data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4bd"
                            className="section-top-hero-title features">
                            Our <span className="design-text">Vision</span>
                        </h1>
                        <p data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4c4"
                            className="section-top-description">
                            Where we're headed — and the impact we aim to create along the way.
                        </p>
                        <div data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4c6"
                            className="hero-button-wrapper">
                            <a href="/contact" data-w-id="d6e99a6b-32b8-7752-4992-8db9e68f321f"
                                className="primary-button-wrapper secondary w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Get in Touch</div>
                                    <div className="primary-button-text">Get in Touch</div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                            </a>
                            <Link data-w-id="717a1373-40c1-701e-7ec9-e70365b0649a" to="/about"
                                className="download-button-wrapper w-inline-block">
                                <div className="download-button-text">About Us</div>
                                <div className="download-button-icon-wrapper">
                                    <img src="/img/DownloadSimple.svg" loading="lazy" alt="" className="download-button-icon" />
                                    <img src="/img/DownloadSimple-White.svg" loading="lazy" alt="" className="download-button-white-icon" />
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Vision cards */}
                    <div className="pricing-content-wrapper">
                        <div className="w-dyn-list">
                            <div role="list" className="pricing-collection-list w-dyn-items">

                                {/* Card 1 — Trusted Growth Partner */}
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>🔭</div>
                                            <h2 className="pricing-title">Trusted Growth Partner</h2>
                                            <div className="pricing-description">To become a trusted growth partner for brands seeking structured expansion.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Our North Star</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>What We're Building</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Structured expansion across marketing ecosystems',
                                                'Deep expertise in commerce and sales domains',
                                                'Long-term partnerships over one-off projects',
                                                'Trust built through consistent results',
                                            ].map(f => (
                                                <div key={f} className="pricing-feature-wrap">
                                                    <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                    <div className="pricing-feature">{f}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 — Sustainable Scale */}
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>📈</div>
                                            <h2 className="pricing-title">Sustainable Scale</h2>
                                            <div className="pricing-description">Building a portfolio of brands that demonstrate sustainable scale.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Growth That Lasts</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>Our Benchmarks</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Operational strength across all verticals',
                                                'Market credibility through proven results',
                                                'Scalable systems built for the long run',
                                                'Portfolio growth with strategic partnerships',
                                            ].map(f => (
                                                <div key={f} className="pricing-feature-wrap">
                                                    <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                    <div className="pricing-feature">{f}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 — Market Credibility */}
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>🏆</div>
                                            <h2 className="pricing-title">Market Credibility</h2>
                                            <div className="pricing-description">Partnerships that demonstrate operational strength and market trust.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Proven Excellence</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>How We Achieve It</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Consistent delivery on promises',
                                                'Transparent metrics and reporting',
                                                'Industry-recognized best practices',
                                                'Building brands that command respect',
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


        </>
    )
}
