import express from "express";

const authRouter = express.Router();

authRouter.get("/", (req, res) => {
    res.send("Auth Router GET method");
});

export default authRouter;
