import md5 from 'md5'
import { prisma } from "../config/database.js"

class UserService {

  create(firstName, lastName, email, password) {

    let token = md5(`${email}:${password}`)

    return prisma.user.create({
      data: { firstName, lastName, email, password, token }
    })

  }

  findByEmail(email) {
    return prisma.user.findUnique({
      where: { email }
    })
  }

  findByToken(token) {
    return prisma.user.findUnique({
      where: { token }
    })
  }

}

export default UserService