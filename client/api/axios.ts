import axios from 'axios'
export const getUserIP = async (): Promise<string> => {
  try {
    const res = await axios.get('https://api.ipify.org/?format=json')
    return res.data.ip
  } catch (error) {
    console.error('Error fetching IP address:', error)
    throw error
  }
}
