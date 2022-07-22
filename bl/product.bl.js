import ProductServices from "../services/product.service.js";
import { result } from "../util/response.js"

const productServices = new ProductServices()

export default class ProductBl {

  async create(name, image, price, about, sellerId, categoryId) {
    try {
      const product = await productServices.create(name, image, price, about, sellerId, categoryId)
      return result(200, "Product created", product)
    }
    catch(err) {
      return result(500, "Internal Server Error", err)
    }
  }


  async findAll() {
    try {
      const product = await productServices.findAll()
      return result(200, "All producties retrived", product)
    }
    catch(err) {
      return result(500, "Internal Server Error", err)
    }
  }


  async findBySeller(sellerId) {
    try {
      const product = await productServices.findBySeller(sellerId)
      return result(200, "All producties retrived", product)
    }
    catch(err) {
      return result(500, "Internal Server Error", err)
    }
  }


  async findByCategory(categoryId) {
    try {
      const product = await productServices.findByCategory(categoryId)
      return result(200, "All producties retrived", product)
    }
    catch(err) {
      return result(500, "Internal Server Error", err)
    }
  }


  async update(id, userId, name, image, price, about, categoryId) {
    try {

      const ownerProduct = await productServices.findByOwner(userId, id)

      if (!ownerProduct) {
        return result(400, "Product not exists")
      }

      const product = await productServices.update(id, name, image, price, about, categoryId)
      return result(200, "Product updated", product)
    }
    catch(err) {
      return result(500, "Internal Server Error", err)
    }
  }


  async delete(id, userId) {
    try {

      const ownerProduct = await productServices.findByOwner(userId, id)

      if (!ownerProduct) {
        return result(400, "Product not exists")
      }

      const product = await productServices.delete(id)
      return result(200, "Product updated", product)
    }
    catch(err) {
      return result(500, "Internal Server Error", err)
    }
  }

}