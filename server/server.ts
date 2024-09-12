import express from 'express'
import * as Path from 'node:path'

import cafesRoutes from './routes/cafes'
import ratingsRoutes from './routes/ratings'
import distanceMatrix from './routes/distanceMatrix'

const server = express()

server.use(express.json())

server.use('/api/v1/distance', distanceMatrix)
server.use('/api/v1/cafes', cafesRoutes)
server.use('/api/v1/ratings', ratingsRoutes)

server.get('/api/ip', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  res.json({ ip })
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
