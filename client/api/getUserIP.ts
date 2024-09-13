import request from 'superagent'
export const getUserIP = async (): Promise<string> => {
  try {
    const res = await request.get('https://api.ipify.org/?format=json')
    return res.body.ip
  } catch (error) {
    console.error('Error fetching IP address:', error)
    throw error
  }
}
