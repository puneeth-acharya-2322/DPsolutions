import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Per-page Webflow IX2 animation IDs extracted from the real Webflow HTML.
 *
 * Webflow's IX2 engine uses data-wf-page on <html> to look up which animation
 * configurations belong to the current page. In a normal Webflow multi-page site
 * each HTML file has a unique data-wf-page. In our React SPA we must swap this
 * value before calling Webflow.ready() so the correct fade-in and scroll
 * animations fire on every page.
 *
 * Source: extracted from C:\Temp\finexo\*.html (real Webflow HTML, Feb 2026)
 */
const PAGE_WF_IDS = {
  '/': '67a1a4168a205f6b25b1e467',  // home.html
  '/features': '67a46b73c25233f4f704b8da',  // features.html
  '/pricing': '67a46b8232a0e9affc256906',  // pricing.html
  '/contact': '67a46b8ae115f8b6dae8d466',  // contact.html
  '/about': '67a46b6c06f931cc32b4c1a6',  // about.html
  '/blogs': '67a46b7ae0ff8cb7e340b76e',  // blogs.html
  '/our-leadership': '67a46b7ae0ff8cb7e340b76e',  // uses blogs.html animations
}

const SITE_ID = '67a1a4168a205f6b25b1e460' // same for every page

export function useWebflowInit() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // ── STEP 1: Set attributes IMMEDIATELY (synchronous) ────────────────────────
    const pageId = PAGE_WF_IDS[location.pathname] || PAGE_WF_IDS['/']
    const html = document.documentElement
    html.setAttribute('data-wf-page', pageId)
    html.setAttribute('data-wf-site', SITE_ID)

    // ── STEP 2: Scroll to top IMMEDIATELY ───────────────────────────────────────
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    // ── STEP 3: Clear any IX2-set inline styles on data-w-id elements ───────────
    // IX2 sets inline opacity/transform on elements. On a page transition,
    // stale inline styles can prevent the new page's animations from replaying.
    document.querySelectorAll('[data-w-id]').forEach(el => {
      el.style.removeProperty('opacity')
      el.style.removeProperty('transform')
      el.style.removeProperty('will-change')
      el.style.removeProperty('transition')
    })

    // ── STEP 4: Re-initialize Webflow + IX2 with progressive retries ────────────
    // Use multiple attempts because React may still be reconciling the DOM
    // when the first attempt fires, meaning IX2 can't find the new elements.
    const timers = []

    function initWebflow() {
      try {
        if (window.Webflow) {
          window.Webflow.destroy()
          window.Webflow.ready()

          if (window.Webflow.require) {
            const ix2 = window.Webflow.require('ix2')
            if (ix2 && ix2.init) {
              ix2.init()
              // Fire scroll event so scroll-triggered animations pick up
              window.dispatchEvent(new Event('scroll'))
            }
          }
        }
      } catch (e) {
        // Silently handle any Webflow re-init errors
      }
    }

    // Attempt 1: immediate rAF (catches most cases)
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        initWebflow()
      })
      timers.push(() => cancelAnimationFrame(raf2))
    })
    timers.push(() => cancelAnimationFrame(raf1))

    // Attempt 2: after 200ms (catches slower React renders)
    const t1 = setTimeout(() => {
      initWebflow()
    }, 200)
    timers.push(() => clearTimeout(t1))

    // Attempt 3: after 500ms (final fallback for heavy pages)
    const t2 = setTimeout(() => {
      initWebflow()
      // Also fire resize to re-trigger any viewport-dependent IX2 animations
      window.dispatchEvent(new Event('resize'))
    }, 500)
    timers.push(() => clearTimeout(t2))

    return () => {
      timers.forEach(cancel => cancel())
    }
  }, [location.pathname])
}
