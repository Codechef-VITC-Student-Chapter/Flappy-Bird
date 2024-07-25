import express from 'express';
import GameUser from './gameUserModel.js';


const router = express.Router();

router.post('/gameusers', async (req, res) => {
  const { username, score } = req.body;

  if (!username || !score) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const existingUser = await GameUser.findOne({ username });
    if (existingUser) {
      if (score > existingUser.score) {
        await GameUser.updateOne({ username }, { score });
        return res.status(200).json({ message: 'User score updated successfully' });
      } else {
        return res.status(200).json({ message: 'New score is not higher than existing score' });
      }
    }else{
      const newUser = new GameUser({ username, score});
      await newUser.save();
      res.status(201).json({ message: 'Game user created successfully' });
    }
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
    const users = await GameUser.find().sort({ score: -1 }).limit(100);
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching game users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;
