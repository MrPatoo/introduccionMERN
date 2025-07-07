import express from "express"
import salesController from "../controllers/salesController.js"

const router = express.Router();

router.route("/")
.get(salesController.getSales)
.post(salesController.postSales)

router.route("/getSalesByCategory")
.get(salesController.getSalesByCategory)

router.route("/getMostSalledProducts")
.get(salesController.getMostSalledProducts)

router.route("/getTotalEarnings")
.get(salesController.getTotalEarnings)

export default router;