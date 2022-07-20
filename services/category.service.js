import { prisma } from "../config/database.js";

export default class CategoryService {

  async findAll() {
    return prisma.category.findMany()
  }

  async create(name) {
    return prisma.category.create({
      data: { name }
    })
  }

  async update(id, name) {
    return prisma.category.update({
      data: { name },
      where: { id }
    })
  }

  async delete(id) {
    return prisma.category.delete({
      where: { id }
    })
  }
}