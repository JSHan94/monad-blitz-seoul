import React, { useState, useEffect } from 'react';
import EnhancementModule from './EnhancementModule';
import RewardModule from './RewardModule';
import './PlayPage.css';
import { fetchUser } from '../../api/dataAPI';
import { useWallets } from '@privy-io/react-auth';

interface PlayPageProps {
  isAuthenticated: boolean;
}

const PlayPage: React.FC<PlayPageProps> = ({ isAuthenticated }) => {
  const [points, setPoints] = useState<number>(10000);
  const [plays, setPlays] = useState<number>(0); // New state for plays
  const [resetEnhancementTrigger, setResetEnhancementTrigger] = useState(false); // New state for refresh
  const { wallets } = useWallets();
  const wallet = wallets?.[0];

  const handleSwapPoints = () => {
    setPoints(10000);
  };

  const handleRefreshEnhancement = () => {
    setResetEnhancementTrigger(prev => !prev);
    setPlays(5); // Reset plays to 0 on refresh
  };

  const handleEnhancementAttempt = () => {
    setPoints(prevPoints => prevPoints - 100); // Deduct 100 points
    setPlays(prevPlays => prevPlays -1); // Increment plays
  };

  useEffect(() => {
    if (isAuthenticated && wallet) {
      fetchUser(wallet.address).then(data => setPoints(data.points)).catch(console.error);
    }
  }, [isAuthenticated]);

  return (
    <div className="play-page-container">
      <div className="dashboard-grid">
        <div className="dashboard-card points-card">
          <h3>Your Current Points</h3>
          <p className="points-value">{points === null ? '0' : points}</p>
          <p className="plays-value">Left Try: {plays}</p>
          <button onClick={handleSwapPoints} className="swap-button">Swap</button>
          <button onClick={handleRefreshEnhancement} className="refresh-button">Refresh</button>
        </div>
        <div className="dashboard-card enhancement-card">
          <EnhancementModule
            isAuthenticated={isAuthenticated}
            resetTrigger={resetEnhancementTrigger}
            onEnhancementAttempt={handleEnhancementAttempt} // Pass the new handler
          />
        </div>
        <div className="dashboard-card reward-card">
          <RewardModule playCount={plays} />
        </div>
      </div>
    </div>
  );
};

export default PlayPage;
