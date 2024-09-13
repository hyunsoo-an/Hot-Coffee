import { useState } from 'react'
import RateButtons from './RateButtons'
import SearchCafe from './SearchCafe'
import React from 'react'
import { useAddRating } from '../hooks/useAddRating'
import { RatingData } from 'models/ratings'
import { useNavigate } from 'react-router-dom'

export default function RateForm() {
  const [, setSelectedCafe] = useState<string | null>(null)
  const [selectedRating, setSelectedRating] = useState<boolean | null>(null)
  const [isWaiting, setIsWaiting] = useState(false)
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const navigate = useNavigate()
  const addMutation = useAddRating()

  const handleSelection = (value: boolean) => {
    setSelectedRating(value)
    setIsWaiting(true)
    setTimeout(() => {
      setSelectedCafe(null)
      setIsWaiting(false)
    }, 500)
  }

  const handleCafeSelect = async (selectedCafe: string) => {
    setValue(selectedCafe)
    if (selectedRating !== null) {
      await addNewRating(selectedRating, Number(selectedCafe))
    }
  }

  const addNewRating = async (
    selectedRating: boolean,
    selectedCafe: number,
  ) => {
    try {
      const newRating: RatingData = {
        locationId: selectedCafe,
        rating: selectedRating,
        timestamp: new Date(),
        ipAddress: '11.22.33.44.55.66', // to be updated soon
      }
      const newRatingId = await addMutation.mutateAsync(newRating)

      if (newRatingId) {
        setTimeout(() => {
          navigate(`/rating/${newRatingId}`)
        }, 330)
      } else {
        console.error('Failed to add rating.')
      }
    } catch (error) {
      console.error('Error adding rating:', error)
    }
  }

  return (
    <form className="grid auto-rows-min content-center justify-items-center gap-dy">
      <h1>How was your coffee?</h1>
      <RateButtons
        selectedRating={selectedRating}
        isWaiting={isWaiting}
        onSelection={handleSelection}
      />
      {selectedRating == null ? (
        ' '
      ) : (
        <SearchCafe
          coffeeRating={selectedRating}
          open={open}
          value={value}
          onOpenChange={setOpen}
          onSelectCafe={handleCafeSelect}
        />
      )}
    </form>
  )
}
