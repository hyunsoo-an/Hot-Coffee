import { Cafe } from 'models/cafes'
import { Button } from './ui/button'

interface CafeProp {
  cafe: Cafe
}

export default function GetDirectionButton({ cafe }: CafeProp) {
  const openGoogleMapsForDirections = () => {
    const latitude = cafe.latitude
    const longitude = cafe.longitude
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}&origin=current+location`
    window.open(url, '_blank')
  }
  return (
    <div className="flex gap-2">
      <Button onClick={openGoogleMapsForDirections}>Get Directions</Button>
    </div>
  )
}
