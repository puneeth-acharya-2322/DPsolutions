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

    // ── STEP 1: Scroll to top IMMEDIATELY (synchronous, before any rAF) ────────
    //
    // CRITICAL: This must happen BEFORE Webflow IX2 re-initializes.
    // Webflow IX2 uses IntersectionObserver + scroll position to decide which
    // elements are "in viewport" and should trigger entrance animations.
    //
    // Without this: React Router keeps the scroll position from the previous
    // page → IX2 initializes and finds many elements "already in view" →
    // those elements never get their fade-in animation triggered → user must
    // scroll to force a re-evaluation.
    //
    // With this: page is at top (0,0) when IX2 initializes → only elements
    // visible in the fresh viewport are considered "in view" → all scroll-
    // triggered animations play correctly as the user scrolls down.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })

    // ── STEP 2: Double rAF — let React commit the DOM, then init Webflow ───────
    //
    // Double requestAnimationFrame guarantees:
    // rAF 1 → browser layout pass with new DOM
    // rAF 2 → browser paint committed, all elements have correct positions
    // Then Webflow IX2 measures element positions from a clean (top) scroll state
    let raf1, raf2
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        try {
          // ── 2a. Swap data-wf-page to the correct page ID ───────────────
          const pageId = PAGE_WF_IDS[location.pathname] || PAGE_WF_IDS['/']
          const html = document.documentElement
          html.setAttribute('data-wf-page', pageId)
          html.setAttribute('data-wf-site', SITE_ID)

          // ── 2b. Re-initialize Webflow with the correct page context ─────
          if (window.Webflow) {
            window.Webflow.destroy()
            window.Webflow.ready()
            if (window.Webflow.require) {
              const ix2 = window.Webflow.require('ix2')
              if (ix2 && ix2.init) ix2.init()
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
