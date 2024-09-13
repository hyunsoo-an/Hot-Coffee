import request from 'superagent'
import { RatingData } from '../../models/ratings'

// POST api/v1/rating

export async function addRating(newRating: RatingData): Promise<number> {
  try {
    const result = await request.post('/api/v1/ratings').send(newRating)
    return result.body.id.id
  } catch (error: unknown) {
    console.error('Error occurred adding rating.', error)
    if (typeof error === 'object' && error !== null && 'status' in error) {
      const status = (error as { status: number }).status
      return status || 500
    }

    return 500
  }
}
