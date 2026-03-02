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
                                At Dashapatmaja Solutions, we bridge creativity and strategic insight—driving innovation across Branding & E-commerce, Ed-Tech, and Research & Development.
                                {isExpanded && (
                                    <>
                                        {' '}We partner with businesses not only to craft distinctive brand experiences and transformative educational technologies, but also to deliver high-impact advisory and consulting services.
                                        Whether it’s shaping go-to-market strategies, enabling digital transformation, or conducting industry-defining research, we bring the analytical rigor and executional excellence typically
                                        associated with top-tier firms—while keeping our solutions bold, future-ready, and grounded in real-world impact.
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
                                        <div className="primary-button-text">Book a Demo </div>
                                        <div className="primary-button-text">Book a Demo </div>
                                    </div>
                                    <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right — Hero image */}
                    <div id="w-node-cb5a412b-82b7-c024-e34d-0cb060af8991-25b1e467" className="hero-right-col-wrapper">
                        <img className="hero-image"
                            src="/img/banner-image.jpg"
                            alt=""
                            sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
                            data-w-id="ca0770fb-1edc-c831-5efe-f4a6a729d9b1"
                            loading="lazy"
                            srcSet="/img/banner-image-p-800.jpg 800w, /img/banner-image.jpg 1679w"
                        />
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
                                {[1, 2, 3, 4, 5, 6].map(i => (
                                    <img key={i} src={`/img/Ticker-Image-${i}.svg`}
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
