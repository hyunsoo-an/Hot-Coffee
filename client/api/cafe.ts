import { Cafe } from 'models/cafes'
import request from 'superagent'

export async function getCafeById(cafeId: string): Promise<Cafe> {
  try {
    const response = await request.get(`/api/v1/cafes/${cafeId}`)
    return response.body as Cafe
  } catch (error) {
    console.error('Error occurred while fetching cafe.', error)
    throw error
  }
}
