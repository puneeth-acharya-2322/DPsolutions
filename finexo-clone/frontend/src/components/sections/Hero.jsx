import { Link } from 'react-router-dom'
import { useState } from 'react'

/* ─── Hero ────────────────────────────────────────────────
   Exact Webflow HTML, local /img/ assets, all data-w-id
   attributes preserved for Webflow IX2 animations
──────────────────────────────────────────────────────────*/
export default function Hero({ variant = 'home', title, subtitle }) {
    const [isExpanded, setIsExpanded] = useState(false)

    if (variant === 'page') {
        return (
            <section className="section hero inner">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="inner-hero-content-wrapper">
                        <div className="inner-hero-text-wrap">
                            <h1 className="inner-hero-title">{title}</h1>
                            {subtitle && <p className="inner-hero-description">{subtitle}</p>}
                        </div>
                        <div className="hero-button-wrapper">
                            <Link to="/contact" className="primary-button-wrapper secondary w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Book a Demo</div>
                                    <div className="primary-button-text">Book a Demo</div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                            </Link>

                        </div>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="section hero">
            <div className="w-layout-blockcontainer container w-container">
                <div className="hero-content-wrapper">
                    {/* Left content */}
                    <div id="w-node-b9cacff0-5f76-c518-394d-68e14fe00d5e-25b1e467" className="hero-left-content-wrap">
                        <div data-w-id="191fd31b-c48e-a9a4-6aa4-14708c7dadb7"
                            className="hero-top-text-wrapper left-align">
                            <img src="/img/Coins.svg" loading="lazy" alt="" className="hero-top-icon" />
                            <div className="hero-top-subtitle">#1 <span className="hero-top-subtitle-span">Dashapatmaja Solutions</span></div>
                        </div>
                        <div className="hero-left-content-wrapper">
                            <h1 data-w-id="2ee8a312-71fd-50e1-1535-3c3225ebaead" className="hero-title">
                                Innovating <span className="design-text">Today</span> for a<span className="design-text"> Smarter </span>Tomorrow
                            </h1>
                            <p data-w-id="4a21c3c5-7435-1bc3-4715-5cc31678d4e7" className="hero-description">
                                Dashapatmaja Solutions partners with ambitious businesses to strengthen brand positioning, build high-performance commerce ecosystems, and create structured sales growth.
                                {isExpanded && (
                                    <>
                                        {' '}We work at the intersection of strategy, creativity, technology, and execution. From brand architecture and digital
                                        presence to marketplace expansion and sales systems, we help businesses grow with clarity and control.
                                    </>
                                )}
                                {' '}
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    style={{ background: 'none', border: 'none', color: 'var(--bright-royal-blue)', cursor: 'pointer', padding: 0, fontWeight: 600, textDecoration: 'none' }}
                                >
                                    {isExpanded ? 'Read Less' : 'Read More...'}
                                </button>
                            </p>
                            <div data-w-id="e8ec2665-e3ac-c679-8557-b9afe8915508" className="hero-button-wrapper">
                                <Link to="/contact" data-w-id="d6e99a6b-32b8-7752-4992-8db9e68f321f"
                                    className="primary-button-wrapper secondary w-inline-block">
                                    <div className="primary-button-wrap">
                                        <div className="primary-button-text">Schedule a Strategy Call</div>
                                        <div className="primary-button-text">Schedule a Strategy Call</div>
                                    </div>
                                    <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right — Business Growth Dashboard */}
                    <div id="w-node-cb5a412b-82b7-c024-e34d-0cb060af8991-25b1e467" className="hero-right-col-wrapper">
                        <BusinessGrowthDashboard />
                    </div>
                </div>

                {/* Ticker */}
                <div className="ticker-content-wrapper">
                    <div data-w-id="ec14c473-f63f-e689-0137-b3fc22ad1e41"
                        className="ticker-title">Over 4M+ connected with us!</div>
                    <div data-w-id="332012d9-c181-63be-48ff-8116710856b7"
                        className="ticker-content-wrap">
                        {[1, 2, 3].map(n => (
                            <div key={n} className="ticker-single-wrapper">
                                {['float2.png', 'float4.png', 'float5.png', 'float2.png', 'float4.png', 'float5.png'].map((img, i) => (
                                    <img key={i} src={`/img/${img}`}
                                        loading="lazy" alt="" className="ticker-images" />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

/* ─── Business Growth Dashboard ─────────────────────────── */
const BusinessGrowthDashboard = () => {
    const cardStyle = {
        background: '#fff',
        borderRadius: '20px',
        padding: '28px 32px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)',
        maxWidth: '480px',
        width: '100%',
        fontFamily: "'Inter', sans-serif",
        position: 'relative',
        overflow: 'hidden',
    }

    return (
        <div className="hero-image" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', position: 'relative' }}>
            <style>{`
                @keyframes hero-float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                @keyframes hero-pulse-dot {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.3); }
                }
                @keyframes hero-bar-grow {
                    from { transform: scaleY(0); }
                    to { transform: scaleY(1); }
                }
                @keyframes hero-count-fade {
                    from { opacity: 0; transform: translateY(8px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .hero-dash-card {
                    animation: hero-float 5s ease-in-out infinite;
                }
                .hero-metric-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .hero-metric-card:hover {
                    transform: translateY(-4px) !important;
                    box-shadow: 0 12px 24px rgba(45,104,254,0.15) !important;
                }
            `}</style>

            <div className="hero-dash-card" style={cardStyle}>
                {/* Decorative gradient corner */}
                <div style={{
                    position: 'absolute', top: 0, right: 0, width: '180px', height: '180px',
                    background: 'radial-gradient(circle at top right, rgba(45,104,254,0.06) 0%, transparent 70%)',
                    borderRadius: '0 20px 0 0', pointerEvents: 'none'
                }}></div>

                {/* Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            width: '40px', height: '40px', borderRadius: '12px',
                            background: 'linear-gradient(135deg, #0b2a5c 0%, #2d68fe 100%)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(45,104,254,0.3)'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg>
                        </div>
                        <div>
                            <div style={{ fontSize: '16px', fontWeight: '700', color: '#0b2a5c', lineHeight: '1.2' }}>Growth Analytics</div>
                            <div style={{ fontSize: '11px', color: '#94a3b8', fontWeight: '500' }}>Dashapatmaja Solutions</div>
                        </div>
                    </div>
                    <div style={{
                        padding: '6px 14px', borderRadius: '20px',
                        background: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
                        fontSize: '12px', fontWeight: '700', color: '#059669',
                        display: 'flex', alignItems: 'center', gap: '4px'
                    }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                            <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                        +42%
                    </div>
                </div>

                {/* Three Metric Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                    {/* Brand Reach */}
                    <div className="hero-metric-card" style={{
                        background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                        borderRadius: '16px', padding: '16px 14px', textAlign: 'center',
                        animation: 'hero-count-fade 0.6s ease forwards 0.2s', opacity: 0
                    }}>
                        <div style={{ marginBottom: '8px' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2d68fe" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: '800', color: '#0b2a5c', lineHeight: '1' }}>248%</div>
                        <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '600', marginTop: '4px' }}>Brand Reach</div>
                    </div>

                    {/* Commerce Growth */}
                    <div className="hero-metric-card" style={{
                        background: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
                        borderRadius: '16px', padding: '16px 14px', textAlign: 'center',
                        animation: 'hero-count-fade 0.6s ease forwards 0.4s', opacity: 0
                    }}>
                        <div style={{ marginBottom: '8px' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: '800', color: '#0b2a5c', lineHeight: '1' }}>12.8K</div>
                        <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '600', marginTop: '4px' }}>Commerce</div>
                    </div>

                    {/* Sales Pipeline */}
                    <div className="hero-metric-card" style={{
                        background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                        borderRadius: '16px', padding: '16px 14px', textAlign: 'center',
                        animation: 'hero-count-fade 0.6s ease forwards 0.6s', opacity: 0
                    }}>
                        <div style={{ marginBottom: '8px' }}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="1" x2="12" y2="23"></line>
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                            </svg>
                        </div>
                        <div style={{ fontSize: '18px', fontWeight: '800', color: '#0b2a5c', lineHeight: '1' }}>$2.4M</div>
                        <div style={{ fontSize: '10px', color: '#64748b', fontWeight: '600', marginTop: '4px' }}>Sales Pipeline</div>
                    </div>
                </div>

                {/* Growth Chart */}
                <div style={{
                    background: '#f8fafc', borderRadius: '16px', padding: '20px',
                    border: '1px solid #f1f5f9'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <div style={{ fontSize: '13px', fontWeight: '700', color: '#334155' }}>Business Growth</div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2d68fe' }}></div>
                                <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>Marketing</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffb400' }}></div>
                                <span style={{ fontSize: '10px', color: '#94a3b8', fontWeight: '500' }}>Sales</span>
                            </div>
                        </div>
                    </div>
                    <svg viewBox="0 0 320 100" style={{ width: '100%', height: '100px', overflow: 'visible' }}>
                        {/* Grid lines */}
                        {[0, 25, 50, 75, 100].map(y => (
                            <line key={y} x1="0" y1={y} x2="320" y2={y} stroke="#e2e8f0" strokeWidth="0.5" />
                        ))}
                        {/* Area fill — Marketing */}
                        <path d="M0,85 Q40,75 80,65 T160,40 T240,25 T320,10 L320,100 L0,100 Z"
                            fill="url(#blueGrad)" opacity="0.3" />
                        {/* Line — Marketing */}
                        <path d="M0,85 Q40,75 80,65 T160,40 T240,25 T320,10"
                            fill="none" stroke="#2d68fe" strokeWidth="2.5" strokeLinecap="round" />
                        {/* Area fill — Sales */}
                        <path d="M0,90 Q40,85 80,78 T160,55 T240,40 T320,20 L320,100 L0,100 Z"
                            fill="url(#goldGrad)" opacity="0.2" />
                        {/* Line — Sales */}
                        <path d="M0,90 Q40,85 80,78 T160,55 T240,40 T320,20"
                            fill="none" stroke="#ffb400" strokeWidth="2.5" strokeLinecap="round" />
                        {/* Data points */}
                        <circle cx="80" cy="65" r="4" fill="#fff" stroke="#2d68fe" strokeWidth="2" />
                        <circle cx="160" cy="40" r="4" fill="#fff" stroke="#2d68fe" strokeWidth="2" />
                        <circle cx="240" cy="25" r="4" fill="#fff" stroke="#2d68fe" strokeWidth="2" />
                        <circle cx="320" cy="10" r="5" fill="#2d68fe" stroke="#fff" strokeWidth="2"
                            style={{ animation: 'hero-pulse-dot 2s ease infinite' }} />
                        {/* Gradients */}
                        <defs>
                            <linearGradient id="blueGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#2d68fe" />
                                <stop offset="100%" stopColor="#2d68fe" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="goldGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#ffb400" />
                                <stop offset="100%" stopColor="#ffb400" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                {/* Bottom: Active Clients */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <div style={{ display: 'flex' }}>
                            {['#2d68fe', '#ffb400', '#0b2a5c', '#059669'].map((c, i) => (
                                <div key={i} style={{
                                    width: '28px', height: '28px', borderRadius: '50%',
                                    background: c, border: '2px solid #fff',
                                    marginLeft: i > 0 ? '-8px' : '0', position: 'relative', zIndex: 4 - i,
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '10px', fontWeight: '700', color: '#fff'
                                }}>
                                    {['DP', 'AL', 'SK', 'RK'][i]}
                                </div>
                            ))}
                        </div>
                        <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '500' }}>+50 active clients</div>
                    </div>
                    <div style={{
                        padding: '8px 16px', borderRadius: '12px',
                        background: 'linear-gradient(135deg, #0b2a5c 0%, #2d68fe 100%)',
                        color: '#fff', fontSize: '11px', fontWeight: '700', cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(45,104,254,0.3)'
                    }}>
                        View Report →
                    </div>
                </div>
            </div>
        </div>
    )
}
