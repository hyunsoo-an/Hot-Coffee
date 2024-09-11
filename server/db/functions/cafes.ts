import connection from '../index'
import { Cafe } from '../../../models/cafes'

const db = connection

// Getting all cafes
export function getAllCafes(): Promise<Cafe[]> {
  return db('cafes').select(
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
