import { useState } from 'react'
// import { deleteRating } from '../api/deleteRating'
import { useDeleteRating } from '../hooks/useDeleteRating'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

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
    <section className="section">
      <div className="content-wrapper grid grid-rows-[auto_1fr] py-[10svh] text-center">
        <div className="grid gap-2">
          <h1 className="font-bold">Thanks for your rating</h1>
          <p className="text-balance text-muted-foreground">
            Feedback like yours helps people avoid bad coffee.
          </p>
        </div>
        <Button
          className="self-end"
          onClick={handleUndo}
          aria-label="Undo Rating"
          variant="destructive"
        >
          Undo Rating
        </Button>
      </div>
    </section>
  )
}
