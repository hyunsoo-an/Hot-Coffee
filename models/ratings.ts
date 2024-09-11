export interface Rating extends RatingData {
  id: number
}

export interface RatingData {
  location_id: number
  rating: boolean
  timestamp: Date
  ip_address: string
}
