import React from 'react';
import { useState } from 'react';

import BookCreate from '../components/BookCreate/BookCreate';
import BookList from '../components/BookList/BookList';

const App = () => {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <BookCreate />
      <BookList />
    </div>
  );
};

export default App;
