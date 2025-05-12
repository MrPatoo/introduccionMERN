import blogController from "../controllers/blogController.js"
import express from "express"
import multer from "multer";

const router = express.Router()

//confugurar una carpeta rlobal que guarde las imagenes
const upload = multer({dest: "public/"})

router.route("/")
.get(blogController.getAllBlog)
.post(upload.single("image"), blogController.createBlog)

export default router;