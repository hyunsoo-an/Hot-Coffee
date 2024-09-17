import CafeListItem from './CafeListItem'
import { Cafe } from '../../models/cafes'
import { getDistance } from '../api/distance'
import { useEffect, useState } from 'react'
import { Element } from 'models/GoogleDistanceAPIResult'
import Loading from './Loading'

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

  const cafesWithDistances = cafes.map((cafe, index) => {
    const distance =
      distances && distances[index] ? distances[index].distance.text : ' '
    const value =
      distances && distances[index] ? distances[index].distance.value : ' '
    return {
      ...cafe,
      distance: distance,
      value: Number(value),
    }
  })

  cafesWithDistances.sort((a, b) => {
    const ratingA = a.avgRating ?? 0
    const ratingB = b.avgRating ?? 0

    if (a.avgRating === b.avgRating) {
      return a.value - b.value
    }
    return ratingB - ratingA
  })

  return (
    <>
      <div className="grid gap-px">
        {error ? (
          <div className="error-message">
            <p>{error}</p>
          </div>
        ) : loading ? (
          <Loading />
        ) : (
          cafesWithDistances.map((cafe, index) => (
            <CafeListItem key={index} cafe={cafe} />
          ))
        )}
      </div>
    </>
  )
}
