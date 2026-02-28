import { useEffect } from 'react'
import Hero from '../components/sections/Hero'
import FeaturesSection from '../components/sections/FeaturesSection'
import FAQSection from '../components/sections/FAQSection'

export default function Features() {
    useEffect(() => { document.title = 'Features – Finexo' }, [])
    return (
        <>
            <Hero variant="page" title="Empower your with a financial journey"
                subtitle="We provide comprehensive financial solutions to help you achieve your goals." />
            <FeaturesSection />
            <FAQSection />
        </>
    )
}
