import './index.css';
import ManageBookDetails from './modules/leaderboard.js';

const bookTableBody = document.getElementById('bookTableBody');
const refreshButton = document.getElementById('refreshButton');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');
const submitButton = document.getElementById('submitButton');

const bookManager = new ManageBookDetails();

const renderBooks = () => {
  bookTableBody.innerHTML = '';

  bookManager.books.forEach((book) => {
    const row = document.createElement('tr');
    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    bookTableBody.appendChild(row);
  });
};

const submitScore = async () => {
  const name = titleInput.value.trim();
  const score = parseInt(authorInput.value.trim(), 10);

  if (name === '' || Number.isNaN(score)) {
    alert('Please enter both name and a valid numeric score.');
    return;
  }

  await bookManager.submitScore(name, score);

  titleInput.value = '';
  authorInput.value = '';
};

const refreshLeaderboard = async () => {
  // Here to Refresh the leaderboard from the API
  await bookManager.refreshLeaderboard();
  renderBooks();
};

submitButton.addEventListener('click', submitScore);
refreshButton.addEventListener('click', refreshLeaderboard);

window.onload = async () => {
  await bookManager.refreshLeaderboard();
  renderBooks();
};
