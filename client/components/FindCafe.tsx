import CafeList from './CafeList'
import { getCafeList } from '../api/cafe'
import { useQuery } from '@tanstack/react-query'

export default function FindCafe() {
  const { data, isPending, isError, isSuccess } = useQuery({
    queryKey: ['cafes'],
    queryFn: () => getCafeList(),
    staleTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  })

  let outlet = <></>
  isPending && (outlet = <p>Loading...</p>)
  isError && (outlet = <p>Error Loading Cafes</p>)
  isSuccess && (outlet = <CafeList cafes={data} />)

  return <section className="section">{outlet}</section>
}
