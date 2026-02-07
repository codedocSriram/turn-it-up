import express from "express";
import {
    createSong,
    deleteSong,
    createAlbum,
    deleteAlbum,
    checkAdmin,
} from "../controller/admin.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
const adminRouter = express.Router();

//every request will first pass through these two middlewares
adminRouter.use(protectRoute, requireAdmin);

adminRouter.get("/check", checkAdmin);
adminRouter.post("/songs", createSong);
adminRouter.post("/albums", createAlbum);
adminRouter.delete("/songs/:id", deleteSong);
adminRouter.delete("/albums/:id", deleteAlbum);
export default adminRouter;
