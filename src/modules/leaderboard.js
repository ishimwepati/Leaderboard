let leaderboardData = [];


export const displayLeaderboard = () => {
  const leaderboardList = document.getElementById('leaderboardList');
  leaderboardList.innerHTML = '';

  leaderboardData.forEach((entry, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${index + 1}. ${entry.name} : ${entry.score}`;
    leaderboardList.appendChild(listItem);
  });
};

export const addScore = (name, score) => {
  leaderboardData.push({ name, score });
  displayLeaderboard();
  saveLeaderboardData();
};

export const refreshLeaderboard = () => {
  setTimeout(() => {
    leaderboardData.push({ name: 'New Player', score: 400 });
    displayLeaderboard();
    saveLeaderboardData();
  }, 1000);
};

const saveLeaderboardData = () => {
  localStorage.setItem('leaderboardData', JSON.stringify(leaderboardData));
};

export const loadLeaderboardData = () => {
  const data = localStorage.getItem('leaderboardData');
  if (data) {
    try {
      leaderboardData = JSON.parse(data);
    } catch (error) {
      console.error('Error parsing leaderboard data:', error);
      leaderboardData = [];
    }
  }
};

loadLeaderboardData();
