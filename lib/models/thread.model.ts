import mongoose from 'mongoose';

const threadSchema = new mongoose.Schema({
  text: { type: String, require: true },
  author: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    require: true,
  },
  community: {
    type: mongoose.Schema.ObjectId,
    ref: 'Community',
  },
  createAt: {
    type: Date,
    default: Date.now,
  },
  parentId: {
    type: String,
  },
  children: [
    {
      type: mongoose.Schema.ObjectId,
      ref: 'Thread',
    }
  ]
});

const Thread = mongoose.models.Thread || mongoose.model('Thread', threadSchema);

export default Thread;
