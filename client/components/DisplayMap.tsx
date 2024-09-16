import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api'
import { VITE_GOOGLE_API_KEY } from '../env'
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
    <div className="mt-16 border-4 border-accent">
      <LoadScriptNext googleMapsApiKey={VITE_GOOGLE_API_KEY}>
        <GoogleMap mapContainerStyle={mapStyles} zoom={18} center={center}>
          <Marker position={center} />
        </GoogleMap>
      </LoadScriptNext>
    </div>
  )
}
