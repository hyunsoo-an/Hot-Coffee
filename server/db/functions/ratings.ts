import connection from '../index'
import { RatingData } from '../../../models/ratings'

const db = connection

// Adding rating
export function addRating(newRate: RatingData) {
  return db('ratings').insert(newRate)
}
