import express from "express";
import passwordRecoveryController from "../controllers/passwordRecoveryController.js";

const router = express.Router();

router.route("/requestCode").post(passwordRecoveryController.requestCode);
router.route("/verifyCode").post(passwordRecoveryController.verfiedCode);
router.route("/newPassword").post(passwordRecoveryController.newPassword);

export default router;
