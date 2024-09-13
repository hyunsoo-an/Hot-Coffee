import { useCafeById } from '@/hooks/useCafe'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { addRating } from '@/api/addRatingApi'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import RateButtons from './RateButtons'
import { RatingData } from 'models/ratings'

export default function CafeProfile() {
  const navigate = useNavigate()
  const params = useParams()
  const id = params.cafeId
  const { data: cafe, isError, error, isPending } = useCafeById(String(id))

  // Rate Buttons
  const [selectedRating, setSelectedRating] = useState<boolean | null>(null)
  const [isWaiting, setIsWaiting] = useState(false) // Can possibly be removed on refactor

  const handleSelection = async (value: boolean) => {
    setSelectedRating(value)
    setIsWaiting(true)
    await addNewRating(selectedRating, Number(id))
  }

  // This should be broken out into its own function or api function?ß

  const addNewRating = async (
    selectedRating: boolean,
    selectedCafe: number,
  ) => {
    try {
      const response = await addRating({
        locationId: selectedCafe,
        rating: selectedRating,
        timestamp: new Date(),
        ipAddress: '11.22.33.44.55.66', // to be updated once we have the option to dynamically grab user IP address
      } as RatingData)

      console.log(response)

      if (response == 200) {
        setTimeout(() => {
          navigate(`/rating/${selectedCafe}`)
        }, 330)
      } else {
        console.error('Failed to add rating. Status code:', response)
      }
    } catch (error) {
      console.error('Error adding rating:', error)
    }
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
            isWaiting={isWaiting}
            onSelection={handleSelection}
          />
        </div>
      </>
    )
  }

  return <section className="section">{pageContent}</section>
}
