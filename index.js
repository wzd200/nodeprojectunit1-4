require('dotenv').config()
// test
const express = require('express')
const server = express()

if (process.env.NODE_ENV === 'production') {
  console.log('this means this code is deployed')
}
const PORT = process.env.PORT || 5000

server.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Will Server!!' })
})

server.get('/api', (req, res) => {
  res.json({ message: `${process.env.COHORT} ROCKS` })
})

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})