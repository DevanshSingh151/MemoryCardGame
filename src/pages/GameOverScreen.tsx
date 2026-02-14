import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const GameOverScreen: React.FC = () => {
  const { moves, setScreen, restartGame } = useGameStore();

  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-4xl font-bold text-slate-800 mb-2">You Won!</h2>
        <p className="text-slate-500 mb-8">Great memory skills!</p>

        <div className="bg-indigo-50 rounded-xl p-6 mb-8">
          <span className="block text-sm text-indigo-600 font-semibold uppercase tracking-wider">
            Total Moves
          </span>
          <span className="block text-5xl font-bold text-indigo-900 mt-2">
            {moves}
          </span>
        </div>

        <div className="flex flex-col space-y-3">
          <Button onClick={restartGame} size="lg">
            Play Again
          </Button>

          <Button variant="outline" onClick={() => setScreen('welcome')}>
            Back to Menu
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
