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
    <form className="grid gap-y-10 text-center">
      <div className="grid gap-dy">
        <h1 className="font-semibold">How was your coffee?</h1>
        <RateButtons
          selectedRating={selectedRating}
          onSelection={handleSelection}
        />
      </div>
      {selectedRating == null ? (
        <></>
      ) : (
        <div className="grid gap-dy">
          <SearchCafe
            coffeeRating={selectedRating}
            open={open}
            value={value}
            onOpenChange={setOpen}
            onSelectCafe={handleCafeSelect}
          />
        </div>
      )}
    </form>
  )
}
