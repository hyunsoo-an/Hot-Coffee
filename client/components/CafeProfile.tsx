import { useCafeById } from '@/hooks/useCafe'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import DisplayMap from './DisplayMap'
import GetDirectionButton from './GetDirectionsButton'
import RateButtons from './RateButtons'
import { useAddRating } from '@/hooks/useAddRating'
import { MapPin, Star, ThumbsDown, ThumbsUp } from 'lucide-react'

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

  // Conditionally Render Page
  let pageContent
  if (isPending) pageContent = <p>Loading...</p>
  if (isError)
    pageContent = <p>Theres been an error getting cafe, {error.message}</p>
  if (cafe) {
    pageContent = (
      <>
        <div className="content-wrapper col-span-full">
          <AspectRatio ratio={16 / 9} className="overflow-hidden">
            <img
              src={`/images/${cafe.image}.jpeg`}
              alt={`${cafe.name}`}
              className="object-cover"
            />
          </AspectRatio>
        </div>
        <div className="content-wrapper">
          <h1 className="text-center text-xl font-bold">{cafe.name}</h1>

          {cafe.avgRating != undefined && (
            <>
              {cafe.avgRating >= 8 && (
                <p className="flex items-center justify-center text-center text-lg text-green-500">
                  <ThumbsUp className="mb-1.5 mr-1" />
                  Recommend Coffee
                </p>
              )}
              {cafe.avgRating < 3 && (
                <p className="flex items-center justify-center text-center text-lg text-red-500">
                  <ThumbsDown className="mr-1 mt-1" />
                  Non-recommended Coffee
                </p>
              )}
              <div className="flex items-start justify-start">
                <Star className="mr-1" />
                <span className="ml-2">{cafe.avgRating}</span>
              </div>
            </>
          )}

          <p className="flex items-start justify-start text-sm">
            <MapPin className="mr-1" />
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
          <GetDirectionButton cafe={cafe} />
        </div>
        <div>
          <DisplayMap cafe={cafe} />
        </div>
      </>
    )
  }

  return <section className="section">{pageContent}</section>
}
