import React from 'react';
import { useGameStore, Difficulty } from '../store/gameStore';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const WelcomeScreen: React.FC = () => {
  const { difficulty, setDifficulty, startGame } = useGameStore();

  const difficulties: Difficulty[] = ['easy', 'medium', 'hard'];

  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 mb-4">
          Memory Match
        </h1>
        <p className="text-xl text-slate-600">Find all the matching pairs!</p>
      </motion.div>

      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-lg font-semibold text-slate-700 mb-4">Select Difficulty</h2>
        <div className="flex justify-center space-x-4 mb-8">
          {difficulties.map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`px-4 py-2 rounded-lg capitalize font-medium transition-colors ${
                difficulty === d
                  ? 'bg-indigo-100 text-indigo-700 border-2 border-indigo-500'
                  : 'bg-slate-50 text-slate-500 border-2 border-transparent hover:bg-slate-100'
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        <Button onClick={startGame} size="lg" className="w-full">
          Start Game
        </Button>
      </div>
    </div>
  );
};
