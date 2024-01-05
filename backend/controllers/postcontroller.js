import Post from "../models/postmodel.js";

export const createPost = async (req, res) => {
  try {
    const { title, content, image } = req.body;

    const newPost = new Post({
      title,
      content,
      image,
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

// Get Post

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find()
      .populate({
        path: "comments",
        populate: {
          path: "replies",
          model: "Reply",
          populate: {
            path: "author",
            model: "User",
            select: "firstName lastName",
          },
        },
      })
      .populate({
        path: "likes.users",
        model: "User",
        select: "firstName lastName", // Optionally select specific fields
      })
      .populate("author", "firstName lastName");

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

// Like && Dislike The Post

export const likePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    const userId = req.userId;

    // Find the post by ID
    const post = await Post.findById(postId);

    // Check if the post exists
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Check if the user has already liked the post
    const isLiked = post.likes.users.includes(userId);

    if (isLiked) {
      // Dislike the post
      post.likes.count -= 1;
      post.likes.users = post.likes.users.filter(
        (id) => id.toString() !== userId
      );
      res.status(200).json({ message: "Post disliked successfully", post });
    } else {
      // Like the post
      post.likes.count += 1;
      post.likes.users.push(userId);
      res.status(200).json({ message: "Post liked successfully", post });
    }

    // Save the updated post
    await post.save();
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error liking/disliking post", error: error.message });
  }
};
