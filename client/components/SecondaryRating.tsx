import { useState } from 'react'
import { deleteRating } from '../api/deleterating'
import { useParams, useNavigate } from 'react-router-dom'

interface RouteParams extends Record<string, string | undefined> {
  id: string
}

export default function SecondaryRating() {
  const { ratingId } = useParams<RouteParams>()
  const [isUndone, setIsUndone] = useState(false)
  const navigate = useNavigate()

  const handleUndo = () => {
    deleteRating(Number(ratingId))
    setIsUndone(true)
    setTimeout(() => {
      navigate('/')
    }, 700)
  }

  if (isUndone) {
    return (
      <div className="gap-dy grid auto-rows-min content-center justify-items-center">
        <h2>Rating undone</h2>
        <p>returning home</p>
      </div>
    )
  }

  return (
    <div className="gap-dy grid auto-rows-min content-center justify-items-center">
      <h1>Thanks for your rating!</h1>
      <p>Feedback like yours helps more people avoid bad coffee.</p>
      <button
        onClick={handleUndo}
        className="text-blue-500"
        aria-label="Undo Rating"
      >
        Undo Rating
      </button>
    </div>
  )
}
