
import './index.css';

import Book from './modules/form';

const bookTableBody = document.getElementById('bookTableBody');
const addButton = document.getElementById('addButton');
const titleInput = document.getElementById('titleInput');
const authorInput = document.getElementById('authorInput');

const books = [];

function renderBooks() {
  bookTableBody.innerHTML = '';

  for (const book of books) {
    const row = document.createElement('tr');
    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;
    row.appendChild(titleCell);

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;
    row.appendChild(authorCell);

    // Only add the REMOVE button if there are books in the list
  
    bookTableBody.appendChild(row);
  }
}


function addBook() {
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();

  if (title === '' || author === '') {
    alert('Please enter both name and score.');
    return;
  }

  const newBook = new Book(title, author);
  books.push(newBook);
  renderBooks();

  titleInput.value = '';
  authorInput.value = '';
}

function removeBook(event) {
  if (event.target.tagName === 'BUTTON') {
    const titleToRemove = event.target.getAttribute('data-title');
    const index = books.findIndex((book) => book.title === titleToRemove);
    if (index !== -1) {
      books.splice(index, 1);
      renderBooks();
    }
  }
}

addButton.addEventListener('click', addBook);
bookTableBody.addEventListener('click', removeBook);
