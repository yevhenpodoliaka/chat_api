import { User } from "../../models/user.js";

export const signOut = async (req, res) => {
     const { _id } = req.user;
     await User.findByIdAndUpdate(_id, { token: null });
     res.status(204).json({ code: 204 });
}