import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Features Page — Exact DOM replica from finexo-template.webflow.io
   Source: features.html (real HTML extracted Feb 2026)

   6 sections (from real HTML at positions 28178, 30207, 40464, 44414, 48571, 51988):
   1. hero-top-wrapper (page intro)
   2. feature-content-wrapper feature-page (3-tab system)
   3. finance-content-wrapper (4 image cards with real analytics screenshots)
   4. future-content-wrapper (image + text block)
   5. ticker-content-wrapper _02 (brand logos)
   6. footer-content-wrapper (handled by Footer component)
   ────────────────────────────────────────────────────────*/
export default function Features() {
    return (
        <>
            {/* ── Section 1: Page hero ──────────────────────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="hero-top-wrapper">
                        <div data-w-id="66d8eca5-d82a-2e40-b54c-ef5c602f22a0"
                            className="hero-top-text-wrapper phone-center">
                            <img src="/img/Coins.svg" loading="lazy" alt="" className="hero-top-icon" />
                            <div className="hero-top-subtitle">#1 <span className="hero-top-subtitle-span">FINANCE PLATFORM</span></div>
                        </div>
                        <h1 data-w-id="66d8eca5-d82a-2e40-b54c-ef5c602f22a6"
                            className="section-top-hero-title">
                            Explore, manage, and <span className="design-text">grow</span> your finances easier
                        </h1>
                        <p data-w-id="66d8eca5-d82a-2e40-b54c-ef5c602f22ac"
                            className="section-top-description center">
                            We provide comprehensive financial solutions to help you achieve your goals. From Personalized.
                        </p>
                        <div data-w-id="66d8eca5-d82a-2e40-b54c-ef5c602f22ae"
                            className="hero-button-wrapper center">
                            <Link to="/contact" data-w-id="d6e99a6b-32b8-7752-4992-8db9e68f321f"
                                className="primary-button-wrapper secondary w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Book a Demo </div>
                                    <div className="primary-button-text">Book a Demo </div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                            </Link>
                            <Link data-w-id="717a1373-40c1-701e-7ec9-e70365b0649a" to="/contact"
                                className="download-button-wrapper w-inline-block">
                                <div className="download-button-text">Download App</div>
                                <div className="download-button-icon-wrapper">
                                    <img src="/img/DownloadSimple.svg" loading="lazy" alt="" className="download-button-icon" />
                                    <img src="/img/DownloadSimple-White.svg" loading="lazy" alt="" className="download-button-white-icon" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 2: Feature tabs ───────────────────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="feature-content-wrapper feature-page">
                        <div data-current="Tab 4" data-easing="ease" data-duration-in="300"
                            data-duration-out="100" className="feature-tab w-tabs">

                            {/* Tab buttons */}
                            <div data-w-id="22133966-01c9-08ad-9b13-dee17846fd6f" className="tabs-menu w-tab-menu">
                                <a data-w-tab="Tab 2" className="tab-button w-inline-block w-tab-link">
                                    <div className="tab-button-icon-wrapper">
                                        <img loading="lazy" src="/img/Dark-HandCoins.svg" alt="" className="tab-button-icon" />
                                        <img loading="lazy" src="/img/HandCoins-white.svg" alt="" className="tab-button-icon-white" />
                                    </div>
                                    <div className="tab-text">Dashboard Overview</div>
                                </a>
                                <a data-w-tab="Tab 3" className="tab-button w-inline-block w-tab-link">
                                    <div className="tab-button-icon-wrapper">
                                        <img loading="lazy" src="/img/Money-black.svg" alt="" className="tab-button-icon" />
                                        <img loading="lazy" src="/img/White-Money.svg" alt="" className="tab-button-icon-white" />
                                    </div>
                                    <div className="tab-text">Invoice Management</div>
                                </a>
                                <a data-w-tab="Tab 4" className="tab-button w-inline-block w-tab-link w--current">
                                    <div className="tab-button-icon-wrapper">
                                        <img loading="lazy" src="/img/CreditCard-ash.svg" alt="" className="tab-button-icon" />
                                        <img loading="lazy" src="/img/CreditCard-white.svg" alt="" className="tab-button-icon-white" />
                                    </div>
                                    <div className="tab-text">Invoice Management</div>
                                </a>
                            </div>

                            {/* Tab pane content */}
                            <div className="tabs-content w-tab-content">
                                {/* Tab 2 — Dashboard Overview */}
                                <div data-w-tab="Tab 2" className="tab-pane w-tab-pane">
                                    <div className="tab-content-wrapper">
                                        <div className="tab-colomn-wrapper">
                                            <div data-w-id="22133966-01c9-08ad-9b13-dee17846fd86" className="tab-colomn-wrap">
                                                <img loading="lazy" src="/img/Tab-Icons-1.svg" alt="" className="tab-icon" />
                                                <h2 className="tab-title">Customization Options</h2>
                                                <div className="tab-description">Personalize your dashboard and to display the information.</div>
                                            </div>
                                            <div data-w-id="22133966-01c9-08ad-9b13-dee17846fd8c" className="tab-colomn-wrap _02">
                                                <img loading="lazy" src="/img/Tab-Icons-2.svg" alt="" className="tab-icon" />
                                                <h2 className="tab-title">Effortless Tracking</h2>
                                                <div className="tab-description">Monitor your progress towards your financial goals in real-time.</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_22133966-01c9-08ad-9b13-dee17846fd92-f704b8da" className="tab-image-wrapper bg">
                                            <div
                                                data-w-id="964bf1a0-b913-5e68-845d-430d24e9ce4e"
                                                data-animation-type="lottie"
                                                data-src="https://cdn.prod.website-files.com/67a1a4168a205f6b25b1e460/695cf4bc2fe5d9c9856d6cd1_cards%20382x314.json"
                                                data-loop="1" data-direction="1" data-autoplay="1"
                                                data-is-ix2-target="0" data-renderer="svg"
                                                data-default-duration="0" data-duration="0">
                                            </div>
                                        </div>
                                        <div className="tab-colomn-wrapper">
                                            <div data-w-id="22133966-01c9-08ad-9b13-dee17846fda5" className="tab-colomn-wrap">
                                                <img loading="lazy" src="/img/Tab-Icon-3.svg" alt="" className="tab-icon" />
                                                <h2 className="tab-title">At-a-Glance View</h2>
                                                <div className="tab-description">See your overall financial health with a clear and concise summary</div>
                                            </div>
                                            <div data-w-id="22133966-01c9-08ad-9b13-dee17846fdab" className="tab-colomn-wrap _02">
                                                <img loading="lazy" src="/img/Tab-Icon-4.svg" alt="" className="tab-icon" />
                                                <h2 className="tab-title">Actionable Insights</h2>
                                                <div className="tab-description">Gain valuable insights into your spending habits.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab 3 — Invoice Management */}
                                <div data-w-tab="Tab 3" className="tab-pane w-tab-pane">
                                    <div className="tab-content-wrapper">
                                        <div className="tab-colomn-wrapper">
                                            <div className="tab-colomn-wrap">
                                                <img loading="lazy" src="/img/Tab-Icons-1.svg" alt="" className="tab-icon" />
                                                <h2 className="tab-title">Customization Options</h2>
                                                <div className="tab-description">Personalize your dashboard and to display the information.</div>
                                            </div>
                                            <div className="tab-colomn-wrap _02">
                                                <img loading="lazy" src="/img/Tab-Icons-2.svg" alt="" className="tab-icon" />
                                                <h2 className="tab-title">Effortless Tracking</h2>
                                                <div className="tab-description">Monitor your progress towards your financial goals in real-time.</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_22133966-01c9-08ad-9b13-dee17846fdb7-f704b8da" className="tab-image-wrapper bg">
                                            <div className="tab-image-wrap">
                                                <img loading="lazy" src="/img/Tab-Second-Image.svg" alt="" className="tab-image second" />
                                                <div className="second-tab-image-content-wrapper">
                                                    <div className="second-tab-content-wrapper">
                                                        <img loading="lazy" src="/img/Second-Tab-Icon.svg" alt="" className="second-tab-icon" />
                                                        <div className="second-tab-icon-title">Shopping</div>
                                                        <div className="second-tab-price">$900.00</div>
                                                    </div>
                                                    <div className="second-tab-content-wrapper">
                                                        <img loading="lazy" src="/img/Second-Tab-Icon-2.svg" alt="" className="second-tab-icon" />
                                                        <div className="second-tab-icon-title">Utilities</div>
                                                        <div className="second-tab-price">$600.00</div>
                                                    </div>
                                                    <div className="second-tab-content-wrapper">
                                                        <img loading="lazy" src="/img/Second-Tab-Icon.svg" alt="" className="second-tab-icon" />
                                                        <div className="second-tab-icon-title">Others</div>
                                                        <div className="second-tab-price">$300.00</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-colomn-wrapper">
                                            <div className="tab-colomn-wrap">
                                                <img loading="lazy" src="/img/Tab-Icon-3.svg" alt="" className="tab-icon" />
                                                <h2 className="tab-title">At-a-Glance View</h2>
                                                <div className="tab-description">See your overall financial health</div>
                                            </div>
                                            <div className="tab-colomn-wrap _02">
                                                <img loading="lazy" src="/img/Tab-Icon-4.svg" alt="" className="tab-icon" />
                                                <h2 className="tab-title">Actionable Insights</h2>
                                                <div className="tab-description">Gain valuable insights into your spending habits.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Tab 4 — Integration (w--current default) */}
                                <div data-w-tab="Tab 4" className="tab-pane w-tab-pane w--tab-active">
                                    <div className="tab-content-wrapper">
                                        <div className="tab-colomn-wrapper">
                                            <div className="tab-colomn-wrap">
                                                <img loading="lazy" src="/img/Tab-Icons-1.svg" alt="" className="tab-icon" />
                                                <h2 className="tab-title">Customization Options</h2>
                                                <div className="tab-description">Personalize your dashboard and to display the information.</div>
                                            </div>
                                            <div className="tab-colomn-wrap _02">
                                                <img loading="lazy" src="/img/Tab-Icons-2.svg" alt="" className="tab-icon" />
                                                <h2 className="tab-title">Effortless Tracking</h2>
                                                <div className="tab-description">Monitor your progress towards your financial goals in real-time.</div>
                                            </div>
                                        </div>
                                        <div id="w-node-_22133966-01c9-08ad-9b13-dee17846fde3-f704b8da" className="tab-image-wrapper bg">
                                            <div data-w-id="22133966-01c9-08ad-9b13-dee17846fde4" className="third-tab-content-wrapper">
                                                <div className="third-tan-subtitle">INTEGRATION</div>
                                                <h2 className="third-tab-image-title">Integrate to control <span className="design-text">your finance</span></h2>
                                                <Link to="/contact" data-w-id="22133966-01c9-08ad-9b13-dee17846fdeb"
                                                    className="primary-button-wrapper secondary w-inline-block">
                                                    <div className="primary-button-wrap">
                                                        <div className="primary-button-text">Start free</div>
                                                        <div className="primary-button-text">Start free</div>
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
                                                <h2 className="tab-title">At-a-Glance View</h2>
                                                <div className="tab-description">See your overall financial health</div>
                                            </div>
                                            <div className="tab-colomn-wrap _02">
                                                <img loading="lazy" src="/img/Tab-Icon-4.svg" alt="" className="tab-icon" />
                                                <h2 className="tab-title">Actionable Insights</h2>
                                                <div className="tab-description">Gain valuable insights into your spending habits.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 3: finance-content-wrapper (4 image cards) ─ */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div data-w-id="6c68b2fe-cb89-0479-7446-d7798e609590" className="section-top-subtitle-wrap phone-left">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">FEATURES</div>
                        </div>
                        <h2 data-w-id="6c68b2fe-cb89-0479-7446-d7798e609594" className="section-top-title">
                            Genuine and <span className="design-text">tangible </span>financial success.
                        </h2>
                        <div data-w-id="6c68b2fe-cb89-0479-7446-d7798e609599" className="section-subtitle">
                            Track expenses manage your finances effortlessly
                        </div>
                    </div>

                    {/* Row 1 */}
                    <div className="finance-content-wrapper">
                        <div data-w-id="1616fd92-6a7f-178c-b5dd-084a77b58453" className="finance-big-col-wrapper">
                            <h3 className="finance-title">Real-time analytics provide instantly</h3>
                            <div className="finance-description">Real-Time Analytics: Instant Insights for Smarter Decisions!</div>
                            <img src="/img/Feature-Image-1.jpg" loading="lazy"
                                sizes="(max-width: 667px) 100vw, 667px"
                                srcSet="/img/Feature-Image-1.jpg 667w"
                                alt="Line graph titled Transaction Analytics comparing monthly income peaking at $27,481 and expenses at $15,327"
                                className="finance-image" />
                        </div>
                        <div data-w-id="07b243fb-fc33-6720-c614-bd7b2c5d5ebe" className="finance-smal-col-wrapper">
                            <div>
                                <h3 className="finance-title _02">Integration capabilities that enhance efficiency.</h3>
                                <div className="finance-description _02">Our comprehensive training teams with the skills, knowledge, and tools needed for success.</div>
                            </div>
                            <img src="/img/Feature-Image-2.jpg" loading="lazy"
                                alt="Integration Analytics showing product selling orders"
                                className="finance-image _02" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="finance-content-wrapper _02">
                        <div data-w-id="706989a5-2fce-15f4-b329-89ea0cf599c8" className="finance-smal-col-wrapper _03">
                            <h3 className="finance-title _02">Training and resources areessential for skill</h3>
                            <div className="finance-description _02">Our comprehensive training programs and resource hub equip individuals and teams</div>
                            <img src="/img/Feature-Image-3.jpg" loading="lazy"
                                alt="Traffic analytics showing 289,000 total views"
                                className="finance-image _02" />
                        </div>
                        <div id="w-node-_706989a5-2fce-15f4-b329-89ea0cf599c2-f704b8da"
                            data-w-id="706989a5-2fce-15f4-b329-89ea0cf599c2" className="finance-big-col-wrapper _04">
                            <div>
                                <h3 className="finance-title">Project management in planning</h3>
                                <div className="finance-description _04">Project management is the process of planning, organizing, executing, and overseeing</div>
                            </div>
                            <img src="/img/Feature-Image-5.jpg" loading="lazy"
                                sizes="(max-width: 697px) 100vw, 697px"
                                srcSet="/img/Feature-Image-5.jpg 697w"
                                alt="Financeo dashboard showing Total Sales of $85,588.63 and Total Orders of $53,467.74"
                                className="finance-image last" />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 4: future-content-wrapper ─────────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="future-content-wrapper">
                        <div className="future-image-wrapper">
                            <img className="future-image"
                                src="/img/future-image.webp"
                                alt="Man in suit giving a presentation to colleagues with a pie chart displayed on a screen behind him."
                                sizes="(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 939.9921875px"
                                data-w-id="9b48d7da-79d9-595c-3636-1b61b389f989"
                                loading="lazy"
                                srcSet="/img/future-image-p-800.webp 800w, /img/future-image.webp 2508w" />
                        </div>
                        <div id="w-node-_5d4a6adc-5cef-747e-edf1-087fac04ca25-f704b8da" className="future-content-wrap">
                            <div className="section-top-wrapper left">
                                <div data-w-id="4359fcf0-fbb9-5754-d5e2-5ffecd8ae416" className="section-top-subtitle-wrap left">
                                    <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                                    <div className="section-top-subtitle">OUR FUTURE</div>
                                </div>
                                <h3 data-w-id="4359fcf0-fbb9-5754-d5e2-5ffecd8ae41a" className="section-top-title left">
                                    Explore our <span className="design-text">comprehensive</span> suite solutions for the future
                                </h3>
                                <div data-w-id="4359fcf0-fbb9-5754-d5e2-5ffecd8ae41f" className="section-subtitle future">
                                    Our innovative suite of cutting-edge tools and services is tailored to empower your business for success in the ever-evolving future. Join us on a journey of discovery as we navigate the complexities of today&apos;s dynamic market.
                                </div>
                                <div data-w-id="d4de88a7-10b0-b966-54cf-f30c6ab984be" className="section-subtitle future-ii">
                                    Our carefully curated solutions are designed to tackle tomorrow&apos;s challenges with confidence and precision.
                                </div>
                                <Link to="/contact" data-w-id="4359fcf0-fbb9-5754-d5e2-5ffecd8ae421"
                                    className="primary-button-wrapper w-inline-block">
                                    <div className="primary-button-wrap">
                                        <div className="primary-button-text">Get started</div>
                                        <div className="primary-button-text">Get started</div>
                                    </div>
                                    <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 5: ticker-content-wrapper _02 ─────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="ticker-content-wrapper _02">
                        <div data-w-id="702b3f3b-bf68-67be-cbbd-c7e460d6c2ee" className="ticker-title">
                            Over 4M+ connected with us!
                        </div>
                        <div className="ticker-content-wrap">
                            {[1, 2, 3].map(n => (
                                <div key={n} data-w-id={n === 1 ? '702b3f3b-bf68-67be-cbbd-c7e460d6c2f1' : undefined}
                                    className="ticker-single-wrapper">
                                    {[1, 2, 3, 4, 5, 6].map(i => (
                                        <img key={i} src={`/img/Ticker-Image-${i}.svg`} loading="lazy" alt="" className="ticker-images" />
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
