import { useState, useEffect } from 'react'

type UserLocation =
  | {
      latitude: number
      longitude: number
    }
  | 'Location Denied'
  | null

export function useUserLocation() {
  const [userLocation, setUserLocation] = useState<UserLocation>(null)

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ latitude, longitude })
        },
        (error) => {
          if (error.code === error.PERMISSION_DENIED) {
            setUserLocation('Location Denied')
          } else {
            console.error('Error getting user location:', error)
          }
        },
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  return userLocation
}
