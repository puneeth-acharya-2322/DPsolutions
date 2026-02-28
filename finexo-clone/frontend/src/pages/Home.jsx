import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import FeaturesSection from '../components/sections/FeaturesSection'
import BlogSection from '../components/sections/BlogSection'
import FAQSection from '../components/sections/FAQSection'

/* ─────────────────────────────────────────────────────────
   Home — Exact DOM replica from finexo-template.webflow.io
   Source: home.html — 7 sections:
   1: section.section.hero → <Hero />
   2: section.section.features → FeaturesSection() (control cards)
   3: section.section → FeaturesSection() tabs (feature-tab w-tabs)
   4: section.section → FeaturesSection() How it works (works-content-wrapper)
   5: section.section.blog → <BlogSection />
   6: section.section → <FAQSection />
   7: section.section → footer-content-wrapper (rendered by Footer in Router)
   
   NOTE: All sections 2-4 are rendered by <FeaturesSection /> — do NOT
   duplicate the works-content-wrapper here as FeaturesSection already
   includes all three sections.
   ────────────────────────────────────────────────────────*/
export default function Home() {
    useEffect(() => { document.title = 'Finexo Webflow Ecommerce Website Template' }, [])
    return (
        <>
            <Hero />
            <FeaturesSection />
            <BlogSection />
            <FAQSection />
        </>
    )
}
