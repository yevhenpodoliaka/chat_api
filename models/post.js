import mongoose, { Schema } from "mongoose";
import Joi from "joi";
const postSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
    imagePost: {
      type: String,
      default: "",
    },
  },
  { versionKey: false, timestamps: true }
);

 const joiPostSchema = Joi.object({
   text: Joi.string(),
   imagePost: Joi.string()
 });
const Post = mongoose.model("post", postSchema);

export { Post, joiPostSchema };
