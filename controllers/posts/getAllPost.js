import { Post } from "../../models/post.js";

export const getAllPosts = async (req, res) => {
  const posts = await Post.find({}).populate("owner", {
    name: true,
    email:true
  });
  res.status(201).json({
    status: "success",
    code: 201,
    data: { posts },
  });
};
