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


const port = process.env.PORT

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, () => console.log(`Server is listening on ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()