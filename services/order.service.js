import { prisma } from "../config/database.js";

export default class OrderService {

  async create(userId) {
    return prisma.order.create({
      data: {
        user: {
          connect: {
            id: userId
          }
        }
      }
    })
  }

}