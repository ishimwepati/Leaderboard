// Import necessary modules
import { displayLeaderboard, refreshLeaderboard } from './modules/leaderboard';
import { addScore } from './modules/form';

// Function to initialize the app
const init = () => {
  displayLeaderboard();
  document.getElementById('refreshButton').addEventListener('click', refreshLeaderboard);

  const scoreForm = document.getElementById('scoreForm');
  scoreForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const scoreInput = document.getElementById('score');
    addScore(nameInput.value, parseInt(scoreInput.value));
    scoreForm.reset();
  });
};

// Initialize the app
init();
