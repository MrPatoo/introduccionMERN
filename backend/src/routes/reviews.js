import express from "express";
import reviewController from "../controllers/reviewsController.js";

const router = express.Router();

router.route("/")
.get(reviewController.getReviews)
.post(reviewController.postReviews)

router.route("/:id")
.put(reviewController.postReviews)
.delete(reviewController.deleteReviews)

export default router;