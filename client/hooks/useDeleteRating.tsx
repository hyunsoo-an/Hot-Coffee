import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteRating } from '../api/deleteRating'

export function useDeleteRating() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      return deleteRating(id)
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cafes'] })
    },
  })
}
