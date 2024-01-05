
import mongoose from 'mongoose';

const replySchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Reply = mongoose.model('Reply', replySchema);

export default Reply;
