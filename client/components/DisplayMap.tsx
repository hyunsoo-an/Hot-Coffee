import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { API_HOST } from '../env'
export default function DisplayMap() {
  const mapStyles = {
    height: '400px',
    width: '100%',
  }

  const center = {
    lat: -41.296881158626114,
    lng: 174.77414413921622,
  }
  const markerLocation = {
    lat: -41.296881158626114,
    lng: 174.77414413921622,
  }
  return (
    <LoadScript googleMapsApiKey={API_HOST}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={18} center={center}>
        <Marker position={markerLocation} />
      </GoogleMap>
    </LoadScript>
  )
}
