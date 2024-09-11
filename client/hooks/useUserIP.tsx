import { useState, useEffect } from 'react'
import { getUserIP } from '@/api/axios'

export default function useUserIP() {
  const [ip, setIP] = useState<string>('')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const ipAddress = await getUserIP()
        setIP(ipAddress)
      } catch (error) {
        setError('Error fetching IP address')
      }
    }

    fetchIP()
  }, [])

  return { ip, error }
}
