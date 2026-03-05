import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Our Values Page — Dashapatmaja Solutions
   Structure mirrors Pricing.jsx: hero + cards + footer CTA
   ────────────────────────────────────────────────────────*/
export default function OurValues() {
    return (
        <>
            {/* ── Section 1: hero + value cards ── */}
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
                            Our <span className="design-text">Values</span>
                        </h1>
                        <p data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4c4"
                            className="section-top-description">
                            The principles that guide every decision, partnership, and strategy we build.
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

                    {/* Value cards — same structure as pricing cards */}
                    <div className="pricing-content-wrapper">
                        <div className="w-dyn-list">
                            <div role="list" className="pricing-collection-list w-dyn-items">

                                {/* Card 1 — Clarity Over Noise */}
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>🎯</div>
                                            <h2 className="pricing-title">Clarity Over Noise</h2>
                                            <div className="pricing-description">We prioritize strategic clarity over superficial visibility.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Strategic Focus</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>What This Means</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Every initiative must contribute to business goals',
                                                'Data-driven decisions over gut instinct',
                                                'Focused strategies over scattered tactics',
                                                'Measurable outcomes over vanity metrics',
                                            ].map(f => (
                                                <div key={f} className="pricing-feature-wrap">
                                                    <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                    <div className="pricing-feature">{f}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 2 — Execution Discipline */}
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#fffbeb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>⚡</div>
                                            <h2 className="pricing-title">Execution Discipline</h2>
                                            <div className="pricing-description">Ideas matter. Execution delivers results.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Results-Driven</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>What This Means</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Focus on timelines and accountability',
                                                'Measurable outcomes at every milestone',
                                                'Disciplined project management',
                                                'Rapid iteration with quality assurance',
                                            ].map(f => (
                                                <div key={f} className="pricing-feature-wrap">
                                                    <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                    <div className="pricing-feature">{f}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 3 — Long-Term Thinking */}
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#f0fdf4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>🌱</div>
                                            <h2 className="pricing-title">Long-Term Thinking</h2>
                                            <div className="pricing-description">We build systems that sustain growth beyond short-term campaigns.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Sustainable Growth</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>What This Means</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Systems designed for lasting impact',
                                                'Building brand equity over quick wins',
                                                'Scalable infrastructure from day one',
                                                'Future-ready strategies and solutions',
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

                    {/* Additional values — 2 cards below */}
                    <div className="pricing-content-wrapper" style={{ marginTop: '32px' }}>
                        <div className="w-dyn-list">
                            <div role="list" className="pricing-collection-list w-dyn-items" style={{ justifyContent: 'center' }}>

                                {/* Card 4 — Integrity in Partnerships */}
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>🤝</div>
                                            <h2 className="pricing-title">Integrity in Partnerships</h2>
                                            <div className="pricing-description">Transparent communication and ethical conduct define our work.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Trust First</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>What This Means</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Transparent communication at every stage',
                                                'Ethical conduct with clients and vendors',
                                                'Honest reporting and feedback',
                                                'Partnership-first, not transaction-first',
                                            ].map(f => (
                                                <div key={f} className="pricing-feature-wrap">
                                                    <img src="/img/Pricing-Feature-Icon.svg" loading="lazy" alt="" className="pricing-feature-icon" />
                                                    <div className="pricing-feature">{f}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Card 5 — Continuous Learning */}
                                <div role="listitem" className="w-dyn-item">
                                    <div data-w-id="0ccced61-16db-4637-7360-cf22208d4023"
                                        className="pricing-details-wrapper">
                                        <div className="pricing-top-wrapper">
                                            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '8px' }}>📚</div>
                                            <h2 className="pricing-title">Continuous Learning</h2>
                                            <div className="pricing-description">Markets evolve. We evolve with them.</div>
                                        </div>
                                        <h2 className="pricing-price-text" style={{ fontSize: '24px' }}>Always Evolving</h2>
                                        <div className="features-text" style={{ marginTop: '16px' }}>What This Means</div>
                                        <div className="pricing-features-wrapper">
                                            {[
                                                'Constant learning and adaptation',
                                                'Staying ahead of market trends',
                                                'Investing in team development',
                                                'Embracing new tools and methodologies',
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

            {/* ── Section 2: footer CTA ── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="footer-content-wrapper">
                        <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ac7"
                            className="footer-left-col-wrapper">
                            <h2>Aligned with your values?</h2>
                            <p className="footer-description">
                                Let's work together to build something meaningful. Our values aren't just words — they guide every project we deliver.
                            </p>
                            <a href="/contact" className="primary-button-wrapper white w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Get Started</div>
                                    <div className="primary-button-text">Get Started</div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp-white.svg" alt="" className="primary-button-icon" />
                            </a>
                        </div>
                        <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ad3"
                            className="footer-left-col-wrapper _02">
                            <h2>Let's connect</h2>
                            <p className="footer-description">
                                Whether you're an emerging brand or an established business, we're ready to help you scale with integrity.
                            </p>
                            <a href="/contact" className="primary-button-wrapper w-inline-block">
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
