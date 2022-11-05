import mongoose, { Schema } from "mongoose";
import Joi from "joi";
const userSchema = new Schema({});
const User = mongoose.model("user", userSchema);
