import express from "express";

const albumRouter = express.Router();

albumRouter.get("/", (req, res) => {
    res.send("album Page");
});

export default albumRouter;
