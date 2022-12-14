import jwt from "jsonwebtoken";
import dotenv from "dotenv"
dotenv.config()
import { User } from "../models/user.js";
const { SECRET_KEY } = process.env;

export const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(" ");

  try {
    if (bearer !== "Bearer") {
      const error = new Error("Not authorized");
      error.status = 401;
      throw error;
    }
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) {
      const error = new Error("Not authorized");
      error.status = 401;
      throw error;
    }
    req.user = user;
    next();
  } catch (error) {
    if (
      error.message === "invalid signature" ||
      error.message === "invalid token" ||
      error.name === "TokenExpiredError"
    ) {
      error.status = 401;
    }
    next(error);
  }
};
