import express from "express";
import {
    createSong,
    deleteSong,
    createAlbum,
} from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
const adminRouter = express.Router();

adminRouter.post("/songs", protectRoute, requireAdmin, createSong);
adminRouter.post("/albums", protectRoute, requireAdmin, createAlbum);
adminRouter.delete("/songs/:id", protectRoute, requireAdmin, deleteSong);
export default adminRouter;
