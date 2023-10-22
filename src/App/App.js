import React from 'react';
import { useState } from 'react';

import BookCreate from '../components/BookCreate/BookCreate';
import BookList from '../components/BookList/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    setBooks([...books, { id: 123, title }]);
  };

  return (
    <div>
      <BookCreate onCreate={createBook} />
      <BookList />
    </div>
  );
};

export default App;
