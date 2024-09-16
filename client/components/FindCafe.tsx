import CafeList from './CafeList'
import { getCafeList } from '../api/cafe'
import { useQuery } from '@tanstack/react-query'

export default function FindCafe() {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['cafes'],
    queryFn: () => getCafeList(),
    staleTime: 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  })

  let outlet = <></>
  isPending && (outlet = <p>Loading...</p>)
  isError && (outlet = <p>Error Loading Cafes</p>)
  isSuccess && (outlet = <CafeList cafes={data} />)

  return (
    <section className="section">
      <div className="content-wrapper">
        <h1>Find Wellington Cafes</h1>
        {outlet}
      </div>
    </section>
  )
}
