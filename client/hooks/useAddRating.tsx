import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { addRating } from '@/api/addRatingApi'
import { getUserIP } from '@/api/getUserIP'
import { RatingData } from '../../models/ratings'

export function useAddRating() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const mutation = useMutation({
    mutationFn: async (ratingData: { rating: boolean; locationId: number }) => {
      const ipAddress = await getUserIP()
      const newRating: RatingData = {
        locationId: ratingData.locationId,
        rating: ratingData.rating,
        timestamp: new Date(),
        ipAddress: String(ipAddress),
      }

      const addedRateId = await addRating(newRating)
      return addedRateId
    },

    onSuccess: (addedRateId) => {
      queryClient.invalidateQueries({ queryKey: ['cafes'] })
      queryClient.refetchQueries({ queryKey: ['cafes'] })
      navigate(`/rating/${addedRateId}`)
    },
  })

  return mutation
}
