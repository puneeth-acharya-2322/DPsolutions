import { useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
    useEffect(() => { document.title = '404 – Finexo' }, [])
    return (
        <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <div className="container">
                <div style={{ fontSize: '8rem', fontWeight: 900, color: '#2563eb', lineHeight: 1, marginBottom: '24px' }}>404</div>
                <h1 className="section-top-title">Page not found</h1>
                <div className="section-subtitle" style={{ marginBottom: '40px' }}>The page you're looking for doesn't exist or has been moved.</div>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/" className="primary-button-wrapper secondary w-inline-block">
                        <div className="primary-button-wrap">
                            <div className="primary-button-text">Back to Home</div>
                            <div className="primary-button-text">Back to Home</div>
                        </div>
                        <img loading="lazy" src="https://cdn.prod.website-files.com/67a1a4168a205f6b25b1e460/67b047b1d4f8d7e3d733d99c_ArrowUp.svg" alt="" className="primary-button-icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}
