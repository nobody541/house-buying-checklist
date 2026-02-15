const express = require('express');
const Checklist = require('../models/Checklist');
const defaultChecklist = require('../config/defaultChecklist');
const auth = require('../middleware/auth');

const router = express.Router();

function buildDefaultItems() {
  const items = [];
  for (const category of defaultChecklist) {
    for (const item of category.items) {
      items.push({
        category: category.category,
        title: item.title,
        checked: false,
        notes: '',
      });
    }
  }
  return items;
}

// Get default checklist (no auth required — for guest users)
router.get('/defaults', (req, res) => {
  res.json({ items: buildDefaultItems() });
});

// Get user's checklist (auth required)
router.get('/', auth, async (req, res) => {
  try {
    let checklist = await Checklist.findOne({ userId: req.user.id });
    if (!checklist) {
      checklist = await Checklist.create({
        userId: req.user.id,
        items: buildDefaultItems(),
      });
    }
    res.json(checklist);
  } catch (err) {
    console.error('Get checklist error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user's checklist
router.put('/', auth, async (req, res) => {
  try {
    const { items } = req.body;
    if (!items || !Array.isArray(items)) {
      return res.status(400).json({ message: 'Items array is required' });
    }
    const checklist = await Checklist.findOneAndUpdate(
      { userId: req.user.id },
      { items, updatedAt: Date.now() },
      { new: true }
    );
    if (!checklist) {
      return res.status(404).json({ message: 'Checklist not found' });
    }
    res.json(checklist);
  } catch (err) {
    console.error('Update checklist error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Reset to defaults
router.post('/reset', auth, async (req, res) => {
  try {
    const checklist = await Checklist.findOneAndUpdate(
      { userId: req.user.id },
      { items: buildDefaultItems(), updatedAt: Date.now() },
      { new: true }
    );
    if (!checklist) {
      return res.status(404).json({ message: 'Checklist not found' });
    }
    res.json(checklist);
  } catch (err) {
    console.error('Reset checklist error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
