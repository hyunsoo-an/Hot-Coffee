import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api'
import { API_HOST } from '../env'
import { useCafeById } from '@/hooks/useCafe'
import { useParams } from 'react-router-dom'

const defaultCenter = {
  lat: -41.296881158626114,
  lng: 174.77414413921622,
}

const mapStyles = {
  height: '500px',
  width: '100%',
}

export default function DisplayMap() {
  const params = useParams()
  const id = params.cafeId

  const { data: cafe, isError, error, isPending } = useCafeById(String(id))
  if (isPending) {
    return (
      <div>
        <h1>Loading map....</h1>
      </div>
    )
  }
  if (isError) {
    return <h1>Error Loading map {error.message}</h1>
  }

  const center =
    cafe.latitude && cafe.longitude
      ? {
          lat: cafe.latitude,
          lng: cafe.longitude,
        }
      : defaultCenter
  return (
    <section className="border-accent-4 mx-auto my-8 w-3/4">
      <LoadScriptNext
        googleMapsApiKey={API_HOST}
        loadingElement={<div>Loading...</div>}
      >
        <GoogleMap mapContainerStyle={mapStyles} zoom={18} center={center}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScriptNext>
    </section>
  )
}
