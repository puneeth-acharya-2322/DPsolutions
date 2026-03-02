import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

/* ─────────────────────────────────────────────────────────
   Navbar — Exact DOM replica from finexo-template.webflow.io
   Source: home.html (real HTML extracted Feb 2026)
   
   HTML→JSX changes ONLY:
   • class → className
   • <a href="..."> → <Link to="..."> for internal, <a href> for external
   • Removed w--current (handled by isActive check)
   • Added state-driven open/close for mobile menu and dropdown
   All data-w-id, data-animation-type, data-*, aria-* preserved exactly
   ────────────────────────────────────────────────────────*/
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState(null)
    const location = useLocation()

    // Close menu and dropdown on navigation
    useEffect(() => {
        setMenuOpen(false)
        setActiveDropdown(null)
    }, [location.pathname])

    const isHome = location.pathname === '/'
    const isFeatures = location.pathname === '/features'
    const isBlogs = location.pathname === '/blogs'
    const isPricing = location.pathname === '/pricing'

    return (
        <div data-animation="default" data-collapse="medium" data-duration="400"
            data-easing="ease" data-easing2="ease" role="banner"
            className={`navbar w-nav${menuOpen ? ' w--opened' : ''}`}>
            <div className="w-layout-blockcontainer navbar-container w-container">
                <div className="navbar-wrapper">

                    {/* Logo */}
                    <div className="nav-first-item-wrap">
                        <Link to="/" aria-current={isHome ? 'page' : undefined}
                            className={`navbar-logo-wrapper w-nav-brand${isHome ? ' w--current' : ''}`}>
                            <img loading="lazy" src="/img/logo_dp.png" alt="" className="navbar-logo" style={{ maxHeight: '60px', width: 'auto' }} />
                        </Link>
                    </div>

                    {/* Nav menu */}
                    <nav role="navigation" className={`nav-menu v2 w-nav-menu${menuOpen ? ' w--open' : ''}`}>

                        {/* Home link */}
                        <Link to="/" aria-current={isHome ? 'page' : undefined}
                            className={`global-text-style w-inline-block${isHome ? ' w--current' : ''}`}>
                            <div className="link-wrap">
                                <div className="navbar-menu-title">Home</div>
                                <div className="navbar-menu-title">Home</div>
                            </div>
                        </Link>

                        {/* About us dropdown */}
                        <div data-delay="400" data-hover="false"
                            data-w-id="fde50651-1d3f-2cf0-7c13-1ca51d9561e2"
                            className={`dropdown w-dropdown${activeDropdown === 'about' ? ' w--open' : ''}`}
                            onMouseEnter={() => setActiveDropdown('about')}
                            onMouseLeave={() => setActiveDropdown(null)}>
                            <div className="dropdown-toggle w-dropdown-toggle"
                                onClick={() => setActiveDropdown(v => v === 'about' ? null : 'about')}>
                                <div className="dropdown-title-wrapper">
                                    <div className="dropdown-title-wrap">
                                        <div className="dropdown-title">About us</div>
                                        <div className="dropdown-title">About us</div>
                                    </div>
                                    <img loading="lazy" src="/img/CaretDown.svg" alt="" className="dropdown-arrow" />
                                </div>
                            </div>
                            <nav className={`dropdown-list w-dropdown-list${activeDropdown === 'about' ? ' w--open' : ''}`} style={{ minWidth: '250px', left: 0, right: 'auto' }}>
                                <div className="dropdown-pd v2" style={{ gridTemplateColumns: '1fr', padding: '20px', minWidth: '250px' }}>
                                    <div className="dropdown-list-wrap" style={{ marginLeft: 0 }}>
                                        <div className="dropdown-list-wrapper" style={{ paddingTop: 0 }}>
                                            <div className="dropdown-dual-wrap">
                                                <Link to="/about" className="dropdown-link-wrapper w-inline-block">
                                                    <div className="dropdown-link-wrap">
                                                        <div className="dropdown-item-title">Our Values</div>
                                                        <div className="dropdown-item-title">Our Vision</div>
                                                        <div className="dropdown-item-title">Our Mission</div>
                                                        <div className="dropdown-item-title">Our Leadership Team</div>
                                                        <div className="dropdown-item-title">Our Accomplishments</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        {/* Our Founders dropdown */}
                        <div data-delay="400" data-hover="false"
                            data-w-id="fde50651-1d3f-2cf0-7c13-1ca51d9561e2"
                            className={`dropdown w-dropdown${activeDropdown === 'founders' ? ' w--open' : ''}`}
                            onMouseEnter={() => setActiveDropdown('founders')}
                            onMouseLeave={() => setActiveDropdown(null)}>
                            <div className="dropdown-toggle w-dropdown-toggle"
                                onClick={() => setActiveDropdown(v => v === 'founders' ? null : 'founders')}>
                                <div className="dropdown-title-wrapper">
                                    <div className="dropdown-title-wrap">
                                        <div className="dropdown-title">Our Founders</div>
                                        <div className="dropdown-title">Our Founders</div>
                                    </div>
                                    <img loading="lazy" src="/img/CaretDown.svg" alt="" className="dropdown-arrow" />
                                </div>
                            </div>
                            <nav className={`dropdown-list w-dropdown-list${activeDropdown === 'founders' ? ' w--open' : ''}`} style={{ minWidth: '250px', left: 0, right: 'auto' }}>
                                <div className="dropdown-pd v2" style={{ gridTemplateColumns: '1fr', padding: '20px', minWidth: '250px' }}>
                                    <div className="dropdown-list-wrap" style={{ marginLeft: 0 }}>
                                        <div className="dropdown-list-wrapper" style={{ paddingTop: 0 }}>
                                            <div className="dropdown-dual-wrap">
                                                <Link to="/founders" className="dropdown-link-wrapper w-inline-block">
                                                    <div className="dropdown-link-wrap">
                                                        <div className="dropdown-item-title">Our leadership team</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>

                        {/* Our Brands dropdown */}
                        <div data-delay="400" data-hover="false"
                            data-w-id="fde50651-1d3f-2cf0-7c13-1ca51d9561e2"
                            className={`dropdown w-dropdown${activeDropdown === 'brands' ? ' w--open' : ''}`}
                            onMouseEnter={() => setActiveDropdown('brands')}
                            onMouseLeave={() => setActiveDropdown(null)}>
                            <div className="dropdown-toggle w-dropdown-toggle"
                                onClick={() => setActiveDropdown(v => v === 'brands' ? null : 'brands')}>
                                <div className="dropdown-title-wrapper">
                                    <div className="dropdown-title-wrap">
                                        <div className="dropdown-title">Our Brands</div>
                                        <div className="dropdown-title">Our Brands</div>
                                    </div>
                                    <img loading="lazy" src="/img/CaretDown.svg" alt="" className="dropdown-arrow" />
                                </div>
                            </div>
                            <nav className={`dropdown-list w-dropdown-list${activeDropdown === 'brands' ? ' w--open' : ''}`} style={{ minWidth: '250px', left: 0, right: 'auto' }}>
                                <div className="dropdown-pd v2" style={{ gridTemplateColumns: '1fr', padding: '20px', minWidth: '250px' }}>
                                    <div className="dropdown-list-wrap" style={{ marginLeft: 0 }}>
                                        <div className="dropdown-list-wrapper" style={{ paddingTop: 0 }}>
                                            <div className="dropdown-dual-wrap">
                                                <Link to="/brands/raw-radicles" className="dropdown-link-wrapper w-inline-block">
                                                    <div className="dropdown-link-wrap">
                                                        <div className="dropdown-item-title">Raw radicles</div>
                                                    </div>
                                                </Link>
                                                <Link to="/brands/genalpha" className="dropdown-link-wrapper w-inline-block">
                                                    <div className="dropdown-link-wrap">
                                                        <div className="dropdown-item-title">Genalpha</div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        {/* Pages dropdown */}
                        {/* <div data-delay="400" data-hover="false"
                            data-w-id="fde50651-1d3f-2cf0-7c13-1ca51d9561e2"
                            className={`dropdown w-dropdown${activeDropdown === 'pages' ? ' w--open' : ''}`}
                            onMouseEnter={() => setActiveDropdown('pages')}
                            onMouseLeave={() => setActiveDropdown(null)}>
                            <div className="dropdown-toggle w-dropdown-toggle"
                                onClick={() => setActiveDropdown(v => v === 'pages' ? null : 'pages')}>
                                <div className="dropdown-title-wrapper">
                                    <div className="dropdown-title-wrap">
                                        <div className="dropdown-title">Pages</div>
                                        <div className="dropdown-title">Pages</div>
                                    </div>
                                    <img loading="lazy" src="/img/CaretDown.svg" alt="" className="dropdown-arrow" />
                                </div>
                            </div>
                            <nav className={`dropdown-list w-dropdown-list${activeDropdown === 'pages' ? ' w--open' : ''}`}>
                                <div className="dropdown-pd v2">
                                     Main Pages 
                                    <div className="navbar-line-wrapper">
                                        <div className="dropdown-list-wrap">
                                            <div className="navbar-title">Main Pages</div>
                                            <div className="dropdown-list-wrapper">
                                                <div className="dropdown-dual-wrap">
                                                    <Link to="/" aria-current={isHome ? 'page' : undefined}
                                                        className={`dropdown-link-wrapper w-inline-block${isHome ? ' w--current' : ''}`}>
                                                        <div className="dropdown-link-wrap">
                                                            <div className="dropdown-item-title">Home</div>
                                                        </div>
                                                    </Link>
                                                    <Link to="/features"
                                                        className={`dropdown-link-wrapper w-inline-block${isFeatures ? ' w--current' : ''}`}>
                                                        <div className="dropdown-link-wrap">
                                                            <div className="dropdown-item-title">Features</div>
                                                        </div>
                                                    </Link>
                                                    <Link to="/blogs"
                                                        className={`dropdown-link-wrapper w-inline-block${isBlogs ? ' w--current' : ''}`}>
                                                        <div className="dropdown-link-wrap">
                                                            <div className="dropdown-item-title">Blogs</div>
                                                        </div>
                                                    </Link>
                                                    <Link to="/pricing"
                                                        className={`dropdown-link-wrapper w-inline-block${isPricing ? ' w--current' : ''}`}>
                                                        <div className="dropdown-link-wrap">
                                                            <div className="dropdown-item-title">Pricing<br /></div>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    Inner Pages
                                    <div id="w-node-fde50651-1d3f-2cf0-7c13-1ca51d956204-1d9561d5" className="navbar-line-wrapper">
                                        <div className="navbar-list-items">
                                            <div className="navbar-title">Inner Pages</div>
                                            <div className="dropdown-list-wrapper _02">
                                                <a href="https://financeo-template.webflow.io/product/basic-plan"
                                                    className="dropdown-link-wrapper w-inline-block">
                                                    <div className="dropdown-link-wrap">
                                                        <div className="dropdown-item-title">Pricing Single</div>
                                                    </div>
                                                </a>
                                                <a href="https://financeo-template.webflow.io/article/mastering-your-money-smart"
                                                    className="dropdown-link-wrapper w-inline-block">
                                                    <div className="dropdown-link-wrap">
                                                        <div className="dropdown-item-title">Blog Single<br /></div>
                                                    </div>
                                                </a>
                                                <Link to="/contact"
                                                    className="dropdown-link-wrapper w-inline-block">
                                                    <div className="dropdown-link-wrap">
                                                        <div className="dropdown-item-title">Contact<br /></div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div> */}

                        {/* Pricing link */}
                        <Link to="/pricing"
                            className={`global-text-style w-inline-block${isPricing ? ' w--current' : ''}`}>
                            <div className="link-wrap">
                                <div className="navbar-menu-title">Pricing</div>
                                <div className="navbar-menu-title">Pricing</div>
                            </div>
                        </Link>

                        {/* Blog link */}
                        <Link to="/blogs"
                            className={`global-text-style w-inline-block${isBlogs ? ' w--current' : ''}`}>
                            <div className="link-wrap">
                                <div className="navbar-menu-title">Blog</div>
                                <div className="navbar-menu-title">Blog</div>
                            </div>
                        </Link>

                    </nav>

                    {/* CTA + Hamburger */}
                    <div className="nav-card-wrapper">
                        <div className={`menu-button w-nav-button${menuOpen ? ' w--open' : ''}`}
                            onClick={() => setMenuOpen(v => !v)}>
                            <div className="menu-icon"
                                data-is-ix2-target="1"
                                data-w-id="fde50651-1d3f-2cf0-7c13-1ca51d956277"
                                data-animation-type="lottie"
                                data-src="/lottie/menu-bars.json"
                                data-loop="0" data-direction="1" data-autoplay="0"
                                data-renderer="svg" data-default-duration="0"
                                data-duration="0.9666666666666667" data-ix2-initial-state="0">
                            </div>
                        </div>
                        <Link to="/contact"
                            data-w-id="fde50651-1d3f-2cf0-7c13-1ca51d956278"
                            className="primary-button-wrapper navbar w-inline-block">
                            <div className="primary-button-wrap">
                                <div className="primary-button-text">Get a Demo</div>
                                <div className="primary-button-text">Get a Demo</div>
                            </div>
                            <img loading="lazy" src="/img/ArrowUp.svg" alt="" className="primary-button-icon" />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}
