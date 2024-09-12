import connection from '../index'
import { RatingData } from '../../../models/ratings'

const db = connection

// Adding rating
export function addRating(newRate: RatingData) {
  return db('ratings').insert(newRate)
}

// delete rating
export function deleteRating(id: number) {
  console.log(id)
  return db('ratings').where({ id }).del()
}
