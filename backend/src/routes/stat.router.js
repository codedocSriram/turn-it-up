import express from "express";

const statRouter = express.Router();

statRouter.get("/", (req, res) => {
    res.send("stats Page");
});

export default statRouter;
