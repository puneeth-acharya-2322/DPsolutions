import { useRef } from 'react'
import axios from 'axios'

/* ─────────────────────────────────────────────────────────
   Contact Page — Exact DOM replica from finexo-template.webflow.io
   Source: contact.html sections at 28206 (hero) + 30278 (form)
   
   Real classes: contact-content-wrapper, contact-left-col-wrapper,
   contact-right-col-wrapper, contact-form-wrapper, contact-text-field,
   w-form, submit-button w-button
   Section hero uses hero-top-wrapper (same as pricing page pattern)
   ────────────────────────────────────────────────────────*/
export default function Contact() {
    const formRef = useRef(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(formRef.current)
        try {
            await axios.post(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/contact`, {
                firstName: data.get('First-Name'),
                lastName: data.get('Last-name'),
                phone: data.get('Phone'),
                email: data.get('Email'),
                message: data.get('Message'),
            })
            formRef.current.reset()
        } catch { }
    }

    return (
        <>
            {/* Section 1 — Page hero (hero-top-wrapper pattern) */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="hero-top-wrapper">
                        <div data-w-id="958c1d0d-3ef0-8b3a-d49c-351252aec012"
                            className="hero-top-text-wrapper">
                            <img src="/img/Coins.svg" loading="lazy" alt="" className="hero-top-icon" />
                            <div className="hero-top-subtitle">#1 <span className="hero-top-subtitle-span">FINANCE PLATFORM</span></div>
                        </div>
                        <h1 data-w-id="958c1d0d-3ef0-8b3a-d49c-351252aec018"
                            className="section-top-hero-title features">
                            Contact <span className="design-text">us</span> and let&apos;s <span className="design-text">talk</span>
                        </h1>
                        <p data-w-id="958c1d0d-3ef0-8b3a-d49c-351252aec020"
                            className="section-top-description">
                            We provide comprehensive financial solutions to help you achieve your goals. From Personalized.
                        </p>
                        <div data-w-id="958c1d0d-3ef0-8b3a-d49c-351252aec022"
                            className="hero-button-wrapper">
                            <a href="/contact" data-w-id="d6e99a6b-32b8-7752-4992-8db9e68f321f"
                                className="primary-button-wrapper secondary w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Book a Demo </div>
                                    <div className="primary-button-text">Book a Demo </div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                            </a>
                            <a data-w-id="717a1373-40c1-701e-7ec9-e70365b0649a" href="/contact"
                                className="download-button-wrapper w-inline-block">
                                <div className="download-button-text">Download App</div>
                                <div className="download-button-icon-wrapper">
                                    <img src="/img/DownloadSimple.svg" loading="lazy" alt="" className="download-button-icon" />
                                    <img src="/img/DownloadSimple-White.svg" loading="lazy" alt="" className="download-button-white-icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 — Contact form */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="contact-content-wrapper">
                        <div className="contact-left-col-wrapper">
                            <h2 data-w-id="0f8f461f-e2d7-468f-7918-287443d84bda"
                                className="contact-title">Let&#x27;s Connect</h2>
                            <div data-w-id="c75d7e3d-bb39-4786-b32a-1d20cdb14494"
                                className="contact-description">
                                Have a Question in mind? Let&apos;s turn your ideas into stunning realities. Reach out to us!
                            </div>
                        </div>
                        <div id="w-node-_409a1572-78f8-b557-ef1d-d0331061abc9-dae8d466" className="contact-right-col-wrapper">
                            <div className="w-form">
                                <form ref={formRef} method="get" name="email-form" data-name="Email Form" data-w-id="483cded3-6721-1676-26be-badbba829e35"
                                    id="email-form" onSubmit={handleSubmit}>
                                    <div className="contact-form-wrapper">
                                        <div className="contact-form-wrap">
                                            <input className="contact-text-field w-input" maxLength="256"
                                                name="First-Name" data-name="First Name" placeholder="First Name"
                                                type="text" id="First-Name" />
                                        </div>
                                        <div className="contact-form-wrap">
                                            <input className="contact-text-field w-input" maxLength="256"
                                                name="Last-name" data-name="Last name" placeholder="Last name"
                                                type="text" id="Last-name" />
                                        </div>
                                    </div>
                                    <div className="contact-form-wrapper _02">
                                        <div className="contact-form-wrap">
                                            <input className="contact-text-field w-input" maxLength="256"
                                                name="Phone" data-name="Phone" placeholder="Phone"
                                                type="tel" id="Phone" />
                                        </div>
                                        <div className="contact-form-wrap">
                                            <input className="contact-text-field w-input" maxLength="256"
                                                name="Email" data-name="Email" placeholder="Email"
                                                type="email" id="Email" />
                                        </div>
                                    </div>
                                    <div className="contact-form-wrapper _02">
                                        <div className="contact-form-wrap">
                                            <textarea placeholder="Message" maxLength="5000" id="Message"
                                                name="Message" data-name="Message"
                                                className="contact-text-field message w-input" />
                                        </div>
                                    </div>
                                    <input type="submit" data-wait="Please wait..."
                                        className="submit-button w-button" value="Send Message" />
                                </form>
                                <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3 — Footer CTA (footer-content-wrapper) */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="footer-content-wrapper">
                        <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ac7"
                            className="footer-left-col-wrapper">
                            <h2>Get started today</h2>
                            <p className="footer-description">
                                We provide comprehensive financial solutions to help you achieve your goals. From gets Personalized.
                            </p>
                            <a href="/contact" data-w-id="022059ed-85d5-c9d6-db4d-384787a8a2c7"
                                aria-current="page"
                                className="primary-button-wrapper white w-inline-block w--current">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Get Started</div>
                                    <div className="primary-button-text">Get Started</div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp-white.svg" alt="" className="primary-button-icon" />
                            </a>
                        </div>
                        <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ad3"
                            className="footer-left-col-wrapper _02">
                            <h2>Get started today</h2>
                            <p className="footer-description">
                                We provide comprehensive financial solutions to help you achieve your goals. From gets Personalized.
                            </p>
                            <a href="/contact" data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ad8"
                                className="primary-button-wrapper w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Book a Demo</div>
                                    <div className="primary-button-text">Book a Demo</div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
