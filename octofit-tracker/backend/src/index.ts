import express, { Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './db.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000

// Middleware
app.use(cors())
app.use(express.json())

// Routes
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'OctoFit Tracker API is running' })
})

const start = async () => {
  await connectDB()

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
}

start().catch((error) => {
  console.error('Failed to start server:', error)
  process.exit(1)
})
