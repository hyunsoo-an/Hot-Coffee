import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addRating } from '../api/addRatingApi'
import { RatingData } from '../../models/ratings'

export function useAddRating() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (newRating: RatingData) => {
      const addedRateId = await addRating(newRating)
      return addedRateId
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cafes'] })
    },
  })
}
