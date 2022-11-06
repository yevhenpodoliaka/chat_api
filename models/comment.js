import mongoose, { Schema } from "mongoose";
import Joi from "joi"
const commentSchema = new Schema({})
const Comment = mongoose.model("comment", commentSchema);