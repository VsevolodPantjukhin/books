import { useContext } from 'react';
import BooksContext from '../../context/books';
import BookShow from '../BookShow/BookShow';

const BookList = ({ books, onEdit, onDelete }) => {
  const value = useContext(BooksContext);
  const renderedBooks = books.map((book) => {
    return (
      <BookShow onEdit={onEdit} onDelete={onDelete} book={book} key={book.id} />
    );
  });
  return (
    <div className="book-list">
      {value}
      {renderedBooks}
    </div>
  );
};

export default BookList;
