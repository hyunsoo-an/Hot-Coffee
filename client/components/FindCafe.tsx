import CafeList from './CafeList'
import { getCafeList } from '../api/cafe'
import { useQuery } from '@tanstack/react-query'
import { useUserLocation } from '../hooks/useUserLocation'
import Loading from './Loading'

export default function FindCafe() {
  const userLocation = useUserLocation()

  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['cafes'],
    queryFn: () => getCafeList(),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  })

  let outlet = <></>

  if (!userLocation) {
    outlet = <Loading />
  } else {
    isPending && (outlet = <p>Loading...</p>)
    isError && (outlet = <p>Error Loading Cafes</p>)
    isSuccess &&
      (outlet = <CafeList cafes={data} userLocation={userLocation} />)
    // (outlet = <Loading />) //for testing loader
  }

  return (
    <section className="section">
      <div className="content-wrapper">
        <h1 className="text-center">Find Wellington Cafes</h1>
        {outlet}
      </div>
    </section>
  )
}
