import express from "express";

import { authCallback } from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/callback", authCallback);

export default authRouter;
