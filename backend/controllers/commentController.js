import Comment from '../models/commentmodel.js';
import Post from '../models/postmodel.js';

export const createComment = async (req, res) => {
  try {
    const { content } = req.body;
    const postId = req.params.postId;

    const newComment = new Comment({
      content,
      post: postId,
      author: req.userId,
    });

    const comment = await newComment.save();

    await Post.findByIdAndUpdate(postId, {
      $push: { comments: comment._id },
    });

    res.status(201).json({ message: 'Comment created successfully', comment });
  } catch (error) {
    res.status(400).json({ message: 'Error creating comment', error: error.message });
  }
};

