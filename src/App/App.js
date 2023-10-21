import React from 'react';

import BookCreate from '../components/BookCreate/BookCreate';
import BookList from '../components/BookList/BookList';

const App = () => {
  return (
    <div>
      <BookCreate />
      <BookList />
    </div>
  );
};

export default App;
