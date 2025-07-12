import config from "../config";

const API_BASE_URL = config.BACKEND_API

export const fetchUser = async (address:string) => {
  if (!address) {
    return {
      address: '',
      points: 0, // Default points if no address is provided
    }
  }
  const response = await fetch(`${API_BASE_URL}/user/${address}`);
  if (!response.ok) {
    // throw new Error(`HTTP error! status: ${response.status}`);
    return { 
      address,
      points: 0, // Default points if user not found
    }
  }
  console.log("fetchUser response:", address, response);
  return response.json();
};

export const fetchLeaderboard = async () => {
  const response = await fetch(`${API_BASE_URL}/leaderboard`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const fetchMarketItems = async () => {
  const response = await fetch(`${API_BASE_URL}/market/items`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  console.log("fetchMarket response:", response);
  return response.json();
};

export const recordPlayHistory = async (level: number, success: boolean) => {
  const response = await fetch(`${API_BASE_URL}/play-history`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ level, success }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const fetchPlayHistory = async () => {
  const response = await fetch(`${API_BASE_URL}/play-history`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const registerMarketItem = async (id: number, owner: string, price: number) => {
  const response = await fetch(`${API_BASE_URL}/market/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, owner, price }),
  });
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};
