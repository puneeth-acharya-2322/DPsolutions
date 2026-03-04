import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * useScrollReveal — IntersectionObserver-based fade-in for all [data-w-id] elements.
 *
 * Webflow IX2 sets opacity: 0 on elements with data-w-id and animates them on scroll,
 * but this is unreliable in a React SPA. This hook provides a robust replacement:
 *
 * 1. On every route change, observe all [data-w-id] elements
 * 2. When an element enters the viewport (10% visible), add the .visible class
 * 3. Once revealed, the element stays visible (unobserved)
 * 4. Also strips any leftover IX2 inline opacity/transform styles
 */
export function useScrollReveal() {
    const location = useLocation()

    useEffect(() => {
        // Small delay to ensure React has rendered the DOM
        const timer = setTimeout(() => {
            const elements = document.querySelectorAll('[data-w-id]')

            // Strip any inline opacity/transform set by IX2 that might override our CSS
            elements.forEach(el => {
                if (el.style.opacity === '0') {
                    el.style.removeProperty('opacity')
                }
                if (el.style.transform) {
                    el.style.removeProperty('transform')
                }
            })

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('visible')
                            observer.unobserve(entry.target)
                        }
                    })
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -40px 0px'
                }
            )

            elements.forEach(el => {
                // If element is already in the viewport (above the fold), reveal immediately
                const rect = el.getBoundingClientRect()
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    el.classList.add('visible')
                } else {
                    observer.observe(el)
                }
            })

            return () => observer.disconnect()
        }, 100)

        return () => clearTimeout(timer)
    }, [location.pathname])
}
