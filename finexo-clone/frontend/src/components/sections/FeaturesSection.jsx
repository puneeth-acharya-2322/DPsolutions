import { useState } from 'react'
import { Link } from 'react-router-dom'

/* ─── FeaturesSection ─────────────────────────────────────
   Exact Webflow HTML structure from home.html
   All local /img/ assets, all data-w-id attributes preserved
  ──────────────────────────────────────────────────────── */
export default function FeaturesSection() {
    return (
        <>
            {/* ── Section 1: Control / Card features ─────────── */}
            <section className="section features">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div data-w-id="e7af82c1-d798-7f93-082c-8e98ebf337e0"
                            className="section-top-subtitle-wrap phone-left">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">FEATURES</div>
                        </div>
                        <h2 data-w-id="bd59f56d-a367-d893-a558-ae1118c5b959"
                            className="section-top-title">Take a control for your finances</h2>
                    </div>

                    <div className="control-content-wrapper">
                        {/* Card 1 */}
                        <div data-w-id="9508af15-2a36-4a03-9858-5fd31e914dba"
                            className="control-content-wrap">
                            <div className="control-top-content-wrapper">
                                <h3 className="feature-title">Automated Savings</h3>
                                <div className="control-description">Set it and Automate your savings with recurring transfer.</div>
                            </div>
                            <div className="control-image-wrapper">
                                <img src="/img/Control-image-4.svg" loading="lazy" alt="" className="control-image" />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div data-w-id="ae606966-5161-1ea8-3122-81bf1a27d097"
                            className="control-content-wrap">
                            <div className="control-top-content-wrapper">
                                <h3 className="feature-title">Customizable Cards</h3>
                                <div className="control-description">Take control of your debt with our budgeting</div>
                            </div>
                            <div className="control-image-wrapper _02">
                                <div data-w-id="746d95ac-ff3e-71a9-7389-606c0900101d"
                                    data-animation-type="lottie"
                                    data-src="/lottie/cards-382x314.json"
                                    data-loop="1" data-direction="1" data-autoplay="1"
                                    data-is-ix2-target="0" data-renderer="svg"
                                    data-default-duration="0" data-duration="0">
                                </div>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div data-w-id="98631d1b-72cc-bd84-a455-e14048f1565f"
                            className="control-content-wrap">
                            <div className="control-top-content-wrapper">
                                <h3 className="feature-title">Automated Savings</h3>
                                <div className="control-description">Set it and Automate your savings with recurring transfer.</div>
                            </div>
                            <div className="control-image-wrapper _03">
                                <div data-w-id="941b6407-85d8-537c-c1ef-d462ca14df22"
                                    data-animation-type="lottie"
                                    data-src="/lottie/savings-345x336.json"
                                    data-loop="1" data-direction="1" data-autoplay="1"
                                    data-is-ix2-target="0" data-renderer="svg"
                                    data-default-duration="0" data-duration="0">
                                </div>
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
                            Empower <span className="design-text">your</span> with a financial journey
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
                            <div className="section-top-subtitle">FEATURES</div>
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
                    <div className="tab-text">Dashboard Overview</div>
                </a>
                <a data-w-tab="Tab 3" onClick={e => { e.preventDefault(); setTab(1) }}
                    className={`tab-button w-inline-block w-tab-link${tab === 1 ? ' w--current' : ''}`} href="#">
                    <div className="tab-button-icon-wrapper">
                        <img loading="lazy" src="/img/Money-black.svg" alt="" className="tab-button-icon" />
                        <img loading="lazy" src="/img/White-Money.svg" alt="" className="tab-button-icon-white" />
                    </div>
                    <div className="tab-text">Invoice Management</div>
                </a>
                <a data-w-tab="Tab 4" onClick={e => { e.preventDefault(); setTab(2) }}
                    className={`tab-button w-inline-block w-tab-link${tab === 2 ? ' w--current' : ''}`} href="#">
                    <div className="tab-button-icon-wrapper">
                        <img loading="lazy" src="/img/CreditCard-ash.svg" alt="" className="tab-button-icon" />
                        <img loading="lazy" src="/img/CreditCard-white.svg" alt="" className="tab-button-icon-white" />
                    </div>
                    <div className="tab-text">Invoice Management</div>
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
                                <h3 className="tab-title">Customization Options</h3>
                                <div className="tab-description">Personalize your dashboard and to display the information.</div>
                            </div>
                            <div data-w-id="09456d7b-e4c0-d119-1868-962cadec8c25" className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icons-2.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Effortless Tracking</h3>
                                <div className="tab-description">Monitor your progress towards your financial goals in real-time.</div>
                            </div>
                        </div>
                        <div id="w-node-_09456d7b-e4c0-d119-1868-962cadec8c2b-25b1e467" className="tab-image-wrapper">
                            <img className="tab-image"
                                src="/img/Tab-Image.webp"
                                alt="Cashflow analysis chart"
                                sizes="100vw"
                                data-w-id="09456d7b-e4c0-d119-1868-962cadec8c2c"
                                loading="lazy"
                                srcSet="/img/Tab-Image.webp 542w" />
                        </div>
                        <div className="tab-colomn-wrapper">
                            <div data-w-id="09456d7b-e4c0-d119-1868-962cadec8c2e" className="tab-colomn-wrap">
                                <img loading="lazy" src="/img/Tab-Icon-3.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">At-a-Glance View</h3>
                                <div className="tab-description">See your overall financial health with a clear and concise summary</div>
                            </div>
                            <div data-w-id="09456d7b-e4c0-d119-1868-962cadec8c34" className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icon-4.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Actionable Insights</h3>
                                <div className="tab-description">Gain valuable insights into your spending habits.</div>
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
                                <h3 className="tab-title">Customization Options</h3>
                                <div className="tab-description">Personalize your dashboard and to display the information.</div>
                            </div>
                            <div className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icons-2.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Effortless Tracking</h3>
                                <div className="tab-description">Monitor your progress towards your financial goals in real-time.</div>
                            </div>
                        </div>
                        <div id="w-node-_09456d7b-e4c0-d119-1868-962cadec8c49-25b1e467" className="tab-image-wrapper">
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
                                <h3 className="tab-title">At-a-Glance View</h3>
                                <div className="tab-description">See your overall financial health with a clear and concise summary</div>
                            </div>
                            <div className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icon-4.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Actionable Insights</h3>
                                <div className="tab-description">Gain valuable insights into your spending habits.</div>
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
                                <h3 className="tab-title">Customization Options</h3>
                                <div className="tab-description">Personalize your dashboard and to display the information.</div>
                            </div>
                            <div className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icons-2.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Effortless Tracking</h3>
                                <div className="tab-description">Monitor your progress towards your financial goals in real-time.</div>
                            </div>
                        </div>
                        <div id="w-node-_09456d7b-e4c0-d119-1868-962cadec8c7b-25b1e467" className="tab-image-wrapper">
                            <div data-w-id="09456d7b-e4c0-d119-1868-962cadec8c7c" className="third-tab-content-wrapper">
                                <div className="third-tan-subtitle">INTEGRATION</div>
                                <h2 className="third-tab-image-title">Integrate to control <span className="design-text">your finance</span></h2>
                                <Link to="/contact" data-w-id="09456d7b-e4c0-d119-1868-962cadec8c83"
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
                                <h3 className="tab-title">At-a-Glance View</h3>
                                <div className="tab-description">See your overall financial health with a clear and concise summary</div>
                            </div>
                            <div className="tab-colomn-wrap _02">
                                <img loading="lazy" src="/img/Tab-Icon-4.svg" alt="" className="tab-icon" />
                                <h3 className="tab-title">Actionable Insights</h3>
                                <div className="tab-description">Gain valuable insights into your spending habits.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
