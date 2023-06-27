import Message from "../models/message.js";

export const postMessage = async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;
    const newMessage = new Message({
      firstName,
      lastName,
      email,
      message,
    });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getMessages = async (req, res) => {
  Message.find()
    .sort({ createdAt: -1 })
    .then((users) => res.status(200).json(users))
    .catch((error) => res.status(400).json({ error }));
};
