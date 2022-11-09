import { Post } from "../../models/post.js";

export const addPost = async (req, res) => {
  const { _id } = req.user;
  
  const data = req.file ? { ...req.body, imagePost: req.file.path } : req.body;
 

  const post = await Post.create({ ...data, owner: _id })

  res.status(201).json({
    status: "success",
    code: 201,
    data: { post },})

};

