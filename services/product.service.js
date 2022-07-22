import { prisma } from "../config/database.js";


export default class ProductService {
  async productAll() {
    return prisma.product.findMany()
  }

  async create(name, image, price, about) {
    return prisma.product.create({
      data: { name, image, price, about }
    })
  }

  async update(id, name) {
    return prisma.product.update({
      data: { name },
      where: { id }
    })
  }

  async delete(id) {
    return prisma.product.delete({
      where: { id }
    })
  }

  async findBySeller(sellerId) {
    return prisma.product.findUnique({
      where: { sellerId }
    })
  }

  async findByCotegory(categoryId) {
    return prisma.product.findUnique({
      where: { categoryId }
    })
  }
}