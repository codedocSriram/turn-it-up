import express from "express";

const songRouter = express.Router();

songRouter.get("/", (req, res) => {
    res.send("Songs Page");
});

export default songRouter;
