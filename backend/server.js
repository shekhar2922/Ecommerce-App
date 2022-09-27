const express = require("express")
const helmet = require("helmet")
const dotenv = require("dotenv")
const connectDB = require("./config/db")
const productRoutes = require("./routes/productRoutes")
const adminRoutes = require("./routes/adminRoutes")

connectDB()
dotenv.config()

const app = express()
app.use(helmet())
app.use(express.json())

app.use('/admin/login', adminRoutes)
app.use('/api/products', productRoutes)
const PORT = process.env.PORT

app.listen(PORT, console.log(`Server is running on port ${PORT}`))