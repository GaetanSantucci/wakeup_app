'use client'

import { useEffect } from 'react'

function ScrollUp() {
  useEffect(() => window.document.scrollingElement?.scrollTo({
    top: 350,
    left: 0,
    behavior: 'smooth'
  }), [])

  return null
}

function ScrollToTop() {
  useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])

  return null
}

export { ScrollToTop, ScrollUp }