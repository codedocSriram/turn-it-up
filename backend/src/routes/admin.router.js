import express from "express";

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
    res.send("Admin router with GET method");
});

export default adminRouter;
