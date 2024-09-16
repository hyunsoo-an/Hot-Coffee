import { Cafe } from 'models/cafes'
import { Button } from './ui/button'

interface CafeProp {
  cafe: Cafe
}

export default function GetDirectionButton({ cafe }: CafeProp) {
  const openGoogleMapsForDirections = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLatitude = position.coords.latitude
          const userLongitude = position.coords.longitude
          const cafelatitude = cafe.latitude
          const cafelongitude = cafe.longitude
          const url = `https://www.google.com/maps/dir/?api=1&destination=${cafelatitude},${cafelongitude}&origin=${userLatitude},${userLongitude}`
          window.open(url, '_blank')
        },
        (error) => {
          console.error('Error getting location: ', error)
          alert(
            'Unable to get your location. Please ensure location services are enabled.',
          )
        },
      )
    } else {
      alert('Geolocation is not supported by your browser.')
    }
  }

  return (
    <div className="flex gap-2">
      <Button onClick={openGoogleMapsForDirections}>Get Directions</Button>
    </div>
  )
}
