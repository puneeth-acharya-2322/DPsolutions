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
                                <div className="control-description">Cross-domain expertise across marketing, commerce, and sales</div>
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

            {/* ── Section 3: Our Approach (Steps) ───────────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div data-w-id="a65be11c-987a-67a9-cd26-dc846082610d"
                            className="section-top-subtitle-wrap phone-left">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">Our Approach</div>
                        </div>
                        <h2 data-w-id="a65be11c-987a-67a9-cd26-dc8460826111"
                            className="section-top-title">
                            Strategy First.<span className="design-text">Execution</span> Focused.
                        </h2>
                        <div data-w-id="a65be11c-987a-67a9-cd26-dc8460826116"
                            className="section-subtitle">
                            We do not operate in silos. Every engagement begins with a clear understanding of your business model, margins, customer segments, and growth targets.
                        </div>
                    </div>

                    <div className="works-content-wrapper">
                        <div className="works-content-wrap">
                            {/* Step 1 — Understand Your Business */}
                            <div data-w-id="25ad14af-06f1-9711-ec0c-7da0b1132543"
                                className="works-card-wrapper">
                                <div className="work-card-content-wrapper">
                                    <div className="work-card-number-wrapper"><div className="work-card-number">1</div></div>
                                    <h3 className="work-title">Understand Your Business</h3>
                                    <div className="work-description" style={{ maxWidth: '100%' }}>We start by mapping your business model, margins, customer segments, and growth targets to build a clear foundation.</div>
                                </div>
                                <div id="w-node-d4e79e05-1797-16fe-f13c-83f0fa5b71fa-25b1e467" className="work-image-wrapper">
                                    {/* Business Analysis SVG — Animated bars */}
                                    <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 280 }}>
                                        <rect x="20" y="20" width="240" height="200" rx="16" fill="#f0f4ff" stroke="#2d68fe" strokeWidth="1.5" />
                                        <rect x="40" y="45" width="200" height="35" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
                                        <text x="55" y="68" fontSize="13" fill="#0b2a5c" fontWeight="600" fontFamily="Inter,sans-serif">Business Model Analysis</text>
                                        {/* Animated bars — grow from bottom */}
                                        <rect x="50" y="205" width="28" rx="4" fill="#2d68fe" opacity="0.3">
                                            <animate attributeName="y" from="205" to="160" dur="0.8s" begin="0.2s" fill="freeze" />
                                            <animate attributeName="height" from="0" to="45" dur="0.8s" begin="0.2s" fill="freeze" />
                                        </rect>
                                        <rect x="90" y="205" width="28" rx="4" fill="#2d68fe" opacity="0.5">
                                            <animate attributeName="y" from="205" to="140" dur="0.8s" begin="0.5s" fill="freeze" />
                                            <animate attributeName="height" from="0" to="65" dur="0.8s" begin="0.5s" fill="freeze" />
                                        </rect>
                                        <rect x="130" y="205" width="28" rx="4" fill="#2d68fe" opacity="0.7">
                                            <animate attributeName="y" from="205" to="120" dur="0.8s" begin="0.8s" fill="freeze" />
                                            <animate attributeName="height" from="0" to="85" dur="0.8s" begin="0.8s" fill="freeze" />
                                        </rect>
                                        <rect x="170" y="205" width="28" rx="4" fill="#2d68fe">
                                            <animate attributeName="y" from="205" to="100" dur="0.8s" begin="1.1s" fill="freeze" />
                                            <animate attributeName="height" from="0" to="105" dur="0.8s" begin="1.1s" fill="freeze" />
                                        </rect>
                                        {/* Labels */}
                                        <text x="55" y="195" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif" opacity="0">Margins
                                            <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="1s" fill="freeze" /></text>
                                        <text x="91" y="195" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif" opacity="0">Segments
                                            <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="1.3s" fill="freeze" /></text>
                                        <text x="137" y="195" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif" opacity="0">Reach
                                            <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="1.6s" fill="freeze" /></text>
                                        <text x="173" y="195" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif" opacity="0">Growth
                                            <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="1.9s" fill="freeze" /></text>
                                        {/* Pulsing target icon */}
                                        <circle cx="220" cy="120" r="22" fill="#fff" stroke="#ffb400" strokeWidth="2">
                                            <animate attributeName="r" values="22;24;22" dur="2s" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="220" cy="120" r="14" fill="none" stroke="#ffb400" strokeWidth="1.5">
                                            <animate attributeName="r" values="14;16;14" dur="2s" repeatCount="indefinite" />
                                        </circle>
                                        <circle cx="220" cy="120" r="6" fill="#ffb400">
                                            <animate attributeName="r" values="6;7;6" dur="1.5s" repeatCount="indefinite" />
                                        </circle>
                                    </svg>
                                </div>
                            </div>

                            {/* Step 2 — Align Strategy Across Domains */}
                            <div data-w-id="0dc68af9-3de6-3cc9-6a61-acc1a758e573"
                                className="works-card-wrapper">
                                <div className="work-image-wrapper">
                                    {/* Connected Domains SVG — Animated nodes */}
                                    <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 280 }}>
                                        <rect x="20" y="20" width="240" height="200" rx="16" fill="#f0f4ff" stroke="#2d68fe" strokeWidth="1.5" />
                                        {/* Connecting lines — draw animation */}
                                        <line x1="88" y1="76" x2="116" y2="98" stroke="#2d68fe" strokeWidth="2" strokeDasharray="30" strokeDashoffset="30">
                                            <animate attributeName="stroke-dashoffset" from="30" to="0" dur="0.6s" begin="0.8s" fill="freeze" />
                                        </line>
                                        <line x1="192" y1="76" x2="164" y2="98" stroke="#2d68fe" strokeWidth="2" strokeDasharray="30" strokeDashoffset="30">
                                            <animate attributeName="stroke-dashoffset" from="30" to="0" dur="0.6s" begin="1s" fill="freeze" />
                                        </line>
                                        <line x1="140" y1="150" x2="140" y2="173" stroke="#ffb400" strokeWidth="2" strokeDasharray="25" strokeDashoffset="25">
                                            <animate attributeName="stroke-dashoffset" from="25" to="0" dur="0.6s" begin="1.2s" fill="freeze" />
                                        </line>
                                        {/* Arcs — draw in */}
                                        <path d="M88 64 Q140 30 192 64" stroke="#e2e8f0" strokeWidth="1.5" fill="none" strokeDasharray="120" strokeDashoffset="120">
                                            <animate attributeName="stroke-dashoffset" from="120" to="0" dur="1s" begin="1.4s" fill="freeze" />
                                        </path>
                                        <path d="M66 82 Q50 140 120 193" stroke="#e2e8f0" strokeWidth="1.5" fill="none" strokeDasharray="150" strokeDashoffset="150">
                                            <animate attributeName="stroke-dashoffset" from="150" to="0" dur="1s" begin="1.6s" fill="freeze" />
                                        </path>
                                        <path d="M214 82 Q230 140 160 193" stroke="#e2e8f0" strokeWidth="1.5" fill="none" strokeDasharray="150" strokeDashoffset="150">
                                            <animate attributeName="stroke-dashoffset" from="150" to="0" dur="1s" begin="1.8s" fill="freeze" />
                                        </path>
                                        {/* Center hub — fade in */}
                                        <circle cx="140" cy="120" r="30" fill="#0b2a5c" opacity="0">
                                            <animate attributeName="opacity" from="0" to="1" dur="0.5s" begin="0.3s" fill="freeze" />
                                        </circle>
                                        <text x="140" y="116" textAnchor="middle" fontSize="9" fill="#fff" fontWeight="600" fontFamily="Inter,sans-serif" opacity="0">STRATEGY
                                            <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.5s" fill="freeze" /></text>
                                        <text x="140" y="128" textAnchor="middle" fontSize="8" fill="#94a3b8" fontFamily="Inter,sans-serif" opacity="0">Core
                                            <animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.5s" fill="freeze" /></text>
                                        {/* Branding node — pop in */}
                                        <circle cx="70" cy="60" r="0" fill="#2d68fe">
                                            <animate attributeName="r" from="0" to="22" dur="0.4s" begin="0.6s" fill="freeze" />
                                        </circle>
                                        <text x="70" y="57" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="600" fontFamily="Inter,sans-serif" opacity="0">Brand
                                            <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.8s" fill="freeze" /></text>
                                        <text x="70" y="67" textAnchor="middle" fontSize="7" fill="#c7d2fe" fontFamily="Inter,sans-serif" opacity="0">Marketing
                                            <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="0.8s" fill="freeze" /></text>
                                        {/* Commerce node — pop in */}
                                        <circle cx="210" cy="60" r="0" fill="#2d68fe">
                                            <animate attributeName="r" from="0" to="22" dur="0.4s" begin="0.9s" fill="freeze" />
                                        </circle>
                                        <text x="210" y="57" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="600" fontFamily="Inter,sans-serif" opacity="0">Commerce
                                            <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.1s" fill="freeze" /></text>
                                        <text x="210" y="67" textAnchor="middle" fontSize="7" fill="#c7d2fe" fontFamily="Inter,sans-serif" opacity="0">Systems
                                            <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.1s" fill="freeze" /></text>
                                        {/* Sales node — pop in */}
                                        <circle cx="140" cy="195" r="0" fill="#ffb400">
                                            <animate attributeName="r" from="0" to="22" dur="0.4s" begin="1.2s" fill="freeze" />
                                        </circle>
                                        <text x="140" y="192" textAnchor="middle" fontSize="8" fill="#0b2a5c" fontWeight="600" fontFamily="Inter,sans-serif" opacity="0">Sales
                                            <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.4s" fill="freeze" /></text>
                                        <text x="140" y="202" textAnchor="middle" fontSize="7" fill="#0b2a5c" fontFamily="Inter,sans-serif" opacity="0">Growth
                                            <animate attributeName="opacity" from="0" to="1" dur="0.3s" begin="1.4s" fill="freeze" /></text>
                                    </svg>
                                </div>
                                <div id="w-node-_0dc68af9-3de6-3cc9-6a61-acc1a758e574-25b1e467" className="work-card-content-wrapper">
                                    <div className="work-card-number-wrapper"><div className="work-card-number">2</div></div>
                                    <h3 className="work-title">Align Strategy Across Domains</h3>
                                    <div className="work-description" style={{ maxWidth: '100%' }}>Strategy informs branding. Branding supports commerce. Commerce feeds sales. Sales validate strategy.</div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 — Execute & Measure Impact */}
                        <div data-w-id="b68a962a-5352-39ba-d5af-3f38aa290ba3"
                            className="work-right-col-wrapper">
                            <div className="work-top-wrapper" style={{ alignItems: 'flex-start', paddingRight: '32px' }}>
                                <div className="work-card-number-wrapper _02"><div className="work-card-number">3</div></div>
                                <h3>Execute &amp; Measure Impact</h3>
                                <div className="work-description _02" style={{ textAlign: 'left', maxWidth: '100%' }}>We deliver measurable outcomes across every domain — tracking KPIs, optimizing in real time, and iterating for continuous growth.</div>
                            </div>
                            <div className="work-second-image-wrapper">
                                {/* KPI Dashboard SVG — Animated */}
                                <svg viewBox="0 0 500 210" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%' }}>
                                    <rect width="500" height="210" rx="16" fill="#f8fafc" />
                                    {/* Header */}
                                    <rect x="20" y="12" width="460" height="32" rx="8" fill="#0b2a5c" />
                                    <text x="40" y="33" fontSize="13" fill="#fff" fontWeight="600" fontFamily="Inter,sans-serif">Performance Dashboard</text>
                                    <text x="360" y="33" fontSize="10" fill="#94a3b8" fontFamily="Inter,sans-serif">Live Metrics</text>
                                    <circle cx="445" cy="28" r="4" fill="#22c55e">
                                        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
                                    </circle>
                                    {/* KPI Cards — fade in sequentially */}
                                    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.3s" fill="freeze" />
                                        <rect x="20" y="54" width="105" height="52" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
                                        <text x="35" y="72" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">Brand Reach</text>
                                        <text x="35" y="94" fontSize="18" fill="#0b2a5c" fontWeight="700" fontFamily="Inter,sans-serif">248%</text>
                                        <text x="88" y="94" fontSize="9" fill="#22c55e" fontFamily="Inter,sans-serif">↑12%</text>
                                    </g>
                                    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.6s" fill="freeze" />
                                        <rect x="138" y="54" width="105" height="52" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
                                        <text x="153" y="72" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">Commerce GMV</text>
                                        <text x="153" y="94" fontSize="18" fill="#0b2a5c" fontWeight="700" fontFamily="Inter,sans-serif">₹12.8K</text>
                                    </g>
                                    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="0.9s" fill="freeze" />
                                        <rect x="256" y="54" width="105" height="52" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
                                        <text x="271" y="72" fontSize="9" fill="#64748b" fontFamily="Inter,sans-serif">Sales Pipeline</text>
                                        <text x="271" y="94" fontSize="18" fill="#0b2a5c" fontWeight="700" fontFamily="Inter,sans-serif">$2.4M</text>
                                        <text x="335" y="94" fontSize="9" fill="#22c55e" fontFamily="Inter,sans-serif">↑8%</text>
                                    </g>
                                    <g opacity="0"><animate attributeName="opacity" from="0" to="1" dur="0.4s" begin="1.2s" fill="freeze" />
                                        <rect x="374" y="54" width="105" height="52" rx="8" fill="#2d68fe" />
                                        <text x="389" y="72" fontSize="9" fill="#c7d2fe" fontFamily="Inter,sans-serif">ROI Score</text>
                                        <text x="389" y="94" fontSize="18" fill="#fff" fontWeight="700" fontFamily="Inter,sans-serif">4.2x</text>
                                    </g>
                                    {/* Growth chart area */}
                                    <rect x="20" y="118" width="460" height="80" rx="8" fill="#fff" stroke="#e2e8f0" strokeWidth="1" />
                                    <text x="40" y="136" fontSize="10" fill="#0b2a5c" fontWeight="600" fontFamily="Inter,sans-serif">Growth Trajectory</text>
                                    <circle cx="370" cy="133" r="3" fill="#2d68fe" /><text x="378" y="136" fontSize="8" fill="#64748b" fontFamily="Inter,sans-serif">Revenue</text>
                                    <circle cx="425" cy="133" r="3" fill="#ffb400" /><text x="433" y="136" fontSize="8" fill="#64748b" fontFamily="Inter,sans-serif">Pipeline</text>
                                    {/* Revenue line — draws in */}
                                    <polyline points="40,185 100,180 160,172 220,166 280,160 340,154 400,148 460,142"
                                        stroke="#2d68fe" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                        strokeDasharray="500" strokeDashoffset="500">
                                        <animate attributeName="stroke-dashoffset" from="500" to="0" dur="1.5s" begin="1.5s" fill="freeze" />
                                    </polyline>
                                    {/* Pipeline line — draws in */}
                                    <polyline points="40,188 100,184 160,178 220,176 280,170 340,165 400,158 460,150"
                                        stroke="#ffb400" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"
                                        strokeDasharray="500" strokeDashoffset="500">
                                        <animate attributeName="stroke-dashoffset" from="500" to="0" dur="1.5s" begin="1.8s" fill="freeze" />
                                    </polyline>
                                    {/* Area fill — fades in */}
                                    <polygon points="40,185 100,180 160,172 220,166 280,160 340,154 400,148 460,142 460,193 40,193"
                                        fill="url(#blueGradFeat)" opacity="0">
                                        <animate attributeName="opacity" from="0" to="0.15" dur="0.8s" begin="2.5s" fill="freeze" />
                                    </polygon>
                                    <defs>
                                        <linearGradient id="blueGradFeat" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#2d68fe" />
                                            <stop offset="100%" stopColor="#2d68fe" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
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
        borderRadius: '32px',
        padding: '36px',
        width: '100%',
        maxWidth: '460px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 20px 50px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(255,255,255,0.6)'
    }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#0052ff', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '20px', fontWeight: '800' }}>
                    AL
                </div>
                <div>
                    <div style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a' }}>Welcome, Alex!</div>
                    <div style={{ fontSize: '13px', color: '#64748b' }}>Search for items, brands...</div>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <svg width="20" height="20" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </div>
                <div style={{ padding: '12px 20px', borderRadius: '24px', background: '#fff', display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <svg width="18" height="18" fill="none" stroke="#64748b" strokeWidth="2" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#334155' }}>Cart <span style={{ color: '#94a3b8', fontWeight: '500' }}>(5)</span></div>
                </div>
            </div>
        </div>

        {/* Tracking Card */}
        <div style={{ background: '#fff', borderRadius: '20px', padding: '24px', marginBottom: '28px', boxShadow: '0 6px 16px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>Fast Delivery Tracking</div>
                <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600' }}>Order #8457 - On the Way</div>
            </div>
            <div style={{ position: 'relative', height: '8px', background: '#f1f5f9', borderRadius: '4px', marginBottom: '16px' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: '65%', background: '#00a3ff', borderRadius: '4px' }}></div>
                <div style={{ position: 'absolute', top: '50%', left: '65%', transform: 'translate(-50%, -50%)', width: '18px', height: '18px', borderRadius: '50%', background: '#00a3ff', border: '4px solid #fff', boxShadow: '0 3px 6px rgba(0,163,255,0.4)' }}></div>
            </div>
            <div style={{ textAlign: 'center', fontSize: '13px', fontWeight: '700', color: '#00a3ff' }}>10-Min Delivery: 6 Mins Left</div>
        </div>

        {/* Essentials Grid */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
            <div style={{ fontSize: '16px', fontWeight: '800', color: '#0f172a' }}>Your Essentials</div>
            <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#0f172a' }}>18 nearby stores active</div>
                <div style={{ fontSize: '11px', color: '#64748b', fontWeight: '500', marginTop: '2px' }}>Average Delivery: 9 mins</div>
            </div>
        </div>
        <div style={{ display: 'flex', gap: '12px', overflowX: 'hidden', paddingBottom: '4px' }}>
            <ProductCard bgColor="#f0f9ff" title="Organic Milk 1L" price="$3.49" icon="🥛" />
            <ProductCard bgColor="#fff7ed" title="Bread" price="$3.49" icon="🍞" />
            <ProductCard bgColor="#fefce8" title="Bananas" price="$3.49" icon="🍌" />
            <ProductCard bgColor="#fef2f2" title="Eggs" price="$3.49" icon="🥚" />
        </div>
    </div>
)

const ProductCard = ({ bgColor, title, price, icon }) => (
    <div style={{ flex: 1, minWidth: '85px', background: '#fff', borderRadius: '20px', padding: '16px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.04)' }}>
        <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: bgColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '12px' }}>
            {icon}
        </div>
        <div style={{ fontSize: '11px', fontWeight: '700', color: '#334155', textAlign: 'center', marginBottom: '14px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>{title}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ fontSize: '14px', fontWeight: '800', color: '#0f172a' }}>{price}</div>
            <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: '#0052ff', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '800', cursor: 'pointer' }}>+</div>
        </div>
    </div>
)
