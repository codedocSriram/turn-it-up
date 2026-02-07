import { clerkClient } from "@clerk/express";

export const protectRoute = async (req, res, next) => {
    try {
        if (!req.auth.userId) {
            return res
                .status(401)
                .json({ success: false, message: "Unauthorized request!" });
        }
        next();
    } catch (error) {
        console.log("Error in protectRoute:", error.message);
        next(error);
    }
};

export const requireAdmin = async (req, res, next) => {
    try {
        const currentUser = await clerkClient.users.getUser(req.auth.userId);
        const isAdmin =
            process.env.ADMIN_EMAIL ===
            currentUser.primaryEmailAddress?.emailAddress;

        if (!isAdmin) {
            return res.status(403).json({
                success: false,
                message: "Unautherized - not an Admin",
            });
        }

        next();
    } catch (error) {
        console.log("Error in requireAdmin:", error.message);
        next(error);
    }
};
