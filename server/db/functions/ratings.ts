import connection from '../index'
import { Rating } from '../../../models/ratings'

const db = connection

// Adding rating
export function addRating(newRate: Rating) {
  return db('ratings').insert(newRate)
}
