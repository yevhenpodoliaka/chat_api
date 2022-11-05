import mongoose, { Schema } from "mongoose";
import Joi from "joi";
const postSchema = new Schema({});
const User = mongoose.model("post", postSchema);
