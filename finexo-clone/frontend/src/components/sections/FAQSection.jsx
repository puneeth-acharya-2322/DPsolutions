/* ─────────────────────────────────────────────────────────
   FAQSection — Exact DOM replica from finexo-template.webflow.io
   Source: home.html (real HTML extracted Feb 2026)
   
   Real HTML has 5 FAQ tabs: Tab 1–5 (Tab 2=first visible question)
   All faq-ans divs are ALWAYS in the DOM — Webflow IX2/CSS shows/hides them
   All data-w-id preserved exactly.
   ────────────────────────────────────────────────────────*/
export default function FAQSection() {
    return (
        <section className="section">
            <div className="w-layout-blockcontainer container w-container">
                <div className="section-top-wrapper">
                    <div data-w-id="c3049f17-e93e-4aba-1398-62dbdebf5e64"
                        className="section-top-subtitle-wrap">
                        <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                        <div className="section-top-subtitle">FAQ</div>
                    </div>
                    <h2 data-w-id="c3049f17-e93e-4aba-1398-62dbdebf5e68"
                        className="section-top-title testimonial">
                        Frequently <span className="design-text">asked</span> questions!
                    </h2>
                </div>

                <div data-w-id="c3049f17-e93e-4aba-1398-62dbdebf5e6c"
                    className="faq-content-wrapper">
                    <div className="faq-content-wrap">
                        {/* Webflow uses data-current on the wrapper, IX2 handles open/close */}
                        <div data-current="Tab 1" data-easing="ease"
                            data-duration-in="300" data-duration-out="100"
                            className="faq-tab-menu w-tab-menu" role="tablist">

                            {/* FAQ 1 */}
                            <a data-w-tab="Tab 1"
                                data-w-id="c3049f17-e93e-4aba-1398-62dbdebf5e72"
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
                                        <li>Right now, every time you&apos;ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios.</li>
                                        <li>It&apos;s time-consuming and complicated - making it so much harder to keep everything up to date.</li>
                                    </ul>
                                </div>
                            </a>

                            {/* FAQ 2 */}
                            <a data-w-tab="Tab 2"
                                data-w-id="fe3cc9fa-660c-b4c0-739e-efbd2513113a"
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
                                        <li>Right now, every time you&apos;ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios.</li>
                                        <li>It&apos;s time-consuming and complicated - making it so much harder to keep everything up to date.</li>
                                    </ul>
                                </div>
                            </a>

                            {/* FAQ 3 */}
                            <a data-w-tab="Tab 3"
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
                                        <li>Right now, every time you&apos;ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios.</li>
                                        <li>It&apos;s time-consuming and complicated - making it so much harder to keep everything up to date.</li>
                                    </ul>
                                </div>
                            </a>

                            {/* FAQ 4 */}
                            <a data-w-tab="Tab 4"
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
                                        <li>Right now, every time you&apos;ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios.</li>
                                        <li>It&apos;s time-consuming and complicated - making it so much harder to keep everything up to date.</li>
                                    </ul>
                                </div>
                            </a>

                            {/* FAQ 5 */}
                            <a data-w-tab="Tab 5"
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
                                        <li>Right now, every time you&apos;ve got something new to share, you have to go to every single one of your channels to change the link in each of your bios.</li>
                                        <li>It&apos;s time-consuming and complicated - making it so much harder to keep everything up to date.</li>
                                    </ul>
                                </div>
                            </a>

                        </div>

                        {/* Tab content panes — Webflow IX2 manages display */}
                        <div className="tabs-content-2 w-tab-content">
                            <div data-w-tab="Tab 1" className="w-tab-pane w--tab-active"></div>
                            <div data-w-tab="Tab 2" className="w-tab-pane"></div>
                            <div data-w-tab="Tab 3" className="w-tab-pane"></div>
                            <div data-w-tab="Tab 4" className="w-tab-pane"></div>
                            <div data-w-tab="Tab 5" className="w-tab-pane"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
