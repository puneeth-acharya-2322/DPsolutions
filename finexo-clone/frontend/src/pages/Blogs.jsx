import { Link } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Blogs Page — Pixel-perfect DOM replica
   Source: C:\Temp\finexo\blogs.html (real Webflow HTML, Feb 2026)

   4 sections (positions: 28200, 30215, 35728, 45766):
   1. hero-top-wrapper                    (page hero)
   2. blog-content-wrapper blog-page      (featured + 2 side blog cards)
   3. article-content-wrapper             (6 article cards grid)
   4. footer-content-wrapper              (CTA two-col)

   IMPORTANT: every <a class="blog-link-wrapper"> and <a class="article-link-wrapper">
   contains a <p class="none-text"> hidden paragraph — this is required by Webflow CMS
   for the hover animation to work correctly (Webflow reads it but CSS hides it).
   ────────────────────────────────────────────────────────*/

const NONE_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.'

/* 6 article cards from real blogs.html section 3 */
const ARTICLES = [
    {
        href: '/article/smart-strategies-for-financial-freedom',
        img: 'Blog-Image-4.webp',
        cat: 'Finance', time: '8 min',
        title: 'Smart Strategies for Financial Freedom',
        desc: 'Discover key investment strategies that help grow your wealth and secure..',
    },
    {
        href: '/article/budgeting-101-take-control-of-your-finances',
        img: 'Blog-Image-5.webp',
        cat: 'Investing', time: '10 min',
        title: 'Budgeting 101 Take Control of Your Finances',
        desc: 'Master the art of budgeting to cut unnecessary expenses, save more...',
    },
    {
        href: '/article/the-future-of-digital-banking-what-you-need-to-know',
        img: 'Blog-Image-6.webp',
        cat: 'Budgeting', time: '12 min',
        title: 'The Future of Digital Banking What You Need to Know',
        desc: 'Explore how digital banking is transforming financial management, making transactions...',
    },
    {
        href: '/article/credit-score-secrets-boost-your-score-and-save-more',
        img: 'Blog-Image-7.webp',
        cat: 'Finance', time: '23 min',
        title: 'Credit Score Secrets Boost Your Score and Save More',
        desc: 'Learn how to improve your credit score to qualify for better loans, lower interest rates...',
    },
    {
        href: '/article/passive-income-strategies-earn-while-you-sleep',
        img: 'Blog-Image-8.webp',
        cat: 'Investing', time: '15 min',
        title: 'Passive Income Strategies Earn While You Sleep',
        desc: 'Discover how to build multiple income streams through smart investments...',
    },
    {
        href: '/article/cryptocurrency-hype-or-the-future-of-finance',
        img: 'Blog-Image-9.webp',
        cat: 'Finance', time: '19 min',
        title: 'Cryptocurrency Hype or the Future of Finance',
        desc: 'Understand the world of cryptocurrency, from Bitcoin to altcoins...',
    },
]

export default function Blogs() {
    return (
        <>
            {/* ── Section 1: Page hero ──────────────────────────────────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="hero-top-wrapper">
                        {/* data-w-id exactly from blogs.html at position 28200 */}
                        <div data-w-id="72aac671-aa57-7d90-e97d-97e1a4b6cbeb"
                            style={{ opacity: 0 }}
                            className="hero-top-text-wrapper">
                            <img src="/img/Coins.svg" loading="lazy" alt="" className="hero-top-icon" />
                            <div className="hero-top-subtitle">#1 <span className="hero-top-subtitle-span">FINANCE PLATFORM</span></div>
                        </div>
                        {/* h1 class: "section-top-hero-title features" — NOT just "section-top-hero-title" */}
                        <h1 data-w-id="72aac671-aa57-7d90-e97d-97e1a4b6cbf1"
                            style={{ opacity: 0 }}
                            className="section-top-hero-title features">
                            About best <span className="design-text">featured </span><span className="design-text">blogs</span> of company
                        </h1>
                        <p data-w-id="72aac671-aa57-7d90-e97d-97e1a4b6cbf9"
                            style={{ opacity: 0 }}
                            className="section-top-description">
                            We provide comprehensive financial solutions to help you achieve your goals. From Personalized.
                        </p>
                        <div data-w-id="72aac671-aa57-7d90-e97d-97e1a4b6cbfb"
                            style={{ opacity: 0 }}
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

            {/* ── Section 2: blog-content-wrapper blog-page ─────────────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="blog-content-wrapper blog-page">

                        {/* Left col — featured (large) blog */}
                        <div id="w-node-_72038d32-9417-ae59-747f-d1a2bcd4acca-e340b76e"
                            className="blog-left-col-wrapper">
                            <div className="w-dyn-list">
                                <div role="list" className="w-dyn-items">
                                    <div role="listitem" className="w-dyn-item">
                                        <a data-w-id="72038d32-9417-ae59-747f-d1a2bcd4acce"
                                            style={{ opacity: 0 }}
                                            href="/article/mastering-your-money-smart"
                                            className="blog-link-wrapper w-inline-block">
                                            <div className="blog-image-wrapper">
                                                <img src="/img/Blog-Image.webp" loading="lazy" alt=""
                                                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 726.625px, 939.15625px"
                                                    srcSet="/img/Blog-Image.webp 550w"
                                                    className="blog-main-image" />
                                            </div>
                                            <div className="blog-top-wrapper">
                                                <div className="blog-category-wrapper"><div>Finance</div></div>
                                                <div className="blog-dot-icon"></div>
                                                <div className="blog-reading-time">8 min</div>
                                            </div>
                                            <div className="blog-details-wrapper">
                                                {/* h2 (not h3) with inline color style — exact from real HTML */}
                                                <h2 style={{ color: 'rgb(19,39,77)' }} className="blog-title">
                                                    Mastering Your Money: Smart...
                                                </h2>
                                                <div className="blog-description">Discover key investment strategies that help grow your wealth and secure...</div>
                                            </div>
                                            {/* Required <p class="none-text"> for Webflow CMS hover animation */}
                                            <p className="none-text">{NONE_TEXT}</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right col — 2 side blog cards */}
                        <div className="blog-right-col-wrapper">
                            <div className="w-dyn-list">
                                <div role="list" className="blog-collection-list w-dyn-items">

                                    {/* Side blog 1 — data-w-id: ace0 (both cards share same ID) */}
                                    <div role="listitem" className="w-dyn-item">
                                        <a data-w-id="72038d32-9417-ae59-747f-d1a2bcd4ace0"
                                            style={{ opacity: 0 }}
                                            href="/article/debt-management-strategies"
                                            className="blog-link-wrapper _02 w-inline-block">
                                            {/* image-wrapper has the shared node id */}
                                            <div id="w-node-_72038d32-9417-ae59-747f-d1a2bcd4ace1-e340b76e"
                                                className="blog-image-wrapper">
                                                <img src="/img/Blog-Image-2.webp" loading="lazy" alt=""
                                                    className="blog-main-image" />
                                            </div>
                                            <div className="blog-left-col">
                                                <div className="blog-details-wrapper">
                                                    <h3 className="blog-title _02">Debt Management Strategies.</h3>
                                                    <div className="blog-description">Turn your free time into extra income profitable side...</div>
                                                </div>
                                                <div className="blog-top-wrapper">
                                                    <div className="blog-category-wrapper"><div>Investing</div></div>
                                                    <div className="blog-dot-icon"></div>
                                                    <div className="blog-reading-time">5 min</div>
                                                </div>
                                            </div>
                                            <p className="none-text">{NONE_TEXT}</p>
                                        </a>
                                    </div>

                                    {/* Side blog 2 — same data-w-id as blog 1 (exact from real HTML) */}
                                    <div role="listitem" className="w-dyn-item">
                                        <a data-w-id="72038d32-9417-ae59-747f-d1a2bcd4ace0"
                                            style={{ opacity: 0 }}
                                            href="/article/smart-ways-to-save-for-retirement"
                                            className="blog-link-wrapper _02 w-inline-block">
                                            <div id="w-node-_72038d32-9417-ae59-747f-d1a2bcd4ace1-e340b76e"
                                                className="blog-image-wrapper">
                                                <img src="/img/Blog-Image-3.webp" loading="lazy" alt=""
                                                    className="blog-main-image" />
                                            </div>
                                            <div className="blog-left-col">
                                                <div className="blog-details-wrapper">
                                                    <h3 className="blog-title _02">Smart Ways to Save for Retirement.</h3>
                                                    <div className="blog-description">Break down the complexities of the stock market...</div>
                                                </div>
                                                <div className="blog-top-wrapper">
                                                    <div className="blog-category-wrapper"><div>Budgeting</div></div>
                                                    <div className="blog-dot-icon"></div>
                                                    <div className="blog-reading-time">10 min</div>
                                                </div>
                                            </div>
                                            <p className="none-text">{NONE_TEXT}</p>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Section 3: article-content-wrapper (6 cards) ─────────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="section-top-wrapper">
                        <div className="section-top-subtitle-wrap">
                            <img src="/img/Feather.svg" loading="lazy" alt="" className="section-top-image" />
                            <div className="section-top-subtitle">BLOGS</div>
                        </div>
                        <h2 className="section-top-title blog">
                            More website <span className="design-text">blogs </span><span className="design-text">for</span> your finance
                        </h2>
                    </div>

                    <div className="article-content-wrapper">
                        <div className="w-dyn-list">
                            <div role="list" className="article-collection-list w-dyn-items">
                                {ARTICLES.map((art, idx) => (
                                    <div key={idx} role="listitem" className="w-dyn-item">
                                        {/* All 6 share the same data-w-id in the real Webflow CMS HTML */}
                                        <a data-w-id="13fdafaa-198b-4aa9-ac0f-68f8271e6185"
                                            style={{ opacity: 0 }}
                                            href={art.href}
                                            className="article-link-wrapper w-inline-block">
                                            <div className="article-image-wrapper">
                                                <img src={`/img/${art.img}`} loading="lazy" alt=""
                                                    className="blog-main-image" />
                                            </div>
                                            <div className="blog-top-wrapper article">
                                                <div className="blog-category-wrapper"><div>{art.cat}</div></div>
                                                <div className="blog-dot-icon"></div>
                                                <div className="blog-reading-time">{art.time}</div>
                                            </div>
                                            {/* Article title: <h3 style="color:rgb(19,39,77)" class="blog-title">
                          NOT wrapped in blog-details-wrapper — exact structure from real HTML */}
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

            {/* ── Section 4: footer-content-wrapper CTA ─────────────────────── */}
            <section className="section">
                <div className="w-layout-blockcontainer container w-container">
                    <div className="footer-content-wrapper">
                        <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ac7"
                            className="footer-left-col-wrapper">
                            <h2>Get started today</h2>
                            <p className="footer-description">
                                We provide comprehensive financial solutions to help you achieve your goals. From gets Personalized.
                            </p>
                            <Link to="/contact" data-w-id="022059ed-85d5-c9d6-db4d-384787a8a2c7"
                                className="primary-button-wrapper white w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Get Started</div>
                                    <div className="primary-button-text">Get Started</div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp-white.svg" alt="" className="primary-button-icon" />
                            </Link>
                        </div>
                        <div data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ad3"
                            className="footer-left-col-wrapper _02">
                            <h2>Get started today</h2>
                            <p className="footer-description">
                                We provide comprehensive financial solutions to help you achieve your goals. From gets Personalized.
                            </p>
                            <Link to="/contact" data-w-id="19cac388-8877-fdb5-ab95-2fa6ded75ad8"
                                className="primary-button-wrapper w-inline-block">
                                <div className="primary-button-wrap">
                                    <div className="primary-button-text">Book a Demo</div>
                                    <div className="primary-button-text">Book a Demo</div>
                                </div>
                                <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
