import mongoose from 'mongoose';

const gameUserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  score: { type: Number, required: true },
  rank: { type: Number, required: true }
});

const GameUser = mongoose.model('GameUser', gameUserSchema);

export default GameUser;
