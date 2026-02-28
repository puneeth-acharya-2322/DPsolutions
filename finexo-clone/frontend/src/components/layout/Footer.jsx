import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Footer — Exact DOM replica from finexo-template.webflow.io
   Source: home.html (real HTML extracted Feb 2026)
   HTML→JSX: class→className, href→to for internal links
   All data-w-id preserved exactly as in real HTML
   ────────────────────────────────────────────────────────*/
export default function Footer() {
    return (
        <section className="section">
            <div className="w-layout-blockcontainer container w-container">
                <div className="footer-content-wrapper">

                    {/* Left CTA — dark background, white button */}
                    <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ac7" className="footer-left-col-wrapper">
                        <h2>Get started today</h2>
                        <p className="footer-description">We provide comprehensive financial solutions to help you achieve your goals. From gets Personalized.</p>
                        <Link to="/contact" data-w-id="022059ed-85d5-c9d6-db4d-384787a8a2c7"
                            className="primary-button-wrapper white w-inline-block">
                            <div className="primary-button-wrap">
                                <div className="primary-button-text">Get Stated</div>
                                <div className="primary-button-text">Get Stated</div>
                            </div>
                            <img loading="lazy" src="/img/ArrowUp-white.svg" alt="" className="primary-button-icon" />
                        </Link>
                    </div>

                    {/* Right CTA — light background, dark button */}
                    <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ad3" className="footer-left-col-wrapper _02">
                        <h2>Get started today</h2>
                        <p className="footer-description">We provide comprehensive financial solutions to help you achieve your goals. From gets Personalized.</p>
                        <Link to="/contact" data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ad8"
                            className="primary-button-wrapper w-inline-block">
                            <div className="primary-button-wrap">
                                <div className="primary-button-text">Contact Sales</div>
                                <div className="primary-button-text">Contact Sales</div>
                            </div>
                            <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                        </Link>
                    </div>

                </div>

                {/* Bottom nav bar */}
                <div className="footer-botton-wrapper">
                    <div className="footer-logo-wrap">
                        <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ae1" className="footer-item-wrapper">
                            <Link to="/about" className="footer-item">About</Link>
                            <Link to="/blogs" className="footer-item">Blog</Link>
                            <Link to="/features" className="footer-item">Features</Link>
                            <Link to="/pricing" className="footer-item">Pricing</Link>
                            <Link to="/contact" className="footer-item">Contact</Link>
                        </div>
                        <Link data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75aec" to="/"
                            className="footer-logo-wrapper w-inline-block">
                            <img src="/img/Finexo.svg" loading="lazy" alt="" className="footer-logo" />
                        </Link>
                    </div>

                    <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75aee" className="footer-icon-wrapper">
                        <a data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75aef"
                            href="https://www.linkedin.com" className="footer-icon-wrap w-inline-block">
                            <img src="/img/cib-linkedin-in.svg" loading="lazy" alt="" className="footer-icon" />
                            <img src="/img/cib-linkedin-in-White.svg" loading="lazy" alt="" className="footer-white-icon" />
                        </a>
                        <a data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75af2"
                            href="https://www.facebook.com" className="footer-icon-wrap w-inline-block">
                            <img src="/img/cib-facebook-f.svg" loading="lazy" alt="" className="footer-icon" />
                            <img src="/img/cib-facebook-f-white.svg" loading="lazy" alt="" className="footer-white-icon" />
                        </a>
                        <a data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75af5"
                            href="https://www.instagram.com" className="footer-icon-wrap w-inline-block">
                            <img src="/img/ri-instagram-fill.svg" loading="lazy" alt="" className="footer-icon" />
                            <img src="/img/ri-instagram-fill-white.svg" loading="lazy" alt="" className="footer-white-icon" />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75af8" className="footer-copywrite-wrapper">
                    <div className="footer-copywrite-text">
                        c Copyright 2025 | Design &amp; Developed By{' '}
                        <a href="https://onixtheme.com/?utm_source=webflow&amp;utm_medium=template&amp;utm_campaign=marketplace"
                            target="_blank" rel="noreferrer" className="footer-copywrite-link">Onixtheme</a>
                        {' '}-{' '}
                        <Link to="/utility-pages/license" target="_blank" className="footer-copywrite-link">License</Link>
                        {' '}| Powered By{' '}
                        <a href="https://webflow.com" target="_blank" rel="noreferrer" className="footer-copywrite-link">Webflow</a>
                    </div>
                </div>

            </div>
        </section>
    )
}
