import { distance } from 'models/distance'
import request from 'superagent'
import { coordinates } from '../../models/coordinates'

export async function getDistance(
  origins: coordinates,
  destinations: coordinates[],
): Promise<distance | null> {
  try {
    const response = await request.get('/api/v1/distance').query({
      origins: `${origins.lat},${origins.long}`,
      destinations: destinations
        .map((dest) => `${dest.lat} , ${dest.long}`)
        .join('|'),
    })
    return response.body
  } catch (error) {
    console.error('Error occurred while fetching distance:', error)
    return null
  }
}
