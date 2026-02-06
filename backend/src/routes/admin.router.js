import express from "express";
import { getAdmin } from "../controller/admin.controller.js";
const adminRouter = express.Router();

adminRouter.get("/", getAdmin);

export default adminRouter;
