import React, { useState, useEffect } from 'react';
import './Header.css';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useAccount, useBalance } from 'wagmi';
import { formatEther } from 'viem';
import { fetchUser } from '../api/dataAPI';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const { login, authenticated, logout, ready } = usePrivy();
  const { wallets } = useWallets();
  const wallet = wallets?.[0];
  const [points, setPoints] = useState<number | null>(null);

  const { address } = useAccount();
  const { data: balance, isLoading } = useBalance({ address });

  useEffect(() => {
    if (authenticated && wallet) {
      fetchUser(wallet.address).then(data => setPoints(data.points)).catch(console.error);
    }
  }, [authenticated]);

  const displayAddress = wallet?.address ? `${wallet.address.substring(0, 6)}...${wallet.address.substring(wallet.address.length - 4)}` : 'N/A';

  return (
    <header className="app-header">
      <nav className="navigation">
        <ul>
          <li>
            <a 
              href="#play" 
              className={activeTab === 'play' ? 'active' : ''}
              onClick={() => setActiveTab('play')}
            >
              Play
            </a>
          </li>
          <li>
            <a 
              href="#market" 
              className={activeTab === 'market' ? 'active' : ''}
              onClick={() => setActiveTab('market')}
            >
              Market
            </a>
          </li>
          <li>
            <a 
              href="#stats" 
              className={activeTab === 'stats' ? 'active' : ''}
              onClick={() => setActiveTab('stats')}
            >
              Stats
            </a>
          </li>
        </ul>
      </nav>
      <div className="wallet-info-container">
        {ready && authenticated && wallet ? (
          <div className="wallet-status-tab">
            <span>
              Balance: {isLoading ? 'Loading...' : balance ? `${Number(formatEther(balance.value)).toFixed(3)} MOD` : 'N/A'}
            </span>
            <span>{points === null ? '' : `| Points:  ${points}`}</span>
          </div>
        ) : null}
        {ready && authenticated ? (
          <button className="wallet-connect-button" onClick={logout}>
            {displayAddress}
          </button>
        ) : (
          <button className="wallet-connect-button" onClick={login}>
            Wallet Connect
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;