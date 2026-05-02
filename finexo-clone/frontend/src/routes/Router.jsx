import { Routes, Route } from 'react-router-dom'
import { useWebflowInit } from '../hooks/useWebflowInit'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Home from '../pages/Home'
import Features from '../pages/Features'
import Blogs from '../pages/Blogs'
import Pricing from '../pages/Pricing'
import Contact from '../pages/Contact'
import About from '../pages/About'
import OurValues from '../pages/OurValues'
import OurVision from '../pages/OurVision'
import OurMission from '../pages/OurMission'
import OurLeadership from '../pages/OurLeadership'
import NotFound from '../pages/NotFound'

export default function AppRouter() {
    // Re-initializes Webflow IX2 animations on every route change
    useWebflowInit()

    return (
        // Exact Webflow wrapper structure — matches original HTML: <div class="page-wrapper">
        <div className="page-wrapper">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/features" element={<Features />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/our-values" element={<OurValues />} />
                <Route path="/our-vision" element={<OurVision />} />
                <Route path="/our-mission" element={<OurMission />} />
                <Route path="/our-leadership" element={<OurLeadership />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    )
}

