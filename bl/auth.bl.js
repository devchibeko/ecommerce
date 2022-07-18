import { userService } from "../services/index.js"

class AuthBl {

  async login(email, password) {
    try {
      const user = await userService.findByEmail(email)

      if (!user) {
        return result(400, "User not found.")
      }

      if (user.password !== password) {
        return result(400, "Invalid password.")
      }

      const data = {
        fristName: user.fristName,
        lastName: user.lastName,
        email: user.email,
        token: user.token
      }

      return result(200, "Success login", data)
    }
    catch (err) {
      return result(500, "Internal Server Error: " + err)
    }
  }



  async register(fristName, lastName, email, password) {
    try {
      const oldUser = await userService.findByEmail(email)

      if (oldUser) {
        return result(400, "User already exists")
      }

      const newUser = await userService.create(fristName, lastName, email, password)

      const data = {
        fristName: newUser.fristName,
        lastName: newUser.lastName,
        email: newUser.email,
        token: newUser.token
      }

      return result(200, "Successfilly redistered", data)

    }
    catch (err) {
      return result(500, "Internal Server Error: " + err)
    }
  }
}


function result(status, message, data) {
  return {
    status, message, data
  }
}

export default AuthBl