import express from "express";

import{current} from "../controllers/users/current.js"

import { auth } from "../middlewares/auth.js"
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";


const router = express.Router();

router.get("/current", auth, ctrlWrapper(current));

export default router;
