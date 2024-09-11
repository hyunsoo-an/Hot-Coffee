import express from 'express'
import * as db from '../db/functions/ratings'

const router = express.Router()

// POST /api/v1/ratings
router.post('/', async (req, res) => {
  const newRate = req.body
  try {
    await db.addRating(newRate)
    res.sendStatus(200)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router
