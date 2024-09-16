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
          className="bg-grey-500 fixed bottom-16 right-1 z-30 rounded-full p-3 text-black"
          aria-label="Scroll to top"
        >
          <ChevronsUp />
        </button>
      )}
    </div>
  )
}
