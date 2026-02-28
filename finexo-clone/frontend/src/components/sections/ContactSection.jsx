import { useState, useRef, useEffect } from 'react'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { submitContact } from '../../services/api'

export default function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
    const [errors, setErrors] = useState({})
    const [status, setStatus] = useState('idle')
    const [msg, setMsg] = useState('')
    const ref = useRef(null)

    useEffect(() => {
        const obs = new IntersectionObserver(
            es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 }
        )
        ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
        return () => obs.disconnect()
    }, [])

    const validate = () => {
        const e = {}
        if (!form.name.trim() || form.name.trim().length < 2) e.name = 'Name must be at least 2 characters.'
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.'
        if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
        setErrors(e); return Object.keys(e).length === 0
    }
    const handleChange = e => {
        setForm(p => ({ ...p, [e.target.name]: e.target.value }))
        if (errors[e.target.name]) setErrors(p => ({ ...p, [e.target.name]: undefined }))
    }
    const handleSubmit = async e => {
        e.preventDefault(); if (!validate()) return
        setStatus('loading')
        try {
            const res = await submitContact(form)
            setStatus('success'); setMsg(res.data.message)
            setForm({ name: '', email: '', subject: '', message: '' })
        } catch (err) { setStatus('error'); setMsg(err.message || 'Something went wrong.') }
    }

    return (
        <section ref={ref} className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Info */}
                    <div className="reveal">
                        <SectionTitle badge="Contact" title={'Let\'s <span class="gradient-text">Connect</span>'}
                            subtitle="Have a question or want to see a demo? We'd love to hear from you." align="left" />
                        <div className="mt-10 space-y-6">
                            {[
                                { icon: '📧', label: 'Email', value: 'hello@finexo.app' },
                                { icon: '📞', label: 'Phone', value: '+1 (555) 000-0000' },
                                { icon: '📍', label: 'Office', value: '123 Finance Street, San Francisco, CA 94105' },
                            ].map(c => (
                                <div key={c.label} className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary-50 border border-primary-100 flex items-center justify-center text-lg flex-shrink-0">{c.icon}</div>
                                    <div>
                                        <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-0.5">{c.label}</p>
                                        <p className="text-neutral-700 text-sm font-medium">{c.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Form */}
                    <div className="reveal delay-200">
                        <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-card">
                            {status === 'success' ? (
                                <div className="text-center py-10">
                                    <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                                    </div>
                                    <h3 className="text-neutral-900 text-xl font-bold mb-2">Message Sent!</h3>
                                    <p className="text-neutral-500 mb-6 text-sm">{msg}</p>
                                    <Button onClick={() => setStatus('idle')} variant="secondary">Send another</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                    <h3 className="text-neutral-900 text-xl font-bold mb-5">Send us a message</h3>
                                    {[
                                        { id: 'name', label: 'Full Name', type: 'text', ph: 'John Doe' },
                                        { id: 'email', label: 'Email Address', type: 'email', ph: 'john@example.com' },
                                        { id: 'subject', label: 'Subject (optional)', type: 'text', ph: 'How can we help?' },
                                    ].map(f => (
                                        <div key={f.id}>
                                            <label htmlFor={f.id} className="block text-sm font-medium text-neutral-600 mb-1.5">{f.label}</label>
                                            <input id={f.id} name={f.id} type={f.type} value={form[f.id]} onChange={handleChange} placeholder={f.ph}
                                                className={`w-full border rounded-xl px-4 py-3 text-neutral-800 text-sm placeholder:text-neutral-300 focus:outline-none focus:ring-2 transition-all ${errors[f.id] ? 'border-red-400 focus:border-red-400 focus:ring-red-100' : 'border-neutral-200 focus:border-primary-400 focus:ring-primary-100'}`} />
                                            {errors[f.id] && <p className="mt-1 text-xs text-red-500">{errors[f.id]}</p>}
                                        </div>
                                    ))}
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-neutral-600 mb-1.5">Message</label>
                                        <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Tell us about your needs..."
                                            className={`w-full border rounded-xl px-4 py-3 text-neutral-800 text-sm placeholder:text-neutral-300 resize-none focus:outline-none focus:ring-2 transition-all ${errors.message ? 'border-red-400 focus:ring-red-100' : 'border-neutral-200 focus:border-primary-400 focus:ring-primary-100'}`} />
                                        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
                                    </div>
                                    {status === 'error' && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{msg}</p>}
                                    <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === 'loading'}>
                                        {status === 'loading' ? 'Sending…' : 'Send Message'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
