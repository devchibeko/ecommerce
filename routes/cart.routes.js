// import { prisma } from "../config/database.js";
// import CartBl from "../bl/cart.bl.js";
// import { userAuthorization, adminAuthorization, uaAuthorization } from '../middlewares/authorization.js'
// import { Router } from "express";

// const router = Router()
// const cartBl = new CartBl()

// router.post('/cart', uaAuthorization, async (req, res) => {
//   const { items } = req.body
//   const userId = res.locals.user.id

//   const result = await cartBl.update(items, userId)

//   res.status(result.status).json({
//     message: result.message,
//     category: result.data
//   })
// })



// export default router