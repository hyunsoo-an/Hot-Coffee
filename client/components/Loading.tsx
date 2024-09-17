import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoadingSpinner() {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      navigate('/cafes')
    }, 500000)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="relative grid h-[70svh] grid-rows-[1fr_auto_1fr] items-center justify-center gap-dy bg-background text-center">
      <h1 className="self-end">Filtering for Coffees</h1>
      {isLoading && (
        <>
          <div className="col-span-full row-start-2 row-end-2 size-44 animate-spin place-self-center rounded-full border-2 border-t-2 border-muted border-t-accent"></div>
          <img
            src="/loading.png"
            alt="Loading"
            className="col-span-full row-start-2 row-end-2 size-40 place-self-center object-cover"
          />
        </>
      )}
      <p className="self-start"></p>
    </div>
  )
}
