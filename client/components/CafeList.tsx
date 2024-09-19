import CafeListItem from './CafeListItem'
import { Cafe } from '../../models/cafes'
import { getDistance } from '../api/distance'
import { useQuery } from '@tanstack/react-query'
import Loading from './Loading'
import ScrollUp from './ScrollUp'

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
  const fetchDistances = async () => {
    const cafeCoordinates = cafes.map((cafe) => ({
      lat: cafe.latitude.toString(),
      long: cafe.longitude.toString(),
    }))

    if (!userLocation || userLocation === 'Location Denied') {
      throw new Error('User location is not available')
    }

    const origins = {
      lat: userLocation.latitude.toString(),
      long: userLocation.longitude.toString(),
    }

    const result = await getDistance(origins, cafeCoordinates)
    if (result) {
      return result
    } else {
      throw new Error('Unable to calculate distance.')
    }
  }

  const {
    data: distances,
    error,
    isLoading,
  } = useQuery({
    queryKey: [
      'distances',
      userLocation,
      cafes.map((cafe) => cafe.id).join('-'),
    ],
    queryFn: fetchDistances,
    staleTime: 15 * 60 * 1000, //15 minutes
    enabled:
      !!userLocation && userLocation !== 'Location Denied' && cafes.length > 0,
  })

  const cafesWithDistances = cafes.map((cafe, index) => {
    const distance =
      distances && distances[index] ? distances[index].distance.text : ' '
    const value =
      distances && distances[index] ? distances[index].distance.value : Infinity
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
    <ul className="col-span-full grid grid-cols-subgrid gap-y-px">
      {error ? (
        <div className="error-message">
          <p>{error.message}</p>
        </div>
      ) : isLoading ? (
        <Loading />
      ) : (
        cafesWithDistances.map((cafe, index) => (
          <CafeListItem key={index} cafe={cafe} />
        ))
      )}
      <ScrollUp />
    </ul>
  )
}
