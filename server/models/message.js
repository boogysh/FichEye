import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }, // max: 50, unique: true
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);

export default Message;
