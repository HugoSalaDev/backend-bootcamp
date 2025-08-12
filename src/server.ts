import express from 'express'

const app = express()
const PORT = process.env.PORT ?? 3000

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() })
})

app.listen(PORT, () => {
  // log mínimo
  console.log(`API listening on http://localhost:${PORT}`)
})
