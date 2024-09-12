import { useCafeById } from '@/hooks/useCafe'
import { useParams } from 'react-router-dom'

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
    return <p>Theres been an error getting cafe,{error.message}</p>
  }
  return (
    <section className="section">
      <img src={`${cafe.image}`} alt={`${cafe.name}`} />
      <div>
        <h1>{cafe.name}</h1>
        <p>{cafe.suburb}</p>
        <p>{cafe.streetAddress}</p>
      </div>
    </section>
  )
}
