import React from 'react';
import { useGameStore } from './store/gameStore';
import { Layout } from './components/Layout';
import { WelcomeScreen } from './pages/WelcomeScreen';
import { GameScreen } from './pages/GameScreen';
import { GameOverScreen } from './pages/GameOverScreen';

function App() {
  const screen = useGameStore((state) => state.screen);

  return (
    <Layout>
      {screen === 'welcome' && <WelcomeScreen />}
      {screen === 'game' && <GameScreen />}
      {screen === 'gameover' && <GameOverScreen />}
    </Layout>
  );
}

export default App;
