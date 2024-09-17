import { MouseEvent } from 'react'
import { Button } from './ui/button'

interface RateButtonsProps {
  selectedRating: boolean | null
  onSelection: (value: boolean) => void
}

export default function RateButtons({
  selectedRating,
  onSelection,
}: RateButtonsProps) {
  const handleSelection = (
    event: MouseEvent<HTMLButtonElement>,
    value: boolean,
  ) => {
    event.preventDefault()
    onSelection(value)
  }

  return (
    <div className="grid grid-cols-2 gap-dy">
      <Button
        className="flex-grow"
        onClick={(event) => handleSelection(event, true)}
        variant={selectedRating === true ? 'default' : 'outline'}
      >
        Good
      </Button>
      <Button
        className="flex-grow"
        onClick={(event) => handleSelection(event, false)}
        variant={selectedRating === false ? 'default' : 'outline'}
      >
        Bad
      </Button>
    </div>
  )
}
