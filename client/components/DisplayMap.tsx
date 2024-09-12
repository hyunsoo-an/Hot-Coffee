import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import { API_HOST } from '../env'
export default function DisplayMap() {
  const mapStyles = {
    height: '400px',
    width: '100%',
  }

  const center = {
    lat: -3.745,
    lng: -38.523,
  }
  const markerLocation = {
    lat: -36.830291,
    lng: 174.745348,
  }
  return (
    <LoadScript googleMapsApiKey={API_HOST}>
      <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={center}>
        <Marker position={markerLocation} />
      </GoogleMap>
    </LoadScript>
  )
}
