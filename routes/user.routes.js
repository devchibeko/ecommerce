import { Router } from "express"
import authBl from "../bl/auth.bl.js"

const AuthBl = new authBl()
const router = Router()

router.post("/login", async (req, res) => {
  const { email, password } = req.body

  const result = await AuthBl.login(email, password)

  res.status(result.status).json({
    message: result.message,
    data: result.data
  })
})

router.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  const result = await AuthBl.register(firstName, lastName, email, password)

  res.status(result.status).json({
    message: result.message,
    data: result.data
  })
})


export default router