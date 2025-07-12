import { getEnv } from './lib/env';

const config = {
  BACKEND_API: getEnv('VITE_APP_BACKEND_API', 'http://localhost:3000'),
  PRIVY_APP_ID: getEnv('VITE_APP_PRIVY_APP_ID'),
};

export default config;