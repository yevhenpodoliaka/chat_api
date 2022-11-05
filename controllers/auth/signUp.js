import bcrypt from 'bcryptjs';
import jwt from'jsonwebtoken';
import   {User} from '../../models/User.js'

const { SECRET_KEY } = process.env;

export const signUp = async (req, res) => { }
