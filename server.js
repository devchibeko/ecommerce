import express from "express";
import cors from "cors"
import dotenv  from "dotenv"

import authRoutes from "./routes/user.routes.js"
import categoryRoutes from "./routes/categories.routes.js"
import productRoutes from "./routes/product.routes.js"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(authRoutes)
app.use(categoryRoutes)
app.use(productRoutes)

const port = process.env.PORT || 8080

app.listen(port, () => {
    console.log('Sarvar is running on http://localhost:' + port);
})