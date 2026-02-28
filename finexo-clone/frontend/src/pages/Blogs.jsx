import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Blogs Page — Exact DOM replica from finexo-template.webflow.io
   Source: blogs.html (real HTML extracted Feb 2026)
   
   Section 1: hero-top-wrapper (same pattern as pricing/contact)
   Section 2: blog-content-wrapper blog-page (Webflow CMS list)
   Key classes: blog-content-wrapper blog-page, blog-left-col-wrapper,
                blog-collection-wrapper, blog-link-wrapper, blog-image-wrapper
   ────────────────────────────────────────────────────────*/
export default function Blogs() {
    return (
        <>
            {/* Section 1 — Page hero */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="hero-top-wrapper">
                        <div data-w-id="72aac671-aa57-7d90-e97d-97e1a4b6cbeb"
                            className="hero-top-text-wrapper">
                            <img src="/img/Coins.svg" loading="lazy" alt="" className="hero-top-icon" />
                            <div className="hero-top-subtitle">#1 <span className="hero-top-subtitle-span">FINANCE PLATFORM</span></div>
                        </div>
                        <h1 className="section-top-hero-title features">
                            Our latest <span className="design-text">blog</span> posts and <span className="design-text">articles</span>
                        </h1>
                        <p className="section-top-description">
                            We provide comprehensive financial solutions to help you achieve your goals. From Personalized.
                        </p>
                    </div>
                </div>
            </section>

            {/* Section 2 — Blog grid (Webflow CMS list static replica) */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="blog-content-wrapper blog-page">

                        {/* Left col — featured post */}
                        <div id="w-node-_72038d32-9417-ae59-747f-d1a2bcd4acca-e340b76e" className="blog-left-col-wrapper">
                            <div className="w-dyn-list">
                                <div role="list" className="w-dyn-items">
                                    <div role="listitem" className="w-dyn-item">
                                        <a data-w-id="72038d32-9417-ae59-747f-d1a2bcd4acce"
                                            href="/article/mastering-your-money-smart" className="blog-link-wrapper w-inline-block">
                                            <div className="blog-image-wrapper">
                                                <img src="/img/Blog-Image.webp" loading="lazy" alt="" className="blog-main-image"
                                                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.4140625px, 939.9375px"
                                                    srcSet="/img/Blog-Image.webp 550w" />
                                            </div>
                                            <div className="blog-top-wrapper">
                                                <div className="blog-category-wrapper"><div>Finance</div></div>
                                                <div className="blog-dot-icon"></div>
                                                <div className="blog-reading-time">8 min</div>
                                            </div>
                                            <div className="blog-details-wrapper">
                                                <h3 style={{ color: 'rgb(19,39,77)' }} className="blog-title">Mastering Your Money: Smart...</h3>
                                                <div className="blog-description">Discover key investment strategies that help grow your wealth and secure...</div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right col — blog list */}
                        <div className="blog-right-col-wrapper">
                            <div className="w-dyn-list">
                                <div role="list" className="blog-collection-list w-dyn-items">

                                    <div role="listitem" className="w-dyn-item">
                                        <a data-w-id="72038d32-9417-ae59-747f-d1a2bcd4acda"
                                            href="/article/debt-management-strategies" className="blog-link-wrapper _02 w-inline-block">
                                            <div id="w-node-_72038d32-9417-ae59-747f-d1a2bcd4acdc-e340b76e" className="blog-image-wrapper">
                                                <img src="/img/Blog-Image-2.webp" loading="lazy" alt="" className="blog-main-image" />
                                            </div>
                                            <div className="blog-left-col">
                                                <div className="blog-details-wrapper">
                                                    <h3 className="blog-title _02">Debt Management Strategies.</h3>
                                                    <div className="blog-description">Turn your free time into extra income profitable side...</div>
                                                </div>
                                                <div className="blog-top-wrapper">
                                                    <div className="blog-category-wrapper"><div>Investing</div></div>
                                                    <div className="blog-dot-icon"></div>
                                                    <div className="blog-reading-time">5 min</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>

                                    <div role="listitem" className="w-dyn-item">
                                        <a data-w-id="72038d32-9417-ae59-747f-d1a2bcd4ace4"
                                            href="/article/smart-ways-to-save-for-retirement" className="blog-link-wrapper _02 w-inline-block">
                                            <div id="w-node-_72038d32-9417-ae59-747f-d1a2bcd4ace6-e340b76e" className="blog-image-wrapper">
                                                <img src="/img/Blog-Image-3.webp" loading="lazy" alt="" className="blog-main-image" />
                                            </div>
                                            <div className="blog-left-col">
                                                <div className="blog-details-wrapper">
                                                    <h3 className="blog-title _02">Smart Ways to Save for Retirement.</h3>
                                                    <div className="blog-description">Break down the complexities of the stock market...</div>
                                                </div>
                                                <div className="blog-top-wrapper">
                                                    <div className="blog-category-wrapper"><div>Budgeting</div></div>
                                                    <div className="blog-dot-icon"></div>
                                                    <div className="blog-reading-time">10 min</div>
                                                </div>
                                            </div>
                                        </a>
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
