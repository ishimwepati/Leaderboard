// index.js

import { displayLeaderboard, refreshLeaderboard, addScore } from './modules/leaderboard';
import { handleFormSubmit } from './modules/form';

const init = () => {
  displayLeaderboard();
  document.getElementById('refreshButton').addEventListener('click', refreshLeaderboard);

  const scoreForm = document.getElementById('scoreForm');
  scoreForm.addEventListener('submit', handleFormSubmit); 
};

init();
