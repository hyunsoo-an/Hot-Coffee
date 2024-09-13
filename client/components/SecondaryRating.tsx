import { useState } from 'react'
// import { deleteRating } from '../api/deleteRating'
import { useDeleteRating } from '../hooks/useDeleteRating'
import { useParams, useNavigate } from 'react-router-dom'

interface RouteParams extends Record<string, string | undefined> {
  id: string
}

export default function SecondaryRating() {
  const { ratingId } = useParams<RouteParams>()
  const [isUndone, setIsUndone] = useState(false)
  const navigate = useNavigate()
  const deleteMutation = useDeleteRating()
  const [, setError] = useState<string | null>(null)

  const handleUndo = () => {
    if (!ratingId) {
      setError('Invalid rating ID.')
      return
    }

    const numericRatingId = Number(ratingId)

    if (isNaN(numericRatingId)) {
      setError('Rating ID must be a number.')
      return
    }
    deleteMutation.mutate(numericRatingId, {
      onSuccess: () => {
        setIsUndone(true)
        setTimeout(() => {
          navigate('/')
        }, 700)
      },
    })
  }

  if (isUndone) {
    return (
      <div className="grid auto-rows-min content-center justify-items-center gap-dy">
        <h2>Rating undone</h2>
        <p>returning home</p>
      </div>
    )
  }

  return (
    <div className="grid auto-rows-min content-center justify-items-center gap-dy">
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
