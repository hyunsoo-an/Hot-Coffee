import { useCafeById } from '@/hooks/useCafe'
import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Separator } from '@/components/ui/separator'
import DisplayMap from './DisplayMap'
import GetDirectionButton from './GetDirectionsButton'
import RateButtons from './RateButtons'
import { useAddRating } from '@/hooks/useAddRating'
import { ChevronLeft, MapPin, Star, ThumbsDown, ThumbsUp } from 'lucide-react'

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
  let mainContent
  let rateContent
  let mapContent

  if (isPending) mainContent = <p>Loading...</p>
  if (isError)
    mainContent = <p>Theres been an error getting cafe,{error.message}</p>

  if (cafe) {
    mainContent = (
      <>
        <div className="content-wrapper grid grid-cols-[auto_1fr] items-center gap-x-2">
          <ChevronLeft />
          <Link to="/cafes" className="text-xs font-semibold">
            All Cafes
          </Link>
        </div>
        <div className="content-wrapper col-span-full">
          <AspectRatio ratio={16 / 9} className="overflow-hidden">
            <img
              src={`/images/${cafe.image}.jpeg`}
              alt={`${cafe.name}`}
              className="w-full object-cover"
            />
          </AspectRatio>
        </div>
        <div className="content-wrapper">
          <h1 className="text-center text-xl font-bold">{cafe.name}</h1>
          <GetDirectionButton cafe={cafe} />
          <Separator />
          <div className="grid grid-cols-[auto_1fr] gap-x-dx gap-y-dy">
            <div className="col-span-full grid grid-cols-subgrid">
              <MapPin />
              <div>
                <p>
                  {cafe.streetAddress}, {cafe.suburb}
                </p>
                <p>{cafe.city}</p>
              </div>
            </div>
            {cafe.avgRating !== undefined && (
              <>
                <div className="col-span-full grid grid-cols-subgrid">
                  <Star />
                  <p className="font-bold">{cafe.avgRating}</p>
                </div>

                {cafe.avgRating >= 8 && (
                  <div className="col-span-full grid grid-cols-subgrid text-accent">
                    <ThumbsUp />
                    <p>Certified Hot Coffee</p>
                  </div>
                )}

                {cafe.avgRating < 5 && (
                  <div className="col-span-full grid grid-cols-subgrid text-accent">
                    <ThumbsDown />
                    <p>Dirty Coffee</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </>
    )
    rateContent = (
      <div className="content-wrapper">
        <h2 className="text-center font-semibold">Add Your Rating</h2>
        <p className="text-center text-sm text-muted-foreground">{`How is the coffee at ${cafe.name}?`}</p>
        <RateButtons
          selectedRating={selectedRating}
          onSelection={handleSelection}
        />
      </div>
    )

    mapContent = (
      <div className="content-wrapper">
        <h2 className="text-center font-semibold">{"See What's Nearby"}</h2>
        <DisplayMap cafe={cafe} />
      </div>
    )
  }

  return (
    <>
      <section className="section">{mainContent}</section>
      <section className="section bg-muted">{rateContent}</section>
      <section className="section">{mapContent}</section>
    </>
  )
}
