import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Our Leadership Page 
   ────────────────────────────────────────────────────────*/

const NONE_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'

/* 6 article cards from real blogs.html section 3 */
const ARTICLES = [
    {
        href: '/article/smart-strategies-for-financial-freedom',
        img: '../img/manu.jpg',
        cat: 'Chairman & Director',
        title: 'Dr. Manu Sudhi',
        desc: 'Discover key investment strategies that help grow your wealth and secure..',
    },
    {
        href: '/article/budgeting-101-take-control-of-your-finances',
        img: '../img/sree.jpeg',
        cat: 'Managing Director',
        title: 'Mr. Shreepathy Ranga Bhatta',
        desc: 'Master the art of budgeting to cut unnecessary expenses, save more...',
    },
    {
        href: '/article/the-future-of-digital-banking-what-you-need-to-know',
        img: '../img/dr.png',
        cat: 'Mentor',
        title: 'Dr. Dasharathraj K Shetty',
        desc: 'Explore how digital banking is transforming financial management, making transactions...',
    },
    {
        href: '/article/credit-score-secrets-boost-your-score-and-save-more',
        img: '../img/vice_chairman.jpg',
        cat: 'Mentor',
        title: 'Dr. Balakrishna S. Maddodi',
        desc: 'Learn how to improve your credit score to qualify for better loans, lower interest rates...',
    },
    {
        href: '/article/passive-income-strategies-earn-while-you-sleep',
        img: '../img/Anusha.png',
        cat: 'Director',
        title: 'Ms. Anusha Pai',
        desc: 'Discover how to build multiple income streams through smart investments...',
    },
    {
        href: '/article/cryptocurrency-hype-or-the-future-of-finance',
        img: '../img/ceo.png',
        cat: 'Director',
        title: 'Mr. Namesh Malarout',
        desc: 'Understand the world of cryptocurrency, from Bitcoin to altcoins...',
    },
]

export default function OurLeadership() {
    return (
        <>
            {/* ── Section 1: Page hero ──────────────────────────────────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="hero-top-wrapper">
                        {/* data-w-id exactly from blogs.html at position 28200 */}
                        <div data-w-id="72aac671-aa57-7d90-e97d-97e1a4b6cbeb"
                            className="hero-top-text-wrapper">
                            <img src="/img/Coins.svg" loading="lazy" alt="" className="hero-top-icon" />
                            <div className="hero-top-subtitle">#1 <span className="hero-top-subtitle-span">Dashapatmaja Solutions</span></div>
                        </div>
                        {/* h1 class: "section-top-hero-title features" — NOT just "section-top-hero-title" */}
                        <h1 data-w-id="72aac671-aa57-7d90-e97d-97e1a4b6cbf1"
                            className="section-top-hero-title features">
                            Meet Our <span className="design-text">Leadership </span>Team
                        </h1>
                        <p data-w-id="72aac671-aa57-7d90-e97d-97e1a4b6cbf9"
                            className="section-top-description">
                            Dashapatmaja Solutions is led by professionals with experience across branding, commerce operations, business development, and strategic management.
                        </p>
                        <div data-w-id="72aac671-aa57-7d90-e97d-97e1a4b6cbfb"
                            className="hero-button-wrapper">
                            <a href="/contact" data-w-id="d6e99a6b-32b8-7752-4992-8db9e68f321f"
                                className="primary-button-wrapper secondary w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Contact Us </div>
                                    <div className="primary-button-text">Contact Us </div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                            </a>
                            <a data-w-id="717a1373-40c1-701e-7ec9-e70365b0649a" href="/contact"
                                className="download-button-wrapper w-inline-block">
                                <div className="download-button-text">Explore Brands</div>
                                <div className="download-button-icon-wrapper">
                                    <img src="/img/DownloadSimple.svg" loading="lazy" alt="" className="download-button-icon" />
                                    <img src="/img/DownloadSimple-White.svg" loading="lazy" alt="" className="download-button-white-icon" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 2: Hidden elements for Webflow IX2 ────────────────── 
                CRITICAL FIX: Webflow interactions config expects these IDs on load. 
                If they are missing from the DOM, the ix2 engine crashes and hover/entrance 
                effects for the rest of the page (like Section 3) will fail to attach! */}
            <div style={{ display: 'none' }} aria-hidden="true">
                <div data-w-id="72038d32-9417-ae59-747f-d1a2bcd4acce" />
                <div data-w-id="72038d32-9417-ae59-747f-d1a2bcd4ace0" />
                <div data-w-id="13fdafaa-198b-4aa9-ac0f-68f8271e6185" />
                {/* These IDs belong to the section-top-wrapper we commented out */}
                <div data-w-id="some-id" className="section-top-wrapper" />
            </div>

            {/* ── Section 3: article-content-wrapper (6 cards) ─────────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="article-content-wrapper">
                        <div className="w-dyn-list">
                            <div role="list" className="article-collection-list w-dyn-items">
                                {ARTICLES.map((art, idx) => (
                                    <div key={idx} role="listitem" className="w-dyn-item">
                                        {/* All 6 share the same data-w-id in the real Webflow CMS HTML */}
                                        <a data-w-id="13fdafaa-198b-4aa9-ac0f-68f8271e6185"
                                            href={art.href}
                                            className="article-link-wrapper w-inline-block">
                                            <div className="article-image-wrapper" style={{ aspectRatio: '1 / 1', width: '100%', overflow: 'hidden', borderRadius: '12px', display: 'block', backgroundColor: '#f9f9f9' }}>
                                                <img src={`/img/${art.img}`} loading="lazy" alt=""
                                                    className="blog-main-image" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                                            </div>
                                            <div className="blog-top-wrapper article">
                                                <div className="blog-category-wrapper"><div>{art.cat}</div></div>
                                                <div className="blog-dot-icon"></div>
                                                <div className="blog-reading-time">{art.time}</div>
                                            </div>
                                            <h3 style={{ color: 'rgb(19,39,77)' }} className="blog-title">{art.title}</h3>
                                            <div className="blog-description">{art.desc}</div>
                                            {/* Required none-text paragraph inside every article card */}
                                            <p className="none-text">{NONE_TEXT}</p>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
