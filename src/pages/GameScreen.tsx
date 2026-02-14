import React from 'react';
import { useGameStore } from '../store/gameStore';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import clsx from 'clsx';

export const GameScreen: React.FC = () => {
  const { cards, flipCard, moves, restartGame, difficulty } = useGameStore();

  const gridCols = {
    easy: 'grid-cols-3 sm:grid-cols-4',
    medium: 'grid-cols-4',
    hard: 'grid-cols-4 sm:grid-cols-6',
  };

  return (
    <div className="flex flex-col items-center w-full max-w-4xl">
      <div className="flex justify-between items-center w-full mb-8 bg-white p-4 rounded-xl shadow-sm">
        <div className="flex flex-col">
          <span className="text-sm text-slate-500 font-medium">Moves</span>
          <span className="text-2xl font-bold text-indigo-600">{moves}</span>
        </div>

        <Button variant="outline" size="sm" onClick={restartGame}>
          Restart
        </Button>
      </div>

      <div
        className={clsx(
          "grid gap-4 w-full",
          gridCols[difficulty]
        )}
      >
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={flipCard} />
        ))}
      </div>
    </div>
  );
};
