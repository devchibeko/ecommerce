import ProductService from "../services/product.service.js";
import { result } from "../util/response.js"

const productService = new ProductSer()


export default class ProductBl {

  async create(name, image, price, about) {
    try {
      const product = await productService.create(name, image, price, about)
      return result(200, "Product created", product)
    }
    catch (err) {
      return result(500, "Internal Server Error", err)
    }
  }

  async productAll() {
    try {
      const product = await productService.productAll()
      return result(200, "All producties retrived", product)
    }
    catch (err) {
      return result(500, "Internal Server Error", err)
    }
  }

  async update(id, name) {
    try {
      const product = await productService.update(id, name)
      return result(200, "Product updated", product)
    }
    catch (err) {
      return result(500, "Internal Server Error", err)
    }
  }

  async delete(id) {
    try {
      const product = await productService.delete(id)
      return result(200, "Product deleted", product)
    }
    catch (err) {
      return result(500, "Internal Server Error", err)
    }
  }
}