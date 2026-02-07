import express from "express";
import { createSong } from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
const adminRouter = express.Router();

adminRouter.get("/", protectRoute, requireAdmin, createSong);

export default adminRouter;
