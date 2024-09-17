import { ChevronsUp } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function CafeList() {
  const [isVisible, setIsVisible] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-16 right-dx z-30 rounded-full bg-card p-dy text-foreground shadow-lg"
          aria-label="Scroll to top"
        >
          <ChevronsUp />
        </button>
      )}
    </div>
  )
}
