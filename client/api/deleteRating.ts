import request from 'superagent'

// DELETE api/v1/ratings/:id

export async function deleteRating(id: number) {
  try {
    const result = await request.delete(`/api/v1/ratings/${id}`)
    return result.statusCode
  } catch (error) {
    // Handle errors appropriately
    console.error(`Failed to delete rating with id: ${id}:`, error)
    throw error
  }
}
