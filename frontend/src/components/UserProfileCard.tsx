import React, { useState, useEffect } from 'react';
import { useWallets } from '@privy-io/react-auth';
import { fetchUser, fetchPlayHistory } from '../api/dataAPI';
import './UserProfileCard.css';

interface UserProfileCardProps {
  isAuthenticated: boolean;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ isAuthenticated }) => {
  const [points, setPoints] = useState<number | null>(null);
  const [totalPlays, setTotalPlays] = useState<number | null>(null);
  const [totalSuccesses, setTotalSuccesses] = useState<number | null>(null);
  const { wallets } = useWallets();
  const wallet = wallets?.[0];

  useEffect(() => {
    const getUserData = async () => {
      if (isAuthenticated && wallet) {
        try {
          const userData = await fetchUser(wallet.address);
          setPoints(userData.points);

          const historyData = await fetchPlayHistory();
          const plays = historyData.length;
          const successes = historyData.filter((entry: any) => entry.success).length;
          setTotalPlays(plays);
          setTotalSuccesses(successes);

        } catch (error) {
          console.error("Error fetching user profile data:", error);
        }
      }
    };

    getUserData();
  }, [isAuthenticated, wallet]);

  const displayAddress = wallet?.address ? `${wallet.address.substring(0, 6)}...${wallet.address.substring(wallet.address.length - 4)}` : 'N/A';

  return (
    <div className="user-profile-card">
      <h3>Your Profile</h3>
      <p><strong>Address:</strong> {displayAddress}</p>
      <p><strong>Points:</strong> {points === null ? 'Loading...' : points}</p>
      <p><strong>Total Plays:</strong> {totalPlays === null ? 'Loading...' : totalPlays}</p>
      <p><strong>Total Successes:</strong> {totalSuccesses === null ? 'Loading...' : totalSuccesses}</p>
    </div>
  );
};

export default UserProfileCard;
