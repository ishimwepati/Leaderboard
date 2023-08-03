import Book from './form.js';

class ManageBookDetails {
  constructor() {
    this.books = [];
  }

  displayBooks = () => {
    const bookTableBody = document.getElementById('bookTableBody');
    bookTableBody.innerHTML = '';

    this.books.forEach((book) => {
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

  bookAdded = (title, author) => {
    const book = new Book(title, author);
    this.books.push(book);

    this.displayBooks();
  };

  refreshLeaderboard = async () => {
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dQOUT8Crs4dWfi6HfPkP/scores/');
      const data = await response.json();

      if (Array.isArray(data.result)) {
        this.books = data.result.map((entry) => new Book(entry.user, entry.score));
      } else {
        // Handle other response formats if needed
        console.error('Invalid response format from the API');
        return;
      }

      this.displayBooks();
    } catch (error) {
      console.error('Error refreshing leaderboard:', error);
    }
  };

  submitScore = async (user, score) => { // Rename the parameters to match the API documentation
    try {
      const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/dQOUT8Crs4dWfi6HfPkP/scores/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ // Modify the object keys to match the API documentation
          user,
          score,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit score');
      }

      // Uncomment the following line to manually refresh the leaderboard after submission
      // This will ensure that the new data is displayed only when the "Refresh" button is clicked
      // this.refreshLeaderboard();
    } catch (error) {
      console.error('Error submitting score:', error);
    }
  };
}

export default ManageBookDetails;
