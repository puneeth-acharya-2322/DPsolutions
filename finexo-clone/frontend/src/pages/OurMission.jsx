import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Our Mission Page — Dashapatmaja Solutions
   Structure mirrors Pricing.jsx: hero + cards + footer CTA
   ────────────────────────────────────────────────────────*/
export default function OurMission() {
    return (
        <>
            {/* ── Section 1: hero + mission content ── */}
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
                            Our <span className="design-text">Mission</span>
                        </h1>
                        <p data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4c4"
                            className="section-top-description">
                            To design and execute integrated growth strategies that help businesses achieve sustainable scale.
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

                    {/* Mission cards — 4 strategic pillars */}
                    <div className="pricing-content-wrapper">
                        <div className="w-dyn-list">
                            <div role="list" className="pricing-collection-list w-dyn-items">

                                {/* Card 1 — Strengthen Brand Positioning */}
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>🎯</div>
                                            <h2 className="pricing-title">Strengthen Brand Positioning</h2>
                                            <div className="pricing-description">Building brands that are distinct, credible, and commercially strong.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Brand Power</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>How We Deliver</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Clear brand strategy and identity frameworks',
                                                'Market positioning and competitive analysis',
                                                'Brand messaging that resonates with audiences',
                                                'Visual identity systems built for scale',
                                            ].map(f => (
                                                <div key={f} className="pricing-feature-wrap">
                                                    <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                    <div className="pricing-feature">{f}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 — Expand Commerce Presence */}
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>🛒</div>
                                            <h2 className="pricing-title">Expand Commerce Presence</h2>
                                            <div className="pricing-description">Growing digital and physical commerce footprint across channels.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Multi-Channel</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>How We Deliver</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'E-commerce platform optimization and launch',
                                                'Quick-commerce strategy and partnerships',
                                                'Marketplace expansion and management',
                                                'Omnichannel distribution systems',
                                            ].map(f => (
                                                <div key={f} className="pricing-feature-wrap">
                                                    <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                    <div className="pricing-feature">{f}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 — Build Scalable Sales Networks */}
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>🔗</div>
                                            <h2 className="pricing-title">Build Scalable Sales Networks</h2>
                                            <div className="pricing-description">Creating robust sales engines and distribution partnerships.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Sales Engine</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>How We Deliver</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Structured sales process development',
                                                'Channel partnership and distribution networks',
                                                'Lead generation and conversion systems',
                                                'Sales team training and enablement',
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

                    {/* Revenue Predictability — standalone card */}
                    <div className="pricing-content-wrapper" style={{ marginTop: '32px' }}>
                        <div className="w-dyn-list">
                            <div role="list" className="pricing-collection-list w-dyn-items" style={{ justifyContent: 'center' }}>
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>📊</div>
                                            <h2 className="pricing-title">Improve Revenue Predictability</h2>
                                            <div className="pricing-description">Data-driven systems for consistent and predictable revenue growth.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Predictable Growth</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>How We Deliver</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Revenue forecasting and pipeline management',
                                                'Data analytics for growth insights',
                                                'KPI dashboards and performance tracking',
                                                'Conversion optimization across all touchpoints',
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
