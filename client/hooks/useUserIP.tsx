import { useQuery } from '@tanstack/react-query'

async function fetchIP() {
  const response = await fetch('/api/ip')
  if (!response.ok) {
    throw new Error('Error fetching IP address')
  }
  const data = await response.json()
  return data.ip
}

export default function useUserIP() {
  const { data: ip, error } = useQuery({
    queryKey: ['userIP'],
    queryFn: fetchIP,
  })

  return { ip, error: error ? error.message : null }
}
