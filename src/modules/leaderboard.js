// leaderboard.js

// Sample data (you can replace this with actual data from an API later)
const leaderboardData = [
  { name: 'WazaCode', score: 205 },
  { name: 'JB', score: 599 },
  { name: 'Shokano', score: 300 },
];

// Function to display the leaderboard
const displayLeaderboard = () => {
  const leaderboardList = document.getElementById('leaderboardList');
  leaderboardList.innerHTML = '';

  leaderboardData.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${entry.name} : ${entry.score}`;
    leaderboardList.appendChild(listItem);
  });
};

// Function to add a new score entry
const addScore = (name, score) => {
  leaderboardData.push({ name, score });
  displayLeaderboard();
};

// Function to refresh the leaderboard (this will be replaced with API call later)
const refreshLeaderboard = () => {
  // Simulating API call delay with setTimeout
  setTimeout(() => {
    leaderboardData.push({ name: 'New Player', score: 400 });
    displayLeaderboard();
  }, 5000);
};

export { leaderboardData, displayLeaderboard, addScore, refreshLeaderboard };
