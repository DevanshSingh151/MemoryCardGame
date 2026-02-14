import { create } from 'zustand';

export type Difficulty = 'easy' | 'medium' | 'hard';
export type GameScreen = 'welcome' | 'game' | 'gameover';

export interface Card {
  id: string;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface GameState {
  screen: GameScreen;
  difficulty: Difficulty;
  cards: Card[];
  moves: number;
  isLocked: boolean; // Prevent clicking while checking match

  setScreen: (screen: GameScreen) => void;
  setDifficulty: (difficulty: Difficulty) => void;
  startGame: () => void;
  flipCard: (cardId: string) => void;
  restartGame: () => void;
}

const EMOJIS = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼', '🐨', '🐯', '🦁', 'dV', '🦄', '🐝', '🦋', '🐞', '🐢', '🐙'];

const getGridSize = (difficulty: Difficulty) => {
  switch (difficulty) {
    case 'easy': return 6; // 3x2 or 4x3? Let's do 6 pairs (12 cards) -> 4x3
    case 'medium': return 8; // 8 pairs (16 cards) -> 4x4
    case 'hard': return 12; // 12 pairs (24 cards) -> 6x4
    default: return 6;
  }
};

const generateCards = (difficulty: Difficulty): Card[] => {
  const pairCount = getGridSize(difficulty);
  const selectedEmojis = EMOJIS.slice(0, pairCount);
  const deck = [...selectedEmojis, ...selectedEmojis].map((emoji, index) => ({
    id: `card-${index}`,
    emoji,
    isFlipped: false,
    isMatched: false,
  }));

  // Shuffle
  return deck.sort(() => Math.random() - 0.5);
};

export const useGameStore = create<GameState>((set, get) => ({
  screen: 'welcome',
  difficulty: 'easy',
  cards: [],
  moves: 0,
  isLocked: false,

  setScreen: (screen) => set({ screen }),
  setDifficulty: (difficulty) => set({ difficulty }),

  startGame: () => {
    const { difficulty } = get();
    set({
      screen: 'game',
      cards: generateCards(difficulty),
      moves: 0,
      isLocked: false,
    });
  },

  restartGame: () => {
    get().startGame();
  },

  flipCard: (cardId) => {
    const { cards, isLocked, moves } = get();

    // If locked or card already flipped/matched, ignore
    const card = cards.find(c => c.id === cardId);
    if (isLocked || !card || card.isFlipped || card.isMatched) return;

    // Flip the card
    const newCards = cards.map(c => c.id === cardId ? { ...c, isFlipped: true } : c);
    set({ cards: newCards });

    // Check for match
    const flippedCards = newCards.filter(c => c.isFlipped && !c.isMatched);

    if (flippedCards.length === 2) {
      set({ isLocked: true, moves: moves + 1 });

      const [first, second] = flippedCards;

      if (first.emoji === second.emoji) {
        // Match!
        setTimeout(() => {
          const matchedCards = newCards.map(c =>
            (c.id === first.id || c.id === second.id)
              ? { ...c, isMatched: true, isFlipped: true }
              : c
          );

          set({ cards: matchedCards, isLocked: false });

          // Check win condition
          if (matchedCards.every(c => c.isMatched)) {
            setTimeout(() => set({ screen: 'gameover' }), 500);
          }
        }, 500);
      } else {
        // No match
        setTimeout(() => {
          const resetCards = newCards.map(c =>
            (c.id === first.id || c.id === second.id)
              ? { ...c, isFlipped: false }
              : c
          );
          set({ cards: resetCards, isLocked: false });
        }, 1000);
      }
    }
  },
}));
