require('dotenv').config()
const express = require('express')

const cors = require('cors')
const logger = require('morgan')


const PORT = process.env.PORT

const app = express()
// app.use(express.urlencoded({extended:false}))
// app.use(express.json())
app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const postRouter = require('./controllers/postController')
app.use('/posts/', postRouter)

const commentRouter = require('./controllers/commentController')
app.use('/comments/', commentRouter)

app.listen(PORT, () => console.log(`Server running on ${PORT}`))