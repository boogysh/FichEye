import express from "express";

import { postMessage, getMessages } from "../controllers/messages.js";

const router = express.Router();

//POST
router.post("/", postMessage);

//GET
router.get("/", getMessages);

export default router;