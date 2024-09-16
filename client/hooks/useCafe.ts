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
export function useCafeAlph() {
  const query = useQuery({
    queryKey: ['cafes'],
    queryFn: () => API.getCafesAlph(),
  })
  return query
}
