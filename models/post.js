import mongoose, { Schema } from "mongoose";
import Joi from "joi";
const postSchema = new Schema({});
const Post = mongoose.model("post", postSchema);
