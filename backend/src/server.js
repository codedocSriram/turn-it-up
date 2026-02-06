import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js";

import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.router.js";
import adminRouter from "./routes/admin.router.js";
import songRouter from "./routes/song.router.js";
import albumRouter from "./routes/album.router.js";
import statRouter from "./routes/stat.router.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/songs", songRouter);
app.use("/api/albums", albumRouter);
app.use("/api/stats", statRouter);

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running in PORT:", PORT);
});
