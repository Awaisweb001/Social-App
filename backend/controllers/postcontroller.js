import Post from "../models/postmodel.js";

export const createPost = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPost = new Post({
      title,
      content,
      author: req.userId,
    });

    const post = await newPost.save();

    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating post", error: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("comments");

    res.status(200).json({ message: "Posts retrieved successfully", posts });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error retrieving posts", error: error.message });
  }
};

// Delete Post

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.postId;

    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.author.toString() !== req.userId) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this post" });
    }

    await Post.deleteOne({ _id: postId });

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error deleting post", error: error.message });
  }
};
