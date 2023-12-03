import express from 'express'
import userController from './controllers/user'

const app = express()
const port = 3000

app.use('/user', userController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})
