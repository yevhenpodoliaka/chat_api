import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";
dotenv.config();
import   {User} from '../../models/user.js'

const { SECRET_KEY } = process.env;

export const signUp = async (req, res) => {
    const { password, email, name } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const error = new Error(`user with email:${email} already exist`);
      error.status = 409;
      throw error;
    }
    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    await User.create({
      name,
      email,
      password: hashedPassword,
     
    });
    const registeredUser = await User.findOne({ email });
    const payload = {
      id: registeredUser._id,
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    await User.findByIdAndUpdate(registeredUser._id, { token });
    res.status(201).json({
      status: "success",
      code: 201,
      data: {
        name: registeredUser.name,
        email: registeredUser.email,
        subscription: registeredUser.subscription,
      },

      token,
    });
 }
