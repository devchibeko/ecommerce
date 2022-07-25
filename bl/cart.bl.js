// import CartService from "../services/cart.service.js"
// import { result } from "../util/response.js"

// const cartService = CartService()

// export default class CartBl {

//   async add(userId, items) {
//     try {
//       const cart = await cartService.add(userId, items)
//       return result(200, "Cart created", cart)
//     }
//     catch (err) {
//       return result(500, "Internal Server Error", err)
//     }
//   }


//   async findUserCarts(userId) {
//     try {
//       const cart = await cartService.findUserCarts(userId)
//       return result(200, "Cart created", cart)
//     }
//     catch (err) {
//       return result(500, "Internal Server Error", err)
//     }
//   }


//   async findByOwner(userId) {
//     try {
//       const cart = await cartService.findByOwner(userId)
//       return result(200, "Cart created", cart)
//     }
//     catch (err) {
//       return result(500, "Internal Server Error", err)
//     }
//   }


//   async deleteOne(cartId) {
//     try {
//       const cart = await cartService.deleteOne(cartId)
//       return result(200, "Cart created", cart)
//     }
//     catch (err) {
//       return result(500, "Internal Server Error", err)
//     }
//   }


//   async update(cartId, count) {
//     try {
//       const cart = await cartService.update(cartId, count)
//       return result(200, "Cart created", cart)
//     }
//     catch (err) {
//       return result(500, "Internal Server Error", err)
//     }
//   }


//   async deleteUserCarts(userId) {
//     try {
//       const cart = await cartService.deleteUserCarts(userId)
//       return result(200, "Cart created", cart)
//     }
//     catch (err) {
//       return result(500, "Internal Server Error", err)
//     }
//   }

// } 