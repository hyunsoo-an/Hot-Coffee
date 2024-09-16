import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Loading.module.css'

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      navigate('/cafes')
    }, 5000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className={styles.loaderContainer}>
      <h1 className={styles.title}>Filtering for Coffees</h1>
      {isLoading && <div className={styles.loader}></div>}
      {isLoading && (
        <img src="/loading.png" alt="Loading" className={styles.image} />
      )}
      <p className={styles.subtitle}>...</p>
    </div>
  )
}
