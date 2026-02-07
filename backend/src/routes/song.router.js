import express from "express";
import {
    getAllSongs,
    getFeaturedSongs,
} from "../controller/song.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
const songRouter = express.Router();

songRouter.get("/", protectRoute, requireAdmin, getAllSongs);
songRouter.get("/featured", getFeaturedSongs);

export default songRouter;
