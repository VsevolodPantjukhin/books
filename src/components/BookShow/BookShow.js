import React from 'react';

import BookEdit from '../BookEdit/BookEdit';

const BookShow = ({ book }) => {
  return (
    <div className="book-show">
      {book.title}
      <BookEdit />
    </div>
  );
};

export default BookShow;
