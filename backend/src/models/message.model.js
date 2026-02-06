import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: String,
            required: true,
        }, //will set Clerk urser ID as senderId
        receiverId: {
            type: String,
            required: true,
        }, //will set Clerk urser ID as senderId
        content: {
            type: String,
            required: true,
        },
    },
    { timestamps: true },
);

export const Message = mongoose.model("Message", messageSchema);
