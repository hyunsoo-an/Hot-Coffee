import express from 'express'
import request from 'superagent'
import 'dotenv/config'

const router = express.Router()

router.get('/', async (req, res) => {
  const { destinations, origins } = req.query
  try {
    const response = await request
      .get('https://maps.googleapis.com/maps/api/distancematrix/json')
      .query({
        destinations: destinations,
        origins: origins,
        units: 'metric',
        key: process.env.GOOGLE_API_KEY,
      })
    res.json(response.body)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'An error occurred' })
  }
})

export default router
