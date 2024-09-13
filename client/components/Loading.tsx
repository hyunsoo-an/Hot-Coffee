import { useEffect, useState } from 'react'
import styles from './Loading.module.css'

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="cup">
      {isLoading && <div className={styles.cupHuddle}></div>}
    </div>
  )
}
