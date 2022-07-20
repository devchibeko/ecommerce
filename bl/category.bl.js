import CategoryService from "../services/category.service.js";
import { result } from "../util/response.js"

const categoryService = new CategoryService()

export default class CategoryBl {

  async create(name) {
    try {
      const category = await categoryService.create(name)
      return result(200, "Category created", category)
    }
    catch (err) {
      return result(500, "Internal Server Error", err)
    }
  }

  async findAll() {
    try {
      const categories = await categoryService.findAll()
      return result(200, "All categories retrived", categories)
    }
    catch (err) {
      return result(500, "Internal Server Error", err)
    }
  }

  async update(id, name) {
    try {
      const category = await categoryService.update(id, name)
      return result(200, "Category updated", category)
    }
    catch (err) {
      return result(500, "Internal Server Error", err)
    }
  }

  async delete(id) {
    try {
      const category = await categoryService.delete(id)
      return result(200, "Category deleted", category)
    }
    catch (err) {
      return result(500, "Internal Server Error", err)
    }
  }
}