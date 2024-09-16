import { useCafeById } from '@/hooks/useCafe'
import { useParams } from 'react-router-dom'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import DisplayMap from './DisplayMap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEarthOceania,
  faStar,
  faThumbsUp,
} from '@fortawesome/free-solid-svg-icons'

export default function CafeProfile() {
  const params = useParams()
  const id = params.cafeId
  const { data: cafe, isError, error, isPending } = useCafeById(String(id))

  if (isPending) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return <p>Theres been an error getting the cafe: {error.message}</p>
  }

  return (
    <section className="section">
      <AspectRatio ratio={16 / 9} className="overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1663932464937-e677ddfc1d55?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt={`${cafe.name}`}
          className="object-cover"
        />
      </AspectRatio>
      <div>
        <h1 className="text-center text-xl font-bold">{cafe.name}</h1>
        {cafe.avgRating >= 8 && (
          <p className="text-center text-lg text-green-500">
            <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon> Recommend
            Coffee
          </p>
        )}
        <p className="text-center text-sm">
          <FontAwesomeIcon icon={faEarthOceania} />
          <span className="ml-2">
            {cafe.streetAddress}, {cafe.suburb}, {cafe.city}
          </span>
          <br />
          <FontAwesomeIcon icon={faStar} />
          <span className="ml-2">{cafe.avgRating}</span>
        </p>
      </div>
      <div className="-z-10">
        <DisplayMap cafe={cafe} />
      </div>
    </section>
  )
}
