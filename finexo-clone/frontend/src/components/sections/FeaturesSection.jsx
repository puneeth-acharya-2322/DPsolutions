import React, { useState } from 'react'
import { Link } from 'react-router-dom'

/* ─── FeaturesSection ─────────────────────────────────────
   Exact Webflow HTML structure from home.html
   All local /img/ assets, all data-w-id attributes preserved
  ──────────────────────────────────────────────────────── */
export default function FeaturesSection() {
    return (
        <>
            <style>{`
                @keyframes float-img {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                    100% { transform: translateY(0px); }
                }
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes spin-slow-reverse {
                    from { transform: rotate(360deg); }
                    to { transform: rotate(0deg); }
                }
                @keyframes pulse-node {
                    0% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.5); opacity: 0.5; }
                    100% { transform: scale(1); opacity: 1; }
                }
                .floating-img {
                    animation: float-img 4s ease-in-out infinite;
                }
                @keyframes arc-reveal {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .arc-path { opacity: 0; transform-origin: center; }
            `}</style>
            {/* ── Section 1: Control / Card features ─────────── */}
            <section className="section features">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div data-w-id="e7af82c1-d798-7f93-082c-8e98ebf337e0"
                            className="section-top-subtitle-wrap phone-left">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">Why Choose Us?</div>
                        </div>
                        <h2 data-w-id="bd59f56d-a367-d893-a558-ae1118c5b959"
                            className="section-top-title">Innovate. Educate. Elevate</h2>
                    </div>

                    <div className="control-content-wrapper" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                        {/* Card 1 */}
                        <div data-w-id="9508af15-2a36-4a03-9858-5fd31e914dba"
                            className="control-content-wrap"
                            style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="control-top-content-wrapper">
                                <h3 className="feature-title">Expertise Across Domains</h3>
                                <div className="control-description">Strong foundation in Branding, E-commerce, Ed-Tech, and R&D to cater to diverse business needs.</div>
                            </div>
                            <div className="control-image-wrapper">
                                <ExpertiseIcon />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div data-w-id="ae606966-5161-1ea8-3122-81bf1a27d097"
                            className="control-content-wrap"
                            style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="control-top-content-wrapper">
                                <h3 className="feature-title">Innovation-Driven Solutions</h3>
                                <div className="control-description">Cutting-edge technology and research to create impactful and future-ready solutions.</div>
                            </div>
                            <div className="control-image-wrapper _02">
                                <InnovationIcon />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div data-w-id="98631d1b-72cc-bd84-a455-e14048f1565f"
                            className="control-content-wrap"
                            style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="control-top-content-wrapper">
                                <h3 className="feature-title">Customized Approach</h3>
                                <div className="control-description">Tailored strategies that align with your business goals for maximum success.</div>
                            </div>
                            <div className="control-image-wrapper _03">
                                <CustomizationIcon />
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div data-w-id="98631d1b-72cc-bd84-a455-e14048f1566f"
                            className="control-content-wrap"
                            style={{ transition: 'transform 0.3s ease', cursor: 'pointer' }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                            <div className="control-top-content-wrapper">
                                <h3 className="feature-title">Global Impact</h3>
                                <div className="control-description">Helping businesses scale and make a meaningful difference worldwide.</div>
                            </div>
                            <div className="control-image-wrapper">
                                <GlobalIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 2: Feature tabs (Empower your journey) ─ */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div data-w-id="cfa3e9b5-8188-28d5-4150-29ef74f17ef5"
                            className="section-top-subtitle-wrap phone-left">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">FEATURES</div>
                        </div>
                        <h2 data-w-id="cfa3e9b5-8188-28d5-4150-29ef74f17ef9"
                            className="section-top-title">
                            Integrated growth across <span className="design-text">Three</span> Core Domains
                        </h2>
                        <div data-w-id="a34f0792-587a-82a3-b6e0-10d6a8cf7bfa"
                            className="section-subtitle">
                            Track expenses manage your finances effortlessly
                        </div>
                    </div>

                    <div className="feature-content-wrapper">
                        <FeatureTabs />
                    </div>
                </div>
            </section>

            {/* ── Section 3: How it works (Steps) ───────────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div data-w-id="a65be11c-987a-67a9-cd26-dc846082610d"
                            className="section-top-subtitle-wrap phone-left">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">What We Do?</div>
                        </div>
                        <h2 data-w-id="a65be11c-987a-67a9-cd26-dc8460826111"
                            className="section-top-title">
                            Empower <span className="design-text">your</span> financial journey with us!
                        </h2>
                        <div data-w-id="a65be11c-987a-67a9-cd26-dc8460826116"
                            className="section-subtitle">
                            Track expenses manage your finances effortlessly
                        </div>
                    </div>

                    <div className="works-content-wrapper">
                        <div className="works-content-wrap">
                            <div data-w-id="25ad14af-06f1-9711-ec0c-7da0b1132543"
                                className="works-card-wrapper">
                                <div className="work-card-content-wrapper">
                                    <div className="work-card-number-wrapper"><div className="work-card-number">1</div></div>
                                    <h3 className="work-title">Sign in a just few minutes</h3>
                                    <div className="work-description">Getting Started your account in just a few minutes.</div>
                                </div>
                                <div id="w-node-d4e79e05-1797-16fe-f13c-83f0fa5b71fa-25b1e467" className="work-image-wrapper">
                                    <div data-w-id="f2a5641c-dc09-5794-6c2f-ac4b077d611b"
                                        data-animation-type="lottie"
                                        data-src="/lottie/signin-323x270.json"
                                        data-loop="1" data-direction="1" data-autoplay="1"
                                        data-is-ix2-target="0" data-renderer="svg"
                                        data-default-duration="0" data-duration="0">
                                    </div>
                                </div>
                            </div>

                            <div data-w-id="0dc68af9-3de6-3cc9-6a61-acc1a758e573"
                                className="works-card-wrapper">
                                <div className="work-image-wrapper">
                                    <div data-w-id="ec6da94e-8c2f-2b67-75ad-4af3533421f0"
                                        data-animation-type="lottie"
                                        data-src="/lottie/connect-300x270.json"
                                        data-loop="1" data-direction="1" data-autoplay="1"
                                        data-is-ix2-target="0" data-renderer="svg"
                                        data-default-duration="0" data-duration="0">
                                    </div>
                                </div>
                                <div id="w-node-_0dc68af9-3de6-3cc9-6a61-acc1a758e574-25b1e467" className="work-card-content-wrapper">
                                    <div className="work-card-number-wrapper"><div className="work-card-number">2</div></div>
                                    <h3 className="work-title">Connect Account</h3>
                                    <div className="work-description">Getting Started your ac in minutes.</div>
                                </div>
                            </div>
                        </div>

                        <div data-w-id="b68a962a-5352-39ba-d5af-3f38aa290ba3"
                            className="work-right-col-wrapper">
                            <div className="work-top-wrapper">
                                <div className="work-card-number-wrapper _02"><div className="work-card-number">3</div></div>
                                <h3>Customize Dashboard</h3>
                                <div className="work-description _02">Getting Started your account<br />in just a few minutes.</div>
                            </div>
                            <div className="work-second-image-wrapper">
                                <img src="/img/work-image-3.webp" loading="lazy"
                                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.984375px, 939.984375px"
                                    srcSet="/img/work-image-3.webp 1062w"
                                    alt="Financeo app interface showing stock overview"
                                    className="work-third-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

/* ─── Feature Tabs ────────────────────────────────────── */
function FeatureTabs() {
    const [tab, setTab] = useState(0) // 0-indexed: 0=Tab2, 1=Tab3, 2=Tab4 (matching Webflow)

    return (
        <div data-current="Tab 4" data-easing="ease" data-duration-in="300" data-duration-out="100"
            className="feature-tab w-tabs">
            <div data-w-id="09456d7b-e4c0-d119-1868-962cadec8c08"
                className="tabs-menu w-tab-menu">
                <a data-w-tab="Tab 2" onClick={e => { e.preventDefault(); setTab(0) }}
                    className={`tab-button w-inline-block w-tab-link${tab === 0 ? ' w--current' : ''}`} href="#">
                    <div className="tab-button-icon-wrapper">
                        <img loading="lazy" src="/img/Dark-HandCoins.svg" alt="" className="tab-button-icon" />
                        <img loading="lazy" src="/img/HandCoins-white.svg" alt="" className="tab-button-icon-white" />
                    </div>
                    <div className="tab-text">Marketing & Branding</div>
                </a>
                <a data-w-tab="Tab 3" onClick={e => { e.preventDefault(); setTab(1) }}
                    className={`tab-button w-inline-block w-tab-link${tab === 1 ? ' w--current' : ''}`} href="#">
                    <div className="tab-button-icon-wrapper">
                        <img loading="lazy" src="/img/Money-black.svg" alt="" className="tab-button-icon" />
                        <img loading="lazy" src="/img/White-Money.svg" alt="" className="tab-button-icon-white" />
                    </div>
                    <div className="tab-text">E-Commerce & Quick-Commerce</div>
                </a>
                <a data-w-tab="Tab 4" onClick={e => { e.preventDefault(); setTab(2) }}
                    className={`tab-button w-inline-block w-tab-link${tab === 2 ? ' w--current' : ''}`} href="#">
                    <div className="tab-button-icon-wrapper">
                        <img loading="lazy" src="/img/CreditCard-ash.svg" alt="" className="tab-button-icon" />
                        <img loading="lazy" src="/img/CreditCard-white.svg" alt="" className="tab-button-icon-white" />
                    </div>
                    <div className="tab-text">Sales</div>
                </a>
            </div>

            <div data-w-id="09456d7b-e4c0-d119-1868-962cadec8c1b"
                className="tabs-content w-tab-content">

                {/* Tab 1 — Dashboard Overview */}
                <div data-w-tab="Tab 2" className={`tab-pane w-tab-pane${tab === 0 ? ' w--tab-active' : ''}`}>
                    <div className="tab-content-wrapper">
                        <div className="tab-colomn-wrapper">
                            <div data-w-id="09456d7b-e4c0-d119-1868-962cadec8c1f" className="tab-colomn-wrap">
                                <img loading="lazy" src="/img/Tab-Icons-1.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Brand Strategy</h3>
                                <div className="tab-description">Building brands that are distinct, credible, and commercially strong.</div>
                            </div>
                            <div data-w-id="09456d7b-e4c0-d119-1868-962cadec8c25" className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icons-2.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Positioning</h3>
                                <div className="tab-description">Clear brand strategy and positioning to stand out in the market.</div>
                            </div>
                        </div>
                        <div id="w-node-_09456d7b-e4c0-d119-1868-962cadec8c2b-25b1e467" className="tab-image-wrapper">
                            <img className="tab-image"
                                src="/img/marketing_analytics_styled.png"
                                alt="Marketing & Branding Analytics Dashboard"
                                sizes="100vw"
                                data-w-id="09456d7b-e4c0-d119-1868-962cadec8c2c"
                                loading="lazy" />
                        </div>
                        <div className="tab-colomn-wrapper">
                            <div data-w-id="09456d7b-e4c0-d119-1868-962cadec8c2e" className="tab-colomn-wrap">
                                <img loading="lazy" src="/img/Tab-Icon-3.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Digital Marketing</h3>
                                <div className="tab-description">Aligning your messaging with measurable business outcomes.</div>
                            </div>
                            <div data-w-id="09456d7b-e4c0-d119-1868-962cadec8c34" className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icon-4.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Campaign Execution</h3>
                                <div className="tab-description">End-to-end campaign execution for maximum reach and impact.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab 2 — Invoice Management */}
                <div data-w-tab="Tab 3" className={`tab-pane w-tab-pane${tab === 1 ? ' w--tab-active' : ''}`}>
                    <div className="tab-content-wrapper">
                        <div className="tab-colomn-wrapper">
                            <div className="tab-colomn-wrap">
                                <img loading="lazy" src="/img/Tab-Icons-1.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">End-To-End Systems</h3>
                                <div className="tab-description">We design and manage comprehensive end-to-end commerce systems.</div>
                            </div>
                            <div className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icons-2.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Marketplace Onboarding</h3>
                                <div className="tab-description">Website development and seamless marketplace onboarding.</div>
                            </div>
                        </div>
                        <div id="w-node-_09456d7b-e4c0-d119-1868-962cadec8c49-25b1e467" className="tab-image-wrapper">
                            <EcommerceVisualRounded />
                        </div>
                        <div className="tab-colomn-wrapper">
                            <div className="tab-colomn-wrap">
                                <img loading="lazy" src="/img/Tab-Icon-3.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Performance Marketing</h3>
                                <div className="tab-description">Catalog optimization and performance marketing strategies.</div>
                            </div>
                            <div className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icon-4.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Quick-Commerce</h3>
                                <div className="tab-description">Logistics coordination and quick-commerce integrations.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tab 3 — Integration */}
                <div data-w-tab="Tab 4" className={`tab-pane w-tab-pane${tab === 2 ? ' w--tab-active' : ''}`}>
                    <div className="tab-content-wrapper">
                        <div className="tab-colomn-wrapper">
                            <div className="tab-colomn-wrap">
                                <img loading="lazy" src="/img/Tab-Icons-1.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Structured Engines</h3>
                                <div className="tab-description">We create robust and structured sales engines for your business.</div>
                            </div>
                            <div className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icons-2.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Channel Partnerships</h3>
                                <div className="tab-description">Developing channel partnerships and strong distributor networks.</div>
                            </div>
                        </div>
                        <div id="w-node-_09456d7b-e4c0-d119-1868-962cadec8c7b-25b1e467" className="tab-image-wrapper">
                            <div data-w-id="09456d7b-e4c0-d119-1868-962cadec8c7c" className="third-tab-content-wrapper">
                                <div className="third-tan-subtitle">SALES</div>
                                <h2 className="third-tab-image-title">Drive <span className="design-text">predictable</span> revenue</h2>
                                <Link to="/contact" data-w-id="09456d7b-e4c0-d119-1868-962cadec8c83"
                                    className="primary-button-wrapper secondary w-inline-block">
                                    <div className="primary-button-wrap">
                                        <div className="primary-button-text">Start growing</div>
                                        <div className="primary-button-text">Start growing</div>
                                    </div>
                                    <img loading="lazy" alt="" src="/img/ArrowUp.svg" className="primary-button-icon" />
                                </Link>
                                <img loading="lazy" src="/img/Third-Tab-Icon.svg" alt="" className="third-tab-icon _01" />
                                <img loading="lazy" src="/img/Third-Tab-Icon-3.svg" alt="" className="third-tab-icon _02" />
                                <img loading="lazy" src="/img/Third-Tab-Icon-2.svg" alt="" className="third-tab-icon _03" />
                                <img loading="lazy" src="/img/Third-Tab-Icon-4.svg" alt="" className="third-tab-icon _04" />
                            </div>
                        </div>
                        <div className="tab-colomn-wrapper">
                            <div className="tab-colomn-wrap">
                                <img loading="lazy" src="/img/Tab-Icon-3.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Lead Generation</h3>
                                <div className="tab-description">Advanced lead generation systems targeting high-value institutional sales.</div>
                            </div>
                            <div className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icon-4.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Conversion Optimization</h3>
                                <div className="tab-description">Data-driven conversion optimization to maximize your sales pipeline.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const ExpertiseIcon = () => (
    <div style={{ width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', width: '160px', height: '160px', background: 'radial-gradient(circle, rgba(45,104,254,0.06) 0%, rgba(45,104,254,0) 70%)', borderRadius: '50%' }}></div>
        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <g className="floating-img" style={{ animationDelay: '0s' }}>
                <rect x="50" y="50" width="70" height="70" rx="16" fill="#fff" stroke="#2d68fe" strokeWidth="5" style={{ filter: 'drop-shadow(0 10px 15px rgba(45,104,254,0.15))' }} />
                <path d="M70 85h30M70 100h20" stroke="#2d68fe" strokeWidth="5" strokeLinecap="round" />

                <rect x="100" y="90" width="70" height="70" rx="16" fill="#0b2a5c" style={{ filter: 'drop-shadow(0 10px 15px rgba(11,42,92,0.2))' }} />
                <path d="M125 125l10 10 20-20" stroke="#ffb400" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                <circle cx="165" cy="55" r="24" fill="#ffb400" style={{ filter: 'drop-shadow(0 8px 12px rgba(255,180,0,0.3))' }} />
                <path d="M157 55l6 6 12-12" stroke="#fff" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />

                <circle cx="50" cy="145" r="18" fill="#2d68fe" />
                <path d="M40 145h20" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                <path d="M50 135v20" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            </g>
        </svg>
    </div>
)

const InnovationIcon = () => (
    <div style={{ width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', width: '160px', height: '160px', background: 'radial-gradient(circle, rgba(255,180,0,0.06) 0%, rgba(255,180,0,0) 70%)', borderRadius: '50%' }}></div>
        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <g className="floating-img" style={{ animationDelay: '1s' }}>
                <path d="M100 40c-25 0-45 20-45 45 0 15 8 28 20 36v19c0 5 4 10 10 10h30c6 0 10-5 10-10v-19c12-8 20-21 20-36 0-25-20-45-45-45z" fill="#fff" stroke="#0b2a5c" strokeWidth="5" style={{ filter: 'drop-shadow(0 10px 15px rgba(11,42,92,0.15))' }} />
                <path d="M85 160h30M90 170h20" stroke="#0b2a5c" strokeWidth="5" strokeLinecap="round" />
                <path d="M100 75v30M85 90l15-15 15 15" stroke="#ffb400" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />

                <g style={{ animation: 'spin-slow 20s linear infinite', transformOrigin: '100px 85px' }}>
                    <circle cx="40" cy="85" r="8" fill="#2d68fe" />
                    <circle cx="160" cy="85" r="8" fill="#2d68fe" />
                    <circle cx="100" cy="25" r="8" fill="#ffb400" />
                </g>
                <path d="M48 85h20M132 85h20M100 33v20\n" stroke="#cbd5e1" strokeWidth="3" strokeDasharray="4 4" />
            </g>
        </svg>
    </div>
)

const CustomizationIcon = () => (
    <div style={{ width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', width: '160px', height: '160px', background: 'radial-gradient(circle, rgba(45,104,254,0.06) 0%, rgba(45,104,254,0) 70%)', borderRadius: '50%' }}></div>
        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <g className="floating-img" style={{ animationDelay: '0.5s' }}>
                <rect x="30" y="60" width="140" height="14" rx="7" fill="#e2e8f0" />
                <rect x="30" y="100" width="140" height="14" rx="7" fill="#e2e8f0" />
                <rect x="30" y="140" width="140" height="14" rx="7" fill="#e2e8f0" />

                <rect x="30" y="60" width="60" height="14" rx="7" fill="#2d68fe" />
                <rect x="30" y="100" width="90" height="14" rx="7" fill="#ffb400" />
                <rect x="30" y="140" width="40" height="14" rx="7" fill="#0b2a5c" />

                <circle cx="90" cy="67" r="16" fill="#fff" stroke="#2d68fe" strokeWidth="5" style={{ filter: 'drop-shadow(0 4px 6px rgba(45,104,254,0.3))' }} />
                <circle cx="120" cy="107" r="16" fill="#fff" stroke="#ffb400" strokeWidth="5" style={{ filter: 'drop-shadow(0 4px 6px rgba(255,180,0,0.3))' }} />
                <circle cx="70" cy="147" r="16" fill="#fff" stroke="#0b2a5c" strokeWidth="5" style={{ filter: 'drop-shadow(0 4px 6px rgba(11,42,92,0.3))' }} />
            </g>
        </svg>
    </div>
)

const GlobalIcon = () => (
    <div style={{ width: '100%', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div style={{ position: 'absolute', width: '180px', height: '180px', background: 'radial-gradient(circle, rgba(45,104,254,0.06) 0%, rgba(45,104,254,0) 70%)', borderRadius: '50%' }}></div>
        <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <g className="floating-img" style={{ animationDelay: '1.5s' }}>
                <circle cx="100" cy="100" r="70" fill="#fff" stroke="#0b2a5c" strokeWidth="4" style={{ filter: 'drop-shadow(0 10px 20px rgba(11,42,92,0.15))' }} />
                <g style={{ animation: 'spin-slow 20s linear infinite', transformOrigin: '100px 100px' }}>
                    <ellipse cx="100" cy="100" rx="30" ry="70" fill="none" stroke="#2d68fe" strokeWidth="4" />
                    <ellipse cx="100" cy="100" rx="70" ry="25" fill="none" stroke="#2d68fe" strokeWidth="4" />
                </g>
                <path d="M100 30v140" stroke="#0b2a5c" strokeWidth="4" strokeDasharray="6 6" />

                <circle cx="100" cy="30" r="10" fill="#ffb400" />
                <circle cx="100" cy="170" r="10" fill="#ffb400" />
                <circle cx="30" cy="100" r="10" fill="#0b2a5c" />
                <circle cx="170" cy="100" r="10" fill="#0b2a5c" />

                <path d="M170 100l15-15M30 100l-15-15M100 30l15-20M100 170l-20 15" stroke="#cbd5e1" strokeWidth="3" strokeLinecap="round" />
                <circle cx="185" cy="85" r="5" fill="#2d68fe" style={{ animation: 'pulse-node 2s infinite' }} />
                <circle cx="15" cy="85" r="5" fill="#ffb400" style={{ animation: 'pulse-node 2.5s infinite' }} />
                <circle cx="115" cy="10" r="5" fill="#0b2a5c" style={{ animation: 'pulse-node 1.8s infinite' }} />
                <circle cx="80" cy="185" r="5" fill="#2d68fe" style={{ animation: 'pulse-node 2.2s infinite' }} />
            </g>
        </svg>
    </div>
)

export const EcommerceVisualRounded = () => (
    <div style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 100%)',
        borderRadius: '24px',
        padding: '24px',
        width: '100%',
        maxWidth: '360px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 15px 35px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(255,255,255,0.5)'
    }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#f8fafc', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="https://ui-avatars.com/api/?name=Alex&background=random" alt="Avatar" style={{ width: '100%' }} />
                </div>
                <div>
                    <div style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a' }}>Welcome, Alex!</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Search for items, brands...</div>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                    <svg width="14" height="14" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </div>
                <div style={{ padding: '8px 14px', borderRadius: '20px', background: '#fff', display: 'flex', alignItems: 'center', gap: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                    <svg width="14" height="14" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <div style={{ fontSize: '11px', fontWeight: '600', color: '#334155' }}>Cart <span style={{ color: '#94a3b8' }}>(5)</span></div>
                </div>
            </div>
        </div>

        {/* Tracking Card */}
        <div style={{ background: '#fff', borderRadius: '16px', padding: '16px', marginBottom: '20px', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Fast Delivery Tracking</div>
                <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '500' }}>Order #8457 - On the Way</div>
            </div>
            <div style={{ position: 'relative', height: '6px', background: '#f1f5f9', borderRadius: '3px', marginBottom: '10px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '65%', background: '#00a3ff', borderRadius: '3px' }}></div>
                <div style={{ position: 'absolute', top: '50%', left: '65%', transform: 'translate(-50%, -50%)', width: '12px', height: '12px', borderRadius: '50%', background: '#00a3ff', border: '3px solid #fff', boxShadow: '0 2px 4px rgba(0,163,255,0.3)' }}></div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '10px', fontWeight: '600', color: '#00a3ff' }}>10-Min Delivery: 6 Mins Left</div>
        </div>

        {/* Essentials Grid */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: '#0f172a' }}>Your Essentials</div>
            <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '10px', fontWeight: '600', color: '#0f172a' }}>18 nearby stores active</div>
                <div style={{ fontSize: '9px', color: '#64748b' }}>Average Delivery: 9 mins</div>
            </div>
        </div>
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            <ProductCard bgColor="#f0f9ff" title="Organic Milk 1L" price="$3.49" icon="🥛" />
            <ProductCard bgColor="#fff7ed" title="Bread" price="$3.49" icon="🍞" />
            <ProductCard bgColor="#fefce8" title="Bananas" price="$3.49" icon="🍌" />
            <ProductCard bgColor="#fef2f2" title="Eggs" price="$3.49" icon="🥚" />
        </div>
    </div>
)

const ProductCard = ({ bgColor, title, price, icon }) => (
    <div style={{ minWidth: '70px', background: '#fff', borderRadius: '16px', padding: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', marginBottom: '8px' }}>
            {icon}
        </div>
        <div style={{ fontSize: '9px', fontWeight: '600', color: '#334155', textAlign: 'center', marginBottom: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>{title}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ fontSize: '10px', fontWeight: '700', color: '#0f172a' }}>{price}</div>
            <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: '#0052ff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>+</div>
        </div>
    </div>
)
