import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Re-initializes the Webflow animation engine on EVERY page render.
 *
 * Why: Webflow's IX2 engine binds animations to DOM elements on DOMContentLoaded.
 * In a React SPA, each route renders new DOM — Webflow doesn't automatically
 * re-bind. This hook calls destroy() + ready() on every route (including the
 * first load) with a small delay so React's paint has committed before Webflow
 * tries to query DOM elements.
 *
 * The "skip first render" pattern was removed — it caused the home page to look
 * broken on initial load because Webflow had already fired against an empty DOM.
 */
export function useWebflowInit() {
  const location = useLocation()

  useEffect(() => {
    if (typeof window === 'undefined') return

    // Small delay ensures React has committed the DOM before Webflow queries it
    const timer = setTimeout(() => {
      try {
        if (window.Webflow) {
          window.Webflow.destroy()
          window.Webflow.ready()
          if (window.Webflow.require) {
            const ix2 = window.Webflow.require('ix2')
            if (ix2) ix2.init()
          }
        }
      } catch (e) {
        // Silently handle any Webflow re-init errors
      }
    }, 50) // 50ms is enough for React to commit paint, imperceptible to users

    return () => clearTimeout(timer)
  }, [location.pathname]) // Re-runs on EVERY route including first load at "/"
}
