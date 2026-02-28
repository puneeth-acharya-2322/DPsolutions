import { useRef, useEffect } from 'react'
import SectionTitle from '../ui/SectionTitle'

const testimonials = [
    { name: 'Sarah Johnson', role: 'CFO, TechStart Inc.', avatar: 'SJ', bg: 'bg-primary-100  text-primary-700', rating: 5, text: 'Finexo completely transformed how we manage our company finances. The dashboard is intuitive and the integrations saved us countless hours every week.' },
    { name: 'Michael Chen', role: 'Founder, GrowthLab', avatar: 'MC', bg: 'bg-purple-100  text-purple-700', rating: 5, text: 'The real-time analytics and AI-powered insights helped us reduce unnecessary spending by 30%. It\'s like having a financial advisor on call 24/7.' },
    { name: 'Emily Rodriguez', role: 'Personal Finance Blogger', avatar: 'ER', bg: 'bg-green-100 text-green-700', rating: 5, text: "I've tried dozens of finance apps and Finexo is by far the most comprehensive. The retirement planning tools alone are worth the subscription price." },
]

export default function TestimonialSection() {
    const ref = useRef(null)
    useEffect(() => {
        const obs = new IntersectionObserver(
            es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 }
        )
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    return (
        <section ref={ref} className="py-24 bg-neutral-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="reveal">
                    <SectionTitle badge="Testimonials" title='What our <span class="gradient-text">clients say</span>'
                        subtitle="Join thousands who trust Finexo with their financial journey." />
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-14">
                    {testimonials.map((t, i) => (
                        <div key={t.name} className={`card p-6 reveal delay-${(i + 1) * 100}`}>
                            <div className="flex gap-1 mb-4">
                                {[...Array(t.rating)].map((_, j) => (
                                    <svg key={j} width="15" height="15" viewBox="0 0 24 24" fill="#f59e0b"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                                ))}
                            </div>
                            <p className="text-neutral-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className={`w-10 h-10 rounded-xl ${t.bg} flex items-center justify-center text-sm font-bold`}>{t.avatar}</div>
                                <div>
                                    <p className="text-neutral-800 font-semibold text-sm">{t.name}</p>
                                    <p className="text-neutral-400 text-xs">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
