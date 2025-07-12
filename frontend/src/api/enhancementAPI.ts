export interface LeaderboardEntry {
  rank: number;
  name: string;
  score: number;
}

export const enhanceItem = async (level: number): Promise<{ success: boolean }> => {
  const successRate = 0.7 - level * 0.05;
  const isSuccess = Math.random() < successRate;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: isSuccess });
    }, 1000); // Simulate network delay
  });
};


export const fetchLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { rank: 1, name: "Player1", score: 100 },
        { rank: 2, name: "Player2", score: 90 },
        { rank: 3, name: "Player3", score: 80 },
      ]);
    }, 1000); // Simulate network delay
  });
};
