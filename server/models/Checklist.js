const mongoose = require('mongoose');

const checklistItemSchema = new mongoose.Schema({
  category: { type: String, required: true },
  title: { type: String, required: true },
  checked: { type: Boolean, default: false },
  notes: { type: String, default: '' },
}, { _id: true });

const checklistSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  items: [checklistItemSchema],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

checklistSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Checklist', checklistSchema);
