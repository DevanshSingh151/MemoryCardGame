# Memory Match Game

A simple, engaging memory card game built with React, Tailwind CSS, and Zustand.

## Features

- **3 Difficulty Levels**: Easy (4x3), Medium (4x4), Hard (6x4).
- **Responsive Design**: Works on mobile and desktop.
- **Animations**: Smooth card flipping and screen transitions using Framer Motion.
- **State Management**: Powered by Zustand for clean and efficient state handling.

## Project Structure

```
src/
  components/
    Button.tsx       # Reusable button component
    Card.tsx         # Card component with flip animation
    Layout.tsx       # Main layout wrapper
  pages/
    WelcomeScreen.tsx # Start screen with difficulty selection
    GameScreen.tsx    # Main gameplay area
    GameOverScreen.tsx # Result screen
  store/
    gameStore.ts     # Game logic and state
  App.tsx            # Main router/screen switcher
```

## Tech Stack

- **React 18**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Zustand**
- **Vite**

## How to Play

1. Select a difficulty level on the home screen.
2. Click cards to flip them over.
3. Try to find matching pairs of emojis.
4. Match all pairs to win!
5. Click the link:https://memory-match-game-22.youware.app
