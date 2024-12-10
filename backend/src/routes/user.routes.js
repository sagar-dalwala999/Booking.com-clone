import express from "express";
import { getAuthUser } from "../controllers/user.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.route("/get-user").get(authMiddleware, getAuthUser);

export default router;
