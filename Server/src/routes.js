import express from 'express';
import GameUser from './gameUserModel.js';

const router = express.Router();

router.post('/gameusers', async (req, res) => {
  const { username, score, rank } = req.body;

  if (!username || !score || !rank) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await GameUser.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const newUser = new GameUser({ username, score, rank });
    await newUser.save();

    res.status(201).json({ message: 'Game user created successfully' });
  } catch (error) {
    console.error('Error creating game user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.delete('/gameusers/:username', async (req, res) => {
  try {
    const { username } = req.params;
    const result = await GameUser.deleteOne({ username });

    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Game user not found' });
    }

    res.status(200).json({ message: 'Game user removed successfully' });
  } catch (error) {
    console.error('Error removing game user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/gameusers', async (_req, res) => {
  try {
    const gameUsers = await GameUser.find();
    res.status(200).json(gameUsers);
  } catch (error) {
    console.error('Error fetching game users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
