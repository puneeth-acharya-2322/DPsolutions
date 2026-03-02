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
  '/':         '67a1a4168a205f6b25b1e467',  // home.html
  '/features': '67a46b73c25233f4f704b8da',  // features.html
  '/pricing':  '67a46b8232a0e9affc256906',  // pricing.html
  '/contact':  '67a46b8ae115f8b6dae8d466',  // contact.html
  '/about':    '67a46b6c06f931cc32b4c1a6',  // about.html
  '/blogs':    '67a46b7ae0ff8cb7e340b76e',  // blogs.html
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

    // ── STEP 3: Double rAF + Manual Scroll Trigger ─────────────────────────────
    let raf1, raf2
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        try {
          if (window.Webflow) {
            window.Webflow.destroy()
            window.Webflow.ready()
            
            if (window.Webflow.require) {
              const ix2 = window.Webflow.require('ix2')
              if (ix2 && ix2.init) {
                ix2.init()
                // Force a scroll event to wake up IX2 engine
                window.dispatchEvent(new Event('scroll'))
              }
            }
          }
        } catch (e) {
          // Silently handle any Webflow re-init errors
        }
      })
    })

    return () => {
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [location.pathname])
}
