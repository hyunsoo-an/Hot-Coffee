import express from 'express'
import * as db from '../db/functions/cafes'

const router = express.Router()

// Get /api/v1/cafes
router.get('/', async (req, res) => {
  try {
    const cafes = await db.getAllCafes()
    res.json(cafes)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router
