import request from 'superagent'
import { Cafe } from '../../models/cafes'

//const apiPath = '/api/v1/cafes'

export async function getCafeList(suburb?: string): Promise<Cafe[]> {
  // let endpoint = ''
  // endpoint = suburb ? `?suburb=${suburb}` : ''

  const result = await request.get('/api/v1/cafes')
  return result.body as Cafe[]
  // const result = await request.get(apiPath + endpoint)
  // return result.body as Cafe[]
}
