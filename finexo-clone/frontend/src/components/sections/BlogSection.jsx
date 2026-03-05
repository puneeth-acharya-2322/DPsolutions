import { Link } from 'react-router-dom'

/* ─── BlogSection ─────────────────────────────────────────
   Dashapatmaja Solutions — Insights & Articles
  ──────────────────────────────────────────────────────── */
export default function BlogSection() {
    return (
        <section className="section blog">
            <div className="w-layout-blockcontainer container w-container">
                <div className="section-top-wrapper">
                    <div data-w-id="09ac68b2-1d3a-5bd3-d0c5-c0a3cb90cdf1"
                        className="section-top-subtitle-wrap phone-left">
                        <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                        <div className="section-top-subtitle">Insights</div>
                    </div>
                    <h2 data-w-id="09ac68b2-1d3a-5bd3-d0c5-c0a3cb90cdf5"
                        className="section-top-title article">
                        Latest <span className="design-text">insights</span> from our team
                    </h2>
                </div>

                <style>{`
                    /* Exact dimensions from original Finexo template:
                       Grid: 550px left + 700px right + 30px gap
                       Left img: 550x314, Right imgs: 320x241 */
                    .blog-content-wrapper {
                        grid-template-columns: 550px 1fr !important;
                    }
                    /* Featured image — force landscape crop */
                    .blog-left-col-wrapper .blog-image-wrapper {
                        max-height: 260px;
                        overflow: hidden;
                    }
                    .blog-left-col-wrapper .blog-main-image {
                        height: 260px;
                        object-fit: cover;
                        width: 100%;
                    }
                    /* Right column cards */
                    .blog-link-wrapper._02 {
                        grid-template-columns: 320px 1fr !important;
                    }
                    .blog-link-wrapper._02 .blog-image-wrapper {
                        width: 320px;
                        min-width: 320px;
                        height: 241px;
                        overflow: hidden;
                        border-radius: 12px;
                    }
                    .blog-link-wrapper._02 .blog-main-image {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        max-width: none;
                    }
                    /* Hover effects */
                    .blog-link-wrapper {
                        transition: transform 0.3s ease, box-shadow 0.3s ease !important;
                    }
                    .blog-link-wrapper:hover {
                        transform: translateY(-6px);
                        box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
                    }
                    .blog-image-wrapper {
                        overflow: hidden;
                    }
                    .blog-link-wrapper .blog-main-image {
                        transition: transform 0.4s ease;
                    }
                    .blog-link-wrapper:hover .blog-main-image {
                        transform: scale(1.05);
                    }
                `}</style>

                <div data-w-id="09ac68b2-1d3a-5bd3-d0c5-c0a3cb90cdf9"
                    className="blog-content-wrapper">

                    {/* Featured blog — left col */}
                    <div className="blog-left-col-wrapper" data-w-id="blog-left-col-fade">
                        <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                                <div role="listitem" className="w-dyn-item">
                                    <Link to="/blogs" data-w-id="09ac68b2-1d3a-5bd3-d0c5-c0a3cb90ce01"
                                        className="blog-link-wrapper w-inline-block">
                                        <div className="blog-image-wrapper">
                                            <img src="/img/blog-strategy.png" loading="lazy" alt="Business Strategy" className="blog-main-image" />
                                        </div>
                                        <div className="blog-top-wrapper">
                                            <div className="blog-category-wrapper"><div>Strategy</div></div>
                                            <div className="blog-dot-icon"></div>
                                            <div className="blog-reading-time">6 min</div>
                                        </div>
                                        <div className="blog-details-wrapper">
                                            <h3 style={{ color: 'rgb(19,39,77)' }} className="blog-title">Why Strategy Must Come Before Execution</h3>
                                            <div className="blog-description">Most businesses rush to execute without aligning strategy across branding, commerce, and sales — here's why that approach fails...</div>
                                        </div>
                                        <p className="none-text">A deep dive into why businesses that lead with strategy outperform those that prioritize speed.</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right col blogs */}
                    <div className="blog-right-col-wrapper" data-w-id="blog-right-col-fade">
                        <div className="w-dyn-list">
                            <div role="list" className="blog-collection-list w-dyn-items">

                                <div role="listitem" className="w-dyn-item">
                                    <Link to="/blogs" data-w-id="09ac68b2-1d3a-5bd3-d0c5-c0a3cb90ce1b"
                                        className="blog-link-wrapper _02 w-inline-block">
                                        <div id="w-node-_09ac68b2-1d3a-5bd3-d0c5-c0a3cb90ce1d-25b1e467" className="blog-image-wrapper">
                                            <img src="/img/blog-ecommerce.png" loading="lazy" alt="E-Commerce Growth" className="blog-main-image" />
                                        </div>
                                        <div className="blog-left-col">
                                            <div className="blog-details-wrapper">
                                                <h3 className="blog-title _02">Scaling E-Commerce Beyond Marketplaces</h3>
                                                <div className="blog-description">How brands can build their own commerce ecosystem while leveraging marketplace reach...</div>
                                            </div>
                                            <p className="none-text">A practical guide to building a multi-channel commerce strategy.</p>
                                            <div className="blog-top-wrapper">
                                                <div className="blog-category-wrapper"><div>Commerce</div></div>
                                                <div className="blog-dot-icon"></div>
                                                <div className="blog-reading-time">5 min</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div role="listitem" className="w-dyn-item">
                                    <Link to="/blogs" data-w-id="09ac68b2-1d3a-5bd3-d0c5-c0a3cb90ce27"
                                        className="blog-link-wrapper _02 w-inline-block">
                                        <div id="w-node-_09ac68b2-1d3a-5bd3-d0c5-c0a3cb90ce29-25b1e467" className="blog-image-wrapper">
                                            <img src="/img/blog-branding.png" loading="lazy" alt="Brand Building" className="blog-main-image" />
                                        </div>
                                        <div className="blog-left-col">
                                            <div className="blog-details-wrapper">
                                                <h3 className="blog-title _02">Building Brands That Drive Revenue</h3>
                                                <div className="blog-description">Why brand positioning is a business lever, not just a creative exercise...</div>
                                            </div>
                                            <p className="none-text">Explore how strategic brand positioning directly impacts commerce conversion rates.</p>
                                            <div className="blog-top-wrapper">
                                                <div className="blog-category-wrapper"><div>Branding</div></div>
                                                <div className="blog-dot-icon"></div>
                                                <div className="blog-reading-time">7 min</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
