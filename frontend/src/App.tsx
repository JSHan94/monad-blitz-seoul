import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import MarketPage from './pages/Market/MarketPage';
import PlayPage from './pages/Play/PlayPage';
import { usePrivy } from '@privy-io/react-auth';
import Component from './pages/Stats/Profile';

function App() {
  const [activeTab, setActiveTab] = useState('play');
  const { authenticated } = usePrivy();

  return (
    <div className="App">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-content-area">
        {activeTab === 'play' && (
          <PlayPage isAuthenticated={authenticated} />
        )}
        {activeTab === 'market' && (
          <MarketPage />
        )}
        {activeTab === 'stats' && (
          <Component />
        )}
      </div>
    </div>
  );
}

export default App;