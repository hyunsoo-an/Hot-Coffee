import express from 'express'
import * as db from '../db/functions/cafes'

const router = express.Router()

// Get /api/v1/cafes
// Get /api/v1/cafes?suburb=Lyall Bay
router.get('/', async (req, res) => {
  try {
    const suburbName =
      typeof req.query.suburb === 'string' ? req.query.suburb : undefined
    const cafes = await db.getAllCafes(suburbName)

    cafes.map(
      (cafe) =>
        cafe.avgRating && (cafe.avgRating = ratingOutOfTen(cafe.avgRating)),
    )

    res.json(cafes)
  } catch (error) {
    res.sendStatus(500)
  }
})

// Get /api/v1/cafes/alph (name alph order)
// Get /api/v1/cafes/alph?suburb=Lyall Bay (name alph order)
router.get('/alph', async (req, res) => {
  try {
    const suburbName =
      typeof req.query.suburb === 'string' ? req.query.suburb : undefined
    const cafes = await db.getAllCafesAlpa(suburbName)

    cafes.map(
      (cafe) =>
        cafe.avgRating && (cafe.avgRating = ratingOutOfTen(cafe.avgRating)),
    )

    res.json(cafes)
  } catch (error) {
    res.sendStatus(500)
  }
})

// GET /api/v1/cafes/:id
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const cafe = await db.getCafeById(id)

    cafe.avgRating && (cafe.avgRating = ratingOutOfTen(cafe.avgRating))

    res.json(cafe)
  } catch (error) {
    res.sendStatus(500)
  }
})

export default router

// rounding rating function
function ratingOutOfTen(ratingDecimal: number) {
  return Math.round(ratingDecimal * 100) / 10
}
