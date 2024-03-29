import { Router } from "express";
import { prisma } from "../config/database.js";
import { adminAuthorization, uaAuthorization } from '../middlewares/authorization.js'
import CategoryBl from "../bl/category.bl.js";

const router = Router()
const categoryBl = new CategoryBl()

router.post('/category', adminAuthorization, async (req, res) => {
  const { name } = req.body

  const result = await categoryBl.create(name)

  res.status(result.status).json({
    message: result.message,
    category: result.data
  })
})

router.put('/category/:id', adminAuthorization, async (req, res) => {
  const { name } = req.body
  const id = +req.params.id

  const result = await categoryBl.update(id, name)

  res.status(result.status).json({
    message: result.message,
    category: result.data
  })
})

router.delete('/category/:id', adminAuthorization, async (req, res) => {
  const { id } = req.params

  const result = await categoryBl.delete(+id)

  res.status(result.status).json({
    message: result.message,
    category: result.data
  })
})

router.get('/category', async (req, res) => {

  const result = await categoryBl.findAll()

  res.status(result.status).json({
    message: result.message,
    category: result.data
  })
})


export default router