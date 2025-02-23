import express from "express";
import {
  login,
  register,
  logout,
  verifyemail,
  forgotPassword,
  resetPassword,
  checkAuth
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", register);
router.post("/login", login);
router.post("/logout", logout);

router.post("/verify-email", verifyemail);
router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

export default router;
