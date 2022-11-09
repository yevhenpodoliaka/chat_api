import express from "express";

import { validation } from "../middlewares/validation.js";
import { ctrlWrapper } from "../middlewares/ctrlWrapper.js";
import { auth } from "../middlewares/auth.js";
import { parser } from "../middlewares/cloundinary.js";

import { joiPostSchema } from "../models/post.js";

import{addPost}from "../controllers/posts/addPost.js"
import { getAllPosts } from "../controllers/posts/getAllPost.js";
import { deletePost } from "../controllers/posts/deletePost.js";

const router = express.Router();

router.get("/",auth,ctrlWrapper(getAllPosts))
router.post(
  "/add",
  auth,
  validation(joiPostSchema),
  parser.single("imagePost"),
  ctrlWrapper(addPost)
);
router.delete("/:postId", auth, ctrlWrapper(deletePost));

export default router;
