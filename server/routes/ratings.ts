import express from 'express'
import * as db from '../db/functions/ratings'

const router = express.Router()

// POST /api/v1/ratings
router.post('/', async (req, res) => {
  const newRate = req.body
  try {
    const addedRateId = await db.addRating(newRate)
    res.status(200).json({ id: addedRateId })
  } catch (error) {
    res.sendStatus(500)
  }
})

// DELETE /api/v1/ratings/:id/

router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const deleted = await db.deleteRating(id)
    if (deleted) {
      res.status(200).json({ message: 'Rating deleted successfully' })
    } else {
      res.status(404).json({ error: 'Rating not found' })
    }
  } catch (error) {
    console.log(`error deleting rating: ${error}`)
    res.sendStatus(500)
    res.status(500).json({ error: 'Failed to delete rating' })
  }
})

export default router
