import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Re-initializes the Webflow animation engine on every route change.
 * Webflow's IX2 interactions are bound to specific DOM elements. When React
 * navigates between pages, the DOM changes but Webflow doesn't know — so we
 * need to call destroy() + ready() to re-bind all animations.
 */
export function useWebflowInit() {
  const location = useLocation()
  const prevPath = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (!window.Webflow) return

    // Only re-init on route changes (skip first render which Webflow handles itself)
    if (prevPath.current !== null && prevPath.current !== location.pathname) {
      try {
        window.Webflow.destroy()
        window.Webflow.ready()
        if (window.Webflow.require) {
          const ix2 = window.Webflow.require('ix2')
          if (ix2) ix2.init()
        }
      } catch (e) {
        // Silently handle any Webflow re-init errors
      }
    }
    prevPath.current = location.pathname
  }, [location.pathname])
}
