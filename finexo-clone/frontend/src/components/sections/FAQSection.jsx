/* ─────────────────────────────────────────────────────────
   FAQSection — React-controlled accordion
   Replaces Webflow w-tabs with useState for reliable expand/collapse
   ────────────────────────────────────────────────────────*/
import { useState } from 'react'

const faqData = [
    {
        question: "What is Dashapatmaja Solutions' core philosophy?",
        answers: [
            'Our philosophy is "Strategy First. Execution Focused." We don\'t operate in silos — instead, we integrate strategy, branding, commerce, and sales into a cohesive growth engine for your business.',
            'Every engagement begins with a clear understanding of your business model, margins, customer segments, and growth targets before any execution begins.'
        ]
    },
    {
        question: "How do you tailor strategies for different businesses?",
        answers: [
            'Every engagement starts with a deep dive into your specific business model, margins, and customer segments. We analyze your growth targets to ensure every strategic move is data-driven and margin-aware.',
            "Whether you're a startup looking to establish a brand or an established company optimizing sales, our approach adapts to your unique business context."
        ]
    },
    {
        question: "What does your integrated approach look like in practice?",
        answers: [
            'Strategy informs branding — your brand identity is built on your business strategy. Branding supports commerce — your commerce platforms are designed to reflect that brand for a seamless customer journey.',
            'Commerce feeds sales — structured sales systems convert brand interest into revenue. And sales validate strategy — real performance data confirms or refines the initial strategy.'
        ]
    },
    {
        question: "How do you measure success and impact?",
        answers: [
            'We track KPIs across brand reach, commerce GMV, sales pipeline value, and ROI. Real-time dashboards give you clear visibility into how every domain is performing.',
            'We use performance data to optimize in real time and iterate for continuous growth — ensuring measurable outcomes, not just deliverables.'
        ]
    },
    {
        question: "How can I get started with Dashapatmaja Solutions?",
        answers: [
            "Start by scheduling a Strategy Call through our website. In this discovery session, we'll discuss your business challenges, growth ambitions, and how our integrated approach can help.",
            'From there, we create a tailored roadmap covering brand positioning, commerce ecosystem setup, and sales pipeline development — aligned to your specific goals.'
        ]
    }
]

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0)

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }

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
                        <div className="faq-tab-menu" style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className={`faq-content${openIndex === index ? ' faq-active' : ''}`}
                                    onClick={() => handleToggle(index)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <div className="faq-top-wrapper">
                                        <h4>{faq.question}</h4>
                                        <div className="faq-icon-wrapper">
                                            <div className="faq-minuss-icon"></div>
                                            <div className="faq-pluss-icon"
                                                style={{
                                                    transform: openIndex === index ? 'rotate(90deg)' : 'rotate(0deg)',
                                                    opacity: openIndex === index ? 0 : 1,
                                                    transition: 'transform 0.3s ease, opacity 0.3s ease'
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="faq-ans"
                                        style={{
                                            maxHeight: openIndex === index ? '500px' : '0px',
                                            overflow: 'hidden',
                                            transition: 'max-height 0.4s ease',
                                            opacity: openIndex === index ? 1 : 0
                                        }}
                                    >
                                        <ul role="list" className="list">
                                            {faq.answers.map((answer, i) => (
                                                <li key={i}>{answer}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
