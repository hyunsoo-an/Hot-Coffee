import { useCafeById } from '@/hooks/useCafe'
import { useParams } from 'react-router-dom'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import DisplayMap from './DisplayMap'
import GetDirectionButton from './GetDirectionsButton'

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
        <p className="text-base text-xs">
          {cafe.streetAddress}
          <br />
          {cafe.suburb}
          <br />
          {cafe.city}
        </p>
      </div>
      <div>
        <GetDirectionButton cafe={cafe} />
      </div>
      <div>
        <DisplayMap cafe={cafe} />
      </div>
    </section>
  )
}
