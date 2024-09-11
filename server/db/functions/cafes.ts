import connection from '../index'
import { Cafe } from '../../../models/cafes'

const db = connection

// Getting each cafe id
export function getCafeById(id: number): Promise<Cafe[]> {
  return db('cafes')
    .where({ id })
    .first()
    .select(
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
    )
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
  )

  // Option to filter the cafes by suburb if the suburb has been given passed in
  if (suburb) {
    cafes.where({ suburb })
  }

  return cafes
}
