import { useState } from 'react';

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

  const createBook = (title) => {
    setBooks([...books, { id: Math.round(Math.random() * 9999), title }]);
  };

  return (
    <div className="app">
      <BookList onDelete={deleteBookById} books={books} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};

export default App;
