import { Link } from 'react-router-dom'

/* ─── BlogSection ─────────────────────────────────────────
   Exact Webflow HTML, local /img/ assets
  ──────────────────────────────────────────────────────── */
export default function BlogSection() {
    return (
        <section className="section blog">
            <div className="w-layout-blockcontainer container w-container">
                <div className="section-top-wrapper">
                    <div data-w-id="09ac68b2-1d3a-5bd3-d0c5-c0a3cb90cdf1"
                        className="section-top-subtitle-wrap phone-left">
                        <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                        <div className="section-top-subtitle">Articles</div>
                    </div>
                    <h2 data-w-id="09ac68b2-1d3a-5bd3-d0c5-c0a3cb90cdf5"
                        className="section-top-title article">
                        Some articles <span className="design-text">about</span> us!
                    </h2>
                </div>

                <div data-w-id="09ac68b2-1d3a-5bd3-d0c5-c0a3cb90cdf9"
                    className="blog-content-wrapper">

                    {/* Featured blog — left col */}
                    <div className="blog-left-col-wrapper">
                        <div className="w-dyn-list">
                            <div role="list" className="w-dyn-items">
                                <div role="listitem" className="w-dyn-item">
                                    <Link to="/blogs" data-w-id="09ac68b2-1d3a-5bd3-d0c5-c0a3cb90ce01"
                                        className="blog-link-wrapper w-inline-block">
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
                                        <p className="none-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right col blogs */}
                    <div className="blog-right-col-wrapper">
                        <div className="w-dyn-list">
                            <div role="list" className="blog-collection-list w-dyn-items">

                                <div role="listitem" className="w-dyn-item">
                                    <Link to="/blogs" data-w-id="09ac68b2-1d3a-5bd3-d0c5-c0a3cb90ce1b"
                                        className="blog-link-wrapper _02 w-inline-block">
                                        <div id="w-node-_09ac68b2-1d3a-5bd3-d0c5-c0a3cb90ce1d-25b1e467" className="blog-image-wrapper">
                                            <img src="/img/Blog-Image-2.webp" loading="lazy" alt="" className="blog-main-image" />
                                        </div>
                                        <div className="blog-left-col">
                                            <div className="blog-details-wrapper">
                                                <h3 className="blog-title _02">Debt Management Strategies.</h3>
                                                <div className="blog-description">Turn your free time into extra income profitable side...</div>
                                            </div>
                                            <p className="none-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                            <div className="blog-top-wrapper">
                                                <div className="blog-category-wrapper"><div>Investing</div></div>
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
                                            <img src="/img/Blog-Image-3.webp" loading="lazy" alt="" className="blog-main-image" />
                                        </div>
                                        <div className="blog-left-col">
                                            <div className="blog-details-wrapper">
                                                <h3 className="blog-title _02">Smart Ways to Save for Retirement.</h3>
                                                <div className="blog-description">Break down the complexities of the stock market...</div>
                                            </div>
                                            <p className="none-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
                                            <div className="blog-top-wrapper">
                                                <div className="blog-category-wrapper"><div>Budgeting</div></div>
                                                <div className="blog-dot-icon"></div>
                                                <div className="blog-reading-time">10 min</div>
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
