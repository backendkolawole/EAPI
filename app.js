require('dotenv').config()
require('express-async-errors')
const express = require('express')
const app = express()
const {notFound} = require('./middleware/not-found')
const {errorHandler} = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const products = require('./routes/product')

app.use(express.json())
app.use('/api/v1/products', products)
app.use(notFound)
app.use(errorHandler)


const start = async()=> {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, ()=> console.log('Server is listening on 3000'))
    } catch (error) {
        console.log(error)
    }
}

start()