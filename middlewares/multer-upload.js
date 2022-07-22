import multer from "multer";
import { nanoid } from "nanoid";

export default multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './storage')
    },
    filename: (req, file, cb) => {
      cb(null, nanoid())
    }
  })
})