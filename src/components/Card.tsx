import React from 'react';
import { motion } from 'framer-motion';
import { Card as CardType } from '../store/gameStore';
import clsx from 'clsx';

interface CardProps {
  card: CardType;
  onClick: (id: string) => void;
}

export const Card: React.FC<CardProps> = ({ card, onClick }) => {
  return (
    <div
      className="relative w-full aspect-[3/4] perspective-1000"
      onClick={() => onClick(card.id)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d cursor-pointer"
        animate={{ rotateY: card.isFlipped ? 180 : 0 }}
        transition={{ duration: 0.4 }}
      >
        {/* Front */}
        <div
          className={clsx(
            "absolute w-full h-full backface-hidden rounded-xl shadow-md",
            "bg-gradient-to-br from-indigo-500 to-purple-600 border-2 border-white/20",
            "flex items-center justify-center"
          )}
        >
          <span className="text-4xl opacity-50">?</span>
        </div>

        {/* Back */}
        <div
          className={clsx(
            "absolute w-full h-full backface-hidden rounded-xl shadow-md rotate-y-180",
            "bg-white border-2 border-indigo-100",
            "flex items-center justify-center"
          )}
        >
          <span className="text-5xl select-none">{card.emoji}</span>
        </div>
      </motion.div>
    </div>
  );
};
