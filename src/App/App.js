import { useState } from 'react';
import axios from 'axios';

import BookCreate from '../components/BookCreate/BookCreate';
import BookList from '../components/BookList/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const deleteBookById = (id) => {
    setBooks(
      books.filter((book) => {
        return book.id !== id;
      })
    );
  };

  const editBookById = (id, newTitle) => {
    setBooks(
      books.map((book) => {
        if (book.id === id) {
          return { ...book, title: newTitle };
        }
        return book;
      })
    );
  };

  const createBook = async (title) => {
    const response = await axios.post('http://localhost:3001/books', {
      title,
    });

    setBooks([...books, response.data]);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList onEdit={editBookById} onDelete={deleteBookById} books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
