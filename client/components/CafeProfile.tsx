import { useCafeById } from '@/hooks/useCafe'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import DisplayMap from './DisplayMap'
import RateButtons from './RateButtons'
import { useAddRating } from '@/hooks/useAddRating'

export default function CafeProfile() {
  const params = useParams()
  const id = params.cafeId
  const { data: cafe, isError, error, isPending } = useCafeById(String(id))
  const addMutation = useAddRating()

  // Rate Buttons
  const [selectedRating, setSelectedRating] = useState<boolean | null>(null)
  const handleSelection = async (rating: boolean) => {
    setSelectedRating(rating)
    const locationId = Number(id)
    await addMutation.mutateAsync({ rating, locationId })
  }

  //Conditionally Render Page
  let pageContent
  if (isPending) pageContent = <p>Loading...</p>
  if (isError)
    pageContent = <p>Theres been an error getting cafe,{error.message}</p>
  if (cafe) {
    pageContent = (
      <>
        <div className="content-wrapper col-span-full">
          <AspectRatio ratio={16 / 9} className="overflow-hidden">
            <img
              src="https://plus.unsplash.com/premium_photo-1663932464937-e677ddfc1d55?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt={`${cafe.name}`}
              className="object-cover"
            />
          </AspectRatio>
        </div>
        <div className="content-wrapper">
          <h1 className="text-xl font-bold">{cafe.name}</h1>
          <p className="text-xs">
            {cafe.streetAddress}, {cafe.suburb}
            <br />
            {cafe.city}
          </p>
        </div>
        <div className="content-wrapper">
          <h2 className="text-sm font-semibold">Rate Coffee</h2>
          <RateButtons
            selectedRating={selectedRating}
            onSelection={handleSelection}
          />
        </div>
        <div>
          <DisplayMap cafe={cafe} />
        </div>
      </>
    )
  }

  return <section className="section">{pageContent}</section>
}
