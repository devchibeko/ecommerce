import { Router } from "express";
import { adminAuthorization, uaAuthorization } from '../middlewares/authorization.js'
import ProductBl from "../bl/product.bl.js";

const router = Router()
const productBl = new ProductBl()

router.post('/product', adminAuthorization, async (req, res) => {
  const { name, image, price, about } = req.body

  const result = await productBl.create(name, image, price, about)

  res.status(result.status).json({
    message: result.message,
    product: result.data
  })
})


router.put('/product/:id', adminAuthorization, async (req, res) => {
  const { name } = req.body
  const id = +req.params.id

  const result = await productBl.update(id, name)

  res.status(result.status).json({
    message: result.message,
    product: result.data
  })
})


router.delete('/product/:id', adminAuthorization, async (req, res) => {
  const { id } = req.params

  const result = await productBl.delete(+id)

  res.status(result.status).json({
    message: result.message,
    product: result.data
  })
})

export default router