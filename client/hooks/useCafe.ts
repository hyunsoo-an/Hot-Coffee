import { useQuery } from '@tanstack/react-query'
import * as API from '../api/cafeApi'

export function useCafeById(id: string) {
  const query = useQuery({
    queryKey: ['cafe', id],
    queryFn: () => API.getCafeById(id),
  })
  return {
    ...query,
  }
}
export function useCafe() {
  const query = useQuery({
    queryKey: ['cafes'],
    queryFn: () => API.getCafes(),
  })
  return query
}
