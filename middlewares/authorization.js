import { Role } from '@prisma/client'
import UserService from '../services/user.service.js'

const userService = new UserService()

export const userAuthorization = authorization([Role.USER])
export const adminAuthorization = authorization([Role.ADMIN])
export const uaAuthorization = authorization([Role.USER, Role.ADMIN])


function authorization(roles) {

  return async function (req, res, next) {

    const authorization = req.header('Authorization')

    if (!authorization) {
      return res.status(401).json({
        message: 'Unauthorized'
      })
    }
    // array destruction
    const [method, token] = authorization.split(' ');

    const user = await userService.findByToken(token)

    if (!user) {
      return res.status(401).json({
        message: 'Unauthorized'
      })
    }

    if (roles.includes(user.role)) {
      res.locals.user = user
      next()
    }
    else {
      res.status(401).json({
        message: "Permission denied."
      })
    }

  }
}



export default authorization