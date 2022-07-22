import { prisma } from "../config/database.js"

export default class ProductServices {

  async findAll() {
    return prisma.product.findMany()
  }

  async findByCategory(categoryId) {
    return prisma.product.findMany({
      where: {
        categoryId
      }
    })
  }

  async findByOwner(sellerId, productId) {
    return prisma.product.findFirst({
      where: {
        id: productId,
        sellerId
      }
    })
  }

  async findBySeller(sellerId) {
    return prisma.product.findFirst({
      where: {
        sellerId
      }
    })
  }

  async create(name, image, price, about, sellerId, categoryId) {
    return prisma.product.create({
      data: {
        name,
        image,
        price,
        about,
        seller: {
          connect: {
            id: sellerId
          }
        },
        category: {
          connect: {
            id: categoryId
          }
        }
      }
    })
  }


  async update(id, name, image, price, about, categoryId) {
    return prisma.product.update({
      where: {
        id
      },
      data: {
        name,
        image,
        price,
        about,
        category: {
          connect: {
            id: categoryId
          }
        }
      }
    })
  }


  async delete(id) {
    return prisma.product.delete({
      where: {
        id
      }
    })
  }

}