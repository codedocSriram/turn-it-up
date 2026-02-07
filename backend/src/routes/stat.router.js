import express from "express";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
import { getStats } from "../controller/stat.controller.js";

const statRouter = express.Router();

statRouter.get("/", protectRoute, requireAdmin, getStats);

export default statRouter;
