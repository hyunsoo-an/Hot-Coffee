import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api'
import { API_HOST } from '../env'
import { Cafe } from 'models/cafes'
const defaultCenter = {
  lat: -41.296881158626114,
  lng: 174.77414413921622,
}

const mapStyles = {
  height: '500px',
  width: '100%',
}
interface DisplayMapProps {
  cafe: Cafe
}

export default function DisplayMap({ cafe }: DisplayMapProps) {
  if (!cafe) {
    return <h1>Loading map....</h1>
  }

  const center =
    cafe.latitude && cafe.longitude
      ? { lat: cafe.latitude, lng: cafe.longitude }
      : defaultCenter

  return (
    <div className="border-accent-4 mx-auto my-8 w-3/4">
      <LoadScriptNext googleMapsApiKey={API_HOST}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={18} center={center}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScriptNext>
    </div>
  )
}
