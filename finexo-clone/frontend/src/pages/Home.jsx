import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import FeaturesSection from '../components/sections/FeaturesSection'
import BlogSection from '../components/sections/BlogSection'
import FAQSection from '../components/sections/FAQSection'

export default function Home() {
    useEffect(() => { document.title = 'Finexo Webflow Ecommerce Website Template' }, [])
    return (
        <>
            <Hero variant="home" />
            <FeaturesSection />
            <BlogSection />
            <FAQSection />
        </>
    )
}
