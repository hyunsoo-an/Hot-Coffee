import CafeList from './CafeList'
import { getCafeList } from '../api/cafe'
import { useQuery } from '@tanstack/react-query'
import { useUserLocation } from '../hooks/useUserLocation'

export default function FindCafe() {
  const userLocation = useUserLocation()

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['cafes'],
    queryFn: () => getCafeList(),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  let outlet = <></>

  if (!userLocation) {
    outlet = <p>Fetching your location...</p> // show loading message while waiting for location
    // replace this with hanks loading animation when ready in main
  } else {
    isPending && (outlet = <p>Loading...</p>)
    isError && (outlet = <p>Error Loading Cafes</p>)
    isSuccess &&
      (outlet = <CafeList cafes={data} userLocation={userLocation} />)
  }

  return (
    <section className="section">
      <div className="content-wrapper">
        <h1>Find Wellington Cafes</h1>
        {outlet}
      </div>
    </section>
  )
}
