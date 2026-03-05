import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   About Page — Dashapatmaja Solutions Overview
   Structure mirrors Pricing.jsx: hero + content + footer CTA
   ────────────────────────────────────────────────────────*/
export default function About() {
    return (
        <>
            <style>{`
                @keyframes timelineFade { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .timeline-card {
                    background: #fff;
                    border-radius: 20px;
                    padding: 36px 32px;
                    box-shadow: 0 4px 20px rgba(0,0,0,0.04);
                    position: relative;
                    overflow: hidden;
                    transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
                    animation: timelineFade 0.7s ease forwards;
                }
                .timeline-card:hover {
                    transform: translateY(-6px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.08);
                }
                .timeline-card::before {
                    content: '';
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 4px;
                }
                .timeline-card:nth-child(1) { animation-delay: 0.1s; }
                .timeline-card:nth-child(2) { animation-delay: 0.3s; }
                .timeline-card:nth-child(3) { animation-delay: 0.5s; }
                .timeline-card:nth-child(1)::before { background: linear-gradient(90deg, #2d68fe, #60a5fa); }
                .timeline-card:nth-child(2)::before { background: linear-gradient(90deg, #ffb400, #fcd34d); }
                .timeline-card:nth-child(3)::before { background: linear-gradient(90deg, #22c55e, #86efac); }
                .timeline-year {
                    display: inline-block;
                    background: #0b2a5c;
                    color: #fff;
                    font-size: 18px;
                    font-weight: 800;
                    padding: 8px 20px;
                    border-radius: 12px;
                    margin-bottom: 20px;
                }
                .timeline-item {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 10px 0;
                    border-bottom: 1px solid #f1f5f9;
                    font-size: 15px;
                    line-height: 1.7;
                    color: #475569;
                }
                .timeline-item:last-child { border-bottom: none; }
                .timeline-dot {
                    width: 8px; height: 8px;
                    border-radius: 50%;
                    background: #2d68fe;
                    flex-shrink: 0;
                    margin-top: 8px;
                }
            `}</style>

            {/* ── Section 1: Hero ── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="hero-top-wrapper">
                        <div data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4b7"
                            className="hero-top-text-wrapper">
                            <img src="/img/Coins.svg" loading="lazy" alt="" className="hero-top-icon" />
                            <div className="hero-top-subtitle">#1 <span className="hero-top-subtitle-span">Dashapatmaja Solutions</span></div>
                        </div>
                        <h1 data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4bd"
                            className="section-top-hero-title features">
                            About <span className="design-text">Dashapatmaja</span> Solutions Pvt. Ltd
                        </h1>
                        <p data-w-id="6444e04b-f4d6-64b5-af74-17171db5d4c4"
                            className="section-top-description" style={{ maxWidth: '720px', margin: '0 auto' }}>
                            Founded on a mission to blend technology with care, driving innovation across industries to create meaningful, transformative solutions.
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
                            <Link data-w-id="717a1373-40c1-701e-7ec9-e70365b0649a" to="/our-values"
                                className="download-button-wrapper w-inline-block">
                                <div className="download-button-text">Our Values</div>
                                <div className="download-button-icon-wrapper">
                                    <img src="/img/DownloadSimple.svg" loading="lazy" alt="" className="download-button-icon" />
                                    <img src="/img/DownloadSimple-White.svg" loading="lazy" alt="" className="download-button-white-icon" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 2: Company Introduction ── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div className="section-top-subtitle-wrap">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">WHO WE ARE</div>
                        </div>
                        <h2 className="section-top-title">
                            Technology <span className="design-text">meets</span> care
                        </h2>
                    </div>
                    <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                        <p className="section-subtitle" style={{ fontSize: '17px', lineHeight: '1.8', color: '#475569', marginBottom: '20px' }}>
                            Dashapatmaja Solutions Pvt. Ltd. was founded on a mission to blend technology with care, driving innovation across industries to create meaningful, transformative solutions.
                        </p>
                        <p className="section-subtitle" style={{ fontSize: '17px', lineHeight: '1.8', color: '#475569' }}>
                            Established in 2023 and incubated at the Manipal Universal Technology Business Incubator in Manipal, we bring together a multidisciplinary team of professionals from engineering, healthcare, management, and technology to solve real-world challenges.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Section 3: Our Journey Timeline ── */}
            <section className="section" style={{ background: '#f8fafc' }}>
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div className="section-top-subtitle-wrap">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">OUR JOURNEY</div>
                        </div>
                        <h2 className="section-top-title">
                            Building <span className="design-text">milestones</span> since 2023
                        </h2>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px', marginTop: '20px' }}>

                        {/* 2023 */}
                        <div className="timeline-card">
                            <div className="timeline-year">2023</div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <span>Formed with a vision to innovate at the intersection of technology, education, and research.</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot" style={{ background: '#ffb400' }}></div>
                                <span>Incubated at GOK Bioincubator, Manipal.</span>
                            </div>
                        </div>

                        {/* 2024 */}
                        <div className="timeline-card">
                            <div className="timeline-year" style={{ background: '#ffb400' }}>2024</div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <span>Launch of flagship projects, including the GenAlpha Portable.</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot" style={{ background: '#ffb400' }}></div>
                                <span>Launch of premium Ayurvedic brand — Raw Radicles.</span>
                            </div>
                        </div>

                        {/* 2025 */}
                        <div className="timeline-card">
                            <div className="timeline-year" style={{ background: '#22c55e' }}>2025</div>
                            <div className="timeline-item">
                                <div className="timeline-dot"></div>
                                <span>Incubated at MUTBI, MAHE, Manipal.</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot" style={{ background: '#ffb400' }}></div>
                                <span>Received Grant from MUTBI, MAHE, Manipal under the NIDHI-PRAYAS Scheme.</span>
                            </div>
                            <div className="timeline-item">
                                <div className="timeline-dot" style={{ background: '#22c55e' }}></div>
                                <span>Signed a MOU with Amruthanjali Ayurveda for manufacturing and supply of premium Ayurvedic products.</span>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}
