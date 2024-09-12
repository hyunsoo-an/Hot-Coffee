export interface Rating extends RatingData {
  id: number
}

export interface RatingData {
  locationId: number
  rating: boolean
  timestamp: Date
  ipAddress: string
}
