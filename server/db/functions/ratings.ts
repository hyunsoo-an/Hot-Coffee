import connection from '../index'
import { RatingData } from '../../../models/ratings'

const db = connection

// Adding rating
export function addRating(newRate: RatingData) {
  return db('ratings')
    .insert({
      location_id: newRate.locationId,
      rating: newRate.rating,
      timestamp: newRate.timestamp,
      ip_address: newRate.ipAddress,
    })
    .then(() => db('ratings').select('id').orderBy('id', 'desc').first())
}

// delete rating
export function deleteRating(id: number) {
  return db('ratings').where({ id }).del()
}
