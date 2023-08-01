// form.js

// Import the leaderboardData and displayLeaderboard from leaderboard.js
import { leaderboardData, displayLeaderboard } from './leaderboard';

// Function to add a new score entry
export const addScore = (name, score) => {
  leaderboardData.push({ name, score });
  displayLeaderboard();
};
