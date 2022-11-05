import mongoose, { Schema } from "mongoose";
import Joi from "joi"
const commentSchema = new Schema({})
const User = mongoose.model("comment", commentSchema);