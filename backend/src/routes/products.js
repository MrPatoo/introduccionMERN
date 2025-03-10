//este archivo sirve para definir que metodos del crud va tener mi ruta

import express from "express";
import productsController from "../controllers/productsController.js";

const router = express.Router()

//son los metodos que va tener
router.route("/")
.get(productsController.getProducts)
.post(productsController.insertProducts)

router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProducts)

export default router;