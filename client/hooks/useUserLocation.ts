import { useState, useEffect } from 'react'

type UserLocation = {
  latitude: number
  longitude: number
} | null

export function useUserLocation() {
  const [userLocation, setUserLocation] = useState<UserLocation>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setUserLocation({ latitude, longitude })
        },
        (error) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              setErrorMessage(
                'Permission denied. Please allow access to your location.',
              )
              break
            case error.POSITION_UNAVAILABLE:
              setErrorMessage('Location information is unavailable.')
              break
            case error.TIMEOUT:
              setErrorMessage('The request to get your location timed out.')
              break
            default:
              setErrorMessage(
                'An unknown error occurred while retrieving your location.',
              )
              break
          }
          console.error('Error getting user location:', error)
        },
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  return { userLocation, errorMessage }
}
