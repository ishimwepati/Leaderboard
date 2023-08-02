import { addScore } from './leaderboard'; // Import the addScore function from leaderboard.js

export function handleFormSubmit(event) {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');
  addScore(nameInput.value, parseInt(scoreInput.value));
  nameInput.value = '';
  scoreInput.value = '';
}
