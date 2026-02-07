import express from "express";
import dotenv from "dotenv";
import { clerkMiddleware } from "@clerk/express";
import fileUpload from "express-fileupload";
import path from "path";
import { connectDB } from "./lib/db.js";

import userRouter from "./routes/user.router.js";
import authRouter from "./routes/auth.router.js";
import adminRouter from "./routes/admin.router.js";
import songRouter from "./routes/song.router.js";
import albumRouter from "./routes/album.router.js";
import statRouter from "./routes/stat.router.js";

dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(clerkMiddleware()); // this will add auth to req obj => req.auth.userId

app.use(
    fileUpload({
        useTempFies: true,
        tempFileDir: path.join(__dirname, "temp"),
        createParentPath: true,
        limits: {
            fileSize: 10 * 1024 * 1024, //Max file size limit:10mb
        },
    }),
);

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/admin", adminRouter);
app.use("/api/songs", songRouter);
app.use("/api/albums", albumRouter);
app.use("/api/stats", statRouter);

//centralized error handling
app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message:
            process.env.NODE_ENV === "production"
                ? "Internal Server error"
                : err.message,
    });
});

app.listen(PORT, () => {
    connectDB();
    console.log("Server is running in PORT:", PORT);
});
