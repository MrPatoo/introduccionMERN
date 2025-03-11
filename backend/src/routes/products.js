//este archivo sirve para definir que metodos del crud va tener mi ruta

import express from "express";
import productsController from "../controllers/productsController.js";

const router = express.Router()

//son los metodos que va tener products
router.route("/")
.get(productsController.getProducts)
.post(productsController.insertProducts)

//estos van a tener un id, por eso se pone ("/:id")
router.route("/:id")
.put(productsController.updateProducts)
.delete(productsController.deleteProducts)
        //se manda a llamar el metodo en la carpeta controllers
export default router;