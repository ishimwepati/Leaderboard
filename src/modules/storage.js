const saveLeaderboardData = (data) => {
    localStorage.setItem('leaderboardData', JSON.stringify(data));
  };
  
  // Function to load the leaderboardData from localStorage
  const loadLeaderboardData = () => {
    const data = localStorage.getItem('leaderboardData');
    return data ? JSON.parse(data) : [];
  };
  
  export { saveLeaderboardData, loadLeaderboardData };
  