import express from 'express'

const app = express()

app.get('/', (request, response) => {
  return response.json({ message: 'Hello World with TypeScript'})
})

app.listen(3333)