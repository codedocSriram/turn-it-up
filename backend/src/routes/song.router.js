import express from "express";
import {
    getAllSongs,
    getFeaturedSongs,
    getMadeForYouSongs,
    getTrendingSongs,
} from "../controller/song.controller.js";
import { protectRoute, requireAdmin } from "../middleware/auth.middleware.js";
const songRouter = express.Router();

songRouter.get("/", protectRoute, requireAdmin, getAllSongs);
songRouter.get("/featured", getFeaturedSongs);
songRouter.get("/made-for-you", getMadeForYouSongs);
songRouter.get("/trending", getTrendingSongs);
export default songRouter;
