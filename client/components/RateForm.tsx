import { useState } from 'react'
import RateButtons from './RateButtons'
import SearchCafe from './SearchCafe'
import React from 'react'
import { addRating } from '../api/addRatingApi'
import { RatingData } from 'models/ratings'
import { useNavigate } from 'react-router-dom'

export default function RateForm() {
  const [, setSelectedValue] = useState<boolean | null>(null)
  const [clickedValue, setClickedValue] = useState<boolean | null>(null)
  const [isWaiting, setIsWaiting] = useState(false)
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState('')
  const navigate = useNavigate()

  const handleSelection = (value: boolean) => {
    setClickedValue(value)
    setIsWaiting(true)
    setTimeout(() => {
      setSelectedValue(value)
      setIsWaiting(false)
    }, 500)
  }

  const handleCafeSelect = async (selectedValue: string) => {
    setValue(selectedValue)
    if (clickedValue !== null) {
      await addNewRating(clickedValue, Number(selectedValue))
    }
  }

  const addNewRating = async (clickedValue: boolean, selectedValue: number) => {
    try {
      const response = await addRating({
        locationId: selectedValue,
        rating: clickedValue,
        timestamp: new Date(),
        ipAddress: '11.22.33.44.55.66', // to be updated once we have the option to dynamically grab user IP address
      } as RatingData)

      if (response == 200) {
        setTimeout(() => {
          navigate(`/rating/${selectedValue}`)
        }, 330)
      } else {
        console.error('Failed to add rating. Status code:', response)
      }
    } catch (error) {
      console.error('Error adding rating:', error)
    }
  }

  return (
    <form className="gap-dy grid auto-rows-min content-center justify-items-center">
      <h1>How was your coffee?</h1>
      <RateButtons
        clickedValue={clickedValue}
        isWaiting={isWaiting}
        onSelection={handleSelection}
      />
      {clickedValue == null ? (
        ' '
      ) : (
        <SearchCafe
          coffeeRating={clickedValue}
          open={open}
          value={value}
          onOpenChange={setOpen}
          onSelectCafe={handleCafeSelect}
        />
      )}
    </form>
  )
}
