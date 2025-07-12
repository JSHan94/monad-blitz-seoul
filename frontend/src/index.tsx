import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PrivyProvider, SUPPORTED_CHAINS } from '@privy-io/react-auth';
import config from './config';
import { monadTestnet } from 'viem/chains';
import { createConfig, WagmiProvider } from 'wagmi';
import { http } from 'viem';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

const wagmiConfig = createConfig({
  chains: [monadTestnet],
  transports: {
    [monadTestnet.id]: http(),
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <PrivyProvider
      appId={config.PRIVY_APP_ID}
      config={{
        // Customize Privy's appearance and behavior
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          // logo: 'https://your-logo-url.com/logo.png',
        },
        // Configure additional login methods
        loginMethods: ['email', 'wallet'],
        supportedChains: [monadTestnet]
      }}
     
    >
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={wagmiConfig}>
          <App />
        </WagmiProvider>
      </QueryClientProvider>
    </PrivyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
