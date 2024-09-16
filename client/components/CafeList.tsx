import CafeListItem from './CafeListItem'
import { Cafe } from '../../models/cafes'
import { getDistance } from '../api/distance'
import { useEffect, useState } from 'react'
import { Element } from 'models/GoogleDistanceAPIResult'

type UserLocation = {
  latitude: number
  longitude: number
} | null

export default function CafeList({
  cafes,
  userLocation,
}: {
  cafes: Cafe[]
  userLocation: UserLocation | 'Location Denied'
}) {
  const [distances, setDistances] = useState<Element[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchDistances = async () => {
      if (
        userLocation &&
        userLocation !== 'Location Denied' &&
        cafes.length > 0
      ) {
        setLoading(true)
        const cafeCoordinates = cafes.map((cafe) => ({
          lat: cafe.latitude.toString(),
          long: cafe.longitude.toString(),
        }))

        const origins = {
          lat: userLocation.latitude.toString(),
          long: userLocation.longitude.toString(),
        }

        try {
          const result = await getDistance(origins, cafeCoordinates)
          if (result) {
            setDistances(result)
          } else {
            setError('Unable to calculate distance.')
          }
        } catch (error) {
          setError('Error fetching distances.')
        } finally {
          setLoading(false)
        }
      }
    }

    fetchDistances()
  }, [userLocation, cafes])

  return (
    <div className="grid gap-dy">
      {error ? (
        <div className="error-message">
          <p>{error}</p>
        </div>
      ) : loading ? (
        <div>Loading distances...</div>
      ) : (
        cafes.map((cafe, index) => (
          <CafeListItem
            key={index}
            cafe={cafe}
            distance={
              distances && distances[index]
                ? String(distances[index].distance.text)
                : ' '
            }
          />
        ))
      )}
    </div>
  )
}
