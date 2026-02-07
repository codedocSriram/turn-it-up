import express from "express";
import { getAlbumById, getAllAlbums } from "../controller/album.controller.js";

const albumRouter = express.Router();

albumRouter.get("/", getAllAlbums);
albumRouter.get("/:albumId", getAlbumById);

export default albumRouter;
