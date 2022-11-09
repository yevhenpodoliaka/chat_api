import { Post } from "../../models/post.js";

export const deletePost = async (req, res) => {
    const {_id}=req.user
    const { postId } = req.params
    const post = await Post.findOneAndDelete({ _id: postId, owner: _id });
    if (!post) {
      const error = new Error(`post with id=${postId} not found`);
      error.status = 404;
      throw error;   
    }
    res.status(201).json({
      status: "success",
      code: 200,
      message: "post deleted",
    });
    

}
