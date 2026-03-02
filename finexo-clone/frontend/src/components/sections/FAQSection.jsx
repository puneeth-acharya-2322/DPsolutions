/* ─────────────────────────────────────────────────────────
   FAQSection — Exact DOM replica from finexo-template.webflow.io
   Source: home.html at position 58965 (real HTML extracted Feb 2026)
   
   Critical structure (from real HTML):
   - faq-content-wrap contains a div.w-tabs (with data-current="Tab 1")
   - Inside that: faq-tab-menu w-tab-menu (the tab list)
   - Tab links start from data-w-tab="Tab 2" (real HTML skips Tab 1)
   - data-w-id on each tab link matches exactly from real HTML
   ────────────────────────────────────────────────────────*/
export default function FAQSection() {
    return (
        <section className="section">
            <div className="w-layout-blockcontainer container w-container">
                <div className="section-top-wrapper">
                    <div data-w-id="fe3cc9fa-660c-b4c0-739e-efbd2513111f"
                        className="section-top-subtitle-wrap">
                        <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                        <div className="section-top-subtitle">FAQ</div>
                    </div>
                    <h2 data-w-id="fe3cc9fa-660c-b4c0-739e-efbd25131123"
                        className="section-top-title testimonial">
                        Frequently <span className="design-text">asked</span> questions!
                    </h2>
                </div>

                <div className="faq-content-wrapper">
                    <div className="faq-content-wrap">

                        {/* Exact structure from real HTML: div.w-tabs wraps faq-tab-menu */}
                        <div data-current="Tab 1" data-easing="ease"
                            data-duration-in="300" data-duration-out="100"
                            className="w-tabs">
                            <div className="faq-tab-menu w-tab-menu">

                                {/* FAQ 1 — Tab 2 in Webflow data-w-tab (real HTML starts at Tab 2) */}
                                <a data-w-tab="Tab 2"
                                    data-w-id="fe3cc9fa-660c-b4c0-739e-efbd2513112c"
                                    className="faq-content w-inline-block w-tab-link w--current"
                                    href="#">
                                    <div className="faq-top-wrapper">
                                        <h4>What are the benefits of using your financial tools?</h4>
                                        <div className="faq-icon-wrapper">
                                            <div className="faq-minuss-icon"></div>
                                            <div className="faq-pluss-icon"></div>
                                        </div>
                                    </div>
                                    <div className="faq-ans">
                                        <ul role="list" className="list">
                                            <li>Our financial tools provide real-time insights, automated expense tracking, and personalized investment strategies tailored to your goals.</li>
                                            <li>This empowers you to make informed decisions and optimize your financial growth with minimal effort, saving you both time and money.</li>
                                        </ul>
                                    </div>
                                </a>

                                {/* FAQ 2 — Tab 3 */}
                                <a data-w-tab="Tab 3"
                                    data-w-id="fe3cc9fa-660c-b4c0-739e-efbd25131139"
                                    className="faq-content w-inline-block w-tab-link"
                                    href="#">
                                    <div className="faq-top-wrapper">
                                        <h4>How do I get started with your platform</h4>
                                        <div className="faq-icon-wrapper">
                                            <div className="faq-minuss-icon"></div>
                                            <div className="faq-pluss-icon"></div>
                                        </div>
                                    </div>
                                    <div className="faq-ans">
                                        <ul role="list" className="list">
                                            <li>Getting started is quick and easy. Simply sign up for an account, complete your profile, and connect your bank securely.</li>
                                            <li>Once connected, our intuitive dashboard will guide you through the remaining setup so you can begin managing your finances immediately.</li>
                                        </ul>
                                    </div>
                                </a>

                                {/* FAQ 3 — Tab 4 */}
                                <a data-w-tab="Tab 4"
                                    data-w-id="fe3cc9fa-660c-b4c0-739e-efbd25131146"
                                    className="faq-content w-inline-block w-tab-link"
                                    href="#">
                                    <div className="faq-top-wrapper">
                                        <h4>Is my information secure?</h4>
                                        <div className="faq-icon-wrapper">
                                            <div className="faq-minuss-icon"></div>
                                            <div className="faq-pluss-icon"></div>
                                        </div>
                                    </div>
                                    <div className="faq-ans">
                                        <ul role="list" className="list">
                                            <li>Security is our top priority. We use bank-level 256-bit encryption, multi-factor authentication (MFA), and secure servers to protect your data.</li>
                                            <li>We maintain strict compliance with industry standards and never sell or share your personal information with unauthorized third parties.</li>
                                        </ul>
                                    </div>
                                </a>

                                {/* FAQ 4 — Tab 5 */}
                                <a data-w-tab="Tab 5"
                                    data-w-id="fe3cc9fa-660c-b4c0-739e-efbd25131153"
                                    className="faq-content w-inline-block w-tab-link"
                                    href="#">
                                    <div className="faq-top-wrapper">
                                        <h4>How do I contact customer support?</h4>
                                        <div className="faq-icon-wrapper">
                                            <div className="faq-minuss-icon"></div>
                                            <div className="faq-pluss-icon"></div>
                                        </div>
                                    </div>
                                    <div className="faq-ans">
                                        <ul role="list" className="list">
                                            <li>Our dedicated support team is available 24/7. You can reach us via the live chat feature on our platform, or email us at support.</li>
                                            <li>Additionally, we offer comprehensive documentation and video tutorials in our Help Center to assist you with common inquiries.</li>
                                        </ul>
                                    </div>
                                </a>

                                {/* FAQ 5 — Tab 6 */}
                                <a data-w-tab="Tab 6"
                                    data-w-id="fe3cc9fa-660c-b4c0-739e-efbd25131160"
                                    className="faq-content w-inline-block w-tab-link"
                                    href="#">
                                    <div className="faq-top-wrapper">
                                        <h4>What payment options do you accept?</h4>
                                        <div className="faq-icon-wrapper">
                                            <div className="faq-minuss-icon"></div>
                                            <div className="faq-pluss-icon"></div>
                                        </div>
                                    </div>
                                    <div className="faq-ans">
                                        <ul role="list" className="list">
                                            <li>We accept all major credit and debit cards including Visa, Mastercard, and American Express for seamless transactions.</li>
                                            <li>We also support popular digital wallets like Apple Pay and Google Pay, as well as direct bank transfers (ACH) for your convenience.</li>
                                        </ul>
                                    </div>
                                </a>

                            </div>

                            {/* Tab content panes — Webflow IX2 manages display */}
                            <div className="tabs-content-2 w-tab-content">
                                <div data-w-tab="Tab 2" className="w-tab-pane w--tab-active"></div>
                                <div data-w-tab="Tab 3" className="w-tab-pane"></div>
                                <div data-w-tab="Tab 4" className="w-tab-pane"></div>
                                <div data-w-tab="Tab 5" className="w-tab-pane"></div>
                                <div data-w-tab="Tab 6" className="w-tab-pane"></div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
