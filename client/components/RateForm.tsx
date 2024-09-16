import { useState } from 'react'
import RateButtons from './RateButtons'
import SearchCafe from './SearchCafe'
import { useAddRating } from '../hooks/useAddRating'

export default function RateForm() {
  const [selectedRating, setSelectedRating] = useState<boolean | null>(null)
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState('')
  const addMutation = useAddRating()

  const handleSelection = (rating: boolean) => {
    setSelectedRating(rating)
    setTimeout(() => {
      setValue('')
    }, 500)
  }

  const handleCafeSelect = async (selectedCafe: string) => {
    setValue(selectedCafe)
    const locationId = Number(selectedCafe)
    if (selectedRating !== null) {
      addMutation.mutate({ rating: selectedRating, locationId })
    }
  }

  return (
    <form className="grid gap-dy text-center">
      <h1>How was your coffee?</h1>
      <RateButtons
        selectedRating={selectedRating}
        onSelection={handleSelection}
      />
      {selectedRating == null ? (
        <></>
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
