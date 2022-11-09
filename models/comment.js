import mongoose, { Schema } from "mongoose";
import Joi from "joi"
const commentSchema = new Schema({
  text: {
    type: String,
    required: true,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "user",
    require: true,
  },
  post: {
    type: Schema.Types.ObjectId,
    ref: "post",
    require: true,
  },
});
const Comment = mongoose.model("comment", commentSchema);