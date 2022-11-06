import express from "express"

import { validation } from "../middlewares/validation.js"
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js"
import { auth } from "../middlewares/auth.js"

import { signUp } from "../controllers/auth/signUp.js"
import { signIn } from "../controllers/auth/signIn.js"
import { signOut } from "../controllers/auth/signOut.js"

import { joiRegisterSchema, joiLoginSchema } from "../models/user.js";

const router = express.Router()

router.post("/sign-up",validation(joiRegisterSchema),ctrlWrapper(signUp))
router.post("/sign-in",validation(joiLoginSchema),ctrlWrapper(signIn))
router.post("/sign-out",auth,ctrlWrapper(signOut))

export default router