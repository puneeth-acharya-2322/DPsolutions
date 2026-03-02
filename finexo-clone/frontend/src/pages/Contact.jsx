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

            {/* Section 3 — Address & Map */}
            <section className="section" style={{ paddingTop: '20px' }}>
                <div className="w-layout-blockcontainer container w-container">
                    <div style={{ textAlign: "center", marginBottom: "40px" }}>
                        <h3 style={{ color: "#F0B90B", fontSize: "20px", fontWeight: "700", marginBottom: "10px" }}>Main Branch</h3>
                        <h2 className="contact-title" style={{ fontSize: "40px", marginBottom: "0", textAlign: "center" }}>Reach Out to Us</h2>
                    </div>
                    <div className="footer-content-wrapper" style={{ alignItems: "stretch", backgroundColor: "transparent", padding: "0" }}>
                        <div className="footer-left-col-wrapper" style={{ paddingRight: "40px", backgroundColor: "transparent", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                            <div className="contact-description" style={{ marginBottom: "24px" }}>
                                Let us help you scale better.
                            </div>

                            <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#0B1120", marginBottom: "10px" }}>Address:</h4>
                            <div className="contact-description" style={{ marginBottom: "24px", whiteSpace: "pre-line" }}>
                                Room No. 12, 4th Floor, MUTBI,
                                Advanced Research Center,
                                Madhava Nagar, Manipal 576104
                            </div>

                            <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#0B1120", marginBottom: "10px" }}>Phone:</h4>
                            <div className="contact-description" style={{ marginBottom: "24px", whiteSpace: "pre-line" }}>
                                +91 88619 42440
                                +91 90725 56665
                            </div>

                            <h4 style={{ fontSize: "20px", fontWeight: "700", color: "#0B1120", marginBottom: "10px" }}>Email:</h4>
                            <div className="contact-description" style={{ marginBottom: "0" }}>
                                <a href="mailto:director@dashapatmaja.in" style={{ color: "#2563EB", textDecoration: "underline" }}>
                                    director@dashapatmaja.in
                                </a>
                            </div>
                        </div>
                        <div className="footer-left-col-wrapper _02" style={{ padding: "0", backgroundColor: "transparent", display: "flex", width: "100%", height: "100%" }}>
                            <iframe
                                src="https://maps.google.com/maps?q=Manipal%20Government%20of%20Karnataka%20Bioincubator&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.1)", minHeight: "450px", display: "block", objectFit: "cover" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
