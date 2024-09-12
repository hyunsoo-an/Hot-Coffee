import connection from '../index'
import { Cafe } from '../../../models/cafes'

const db = connection

// Getting cafe by id
// Getting average rating
export function getCafeById(id: number): Promise<Cafe> {
  return db('cafes')
    .where({ 'cafes.id': id })
    .select(
      'cafes.id',
      'cafes.name',
      'cafes.longitude',
      'cafes.latitude',
      'cafes.image',
      'cafes.google_id as googleId',
      'cafes.directions_url as directionsUrl',
      'cafes.street_address as streetAddress',
      'cafes.suburb',
      'cafes.city',
      db('ratings')
        .where('ratings.location_id', '=', id)
        .avg('ratings.rating')
        .as('avgRating'),
    )
    .first()
}

// Getting all cafes and by suburb(optional)
export function getAllCafes(suburb?: string | undefined): Promise<Cafe[]> {
  const cafes = db('cafes').select(
    'id',
    'name',
    'longitude',
    'latitude',
    'image',
    'google_id as googleId',
    'directions_url as directionsUrl',
    'street_address as streetAddress',
    'suburb',
    'city',
    db('ratings')
      .whereRaw('ratings.location_id = cafes.id')
      .avg('ratings.rating')
      .as('avgRating'),
  )

  // Option to filter the cafes by suburb if the suburb has been given passed in
  if (suburb) {
    cafes.where({ suburb })
  }

  return cafes
}
