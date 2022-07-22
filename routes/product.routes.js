import { Router } from "express";
import { uaAuthorization } from '../middlewares/authorization.js'
import ProductBl from "../bl/product.bl.js"
import multerUpload from "../middlewares/multer-upload.js";

const router = Router()
const productBl = new ProductBl()

const upload = multerUpload.array([{ name: 'blabla', maxCount: 5 }])

router.get('/product', async (req, res) => {
  const result = await productBl.findAll()

  res.status(result.status).json({
    message: result.message,
    product: result.data
  })
})



router.post('/product', uaAuthorization, upload, async (req, res) => {
  const sellerId = res.locals.user.id
  const { name, price, about, categoryId } = req.body
  
  const image = req.files ? req.files['blabla'].map(file = file.filename) : []

  const result = await productBl.create(name, image, price, about, sellerId, categoryId)

  res.status(result.status).json({
    message: result.message,
    products: result.data
  })

})


router.put('/product/:id', uaAuthorization, upload, async (req, res) => {
  
  const id = +req.params.id
  const sellerId = res.locals.user.id
  const { name, price, about, categoryId } = req.body
  
  const image = req.files ? req.files['blabla'].map(file = file.filename) : []

  const result = await productBl.update(id, sellerId, name, image, price, about, categoryId)

  res.status(result.status).json({
    message: result.message,
    product: result.data
  })

})


export default router