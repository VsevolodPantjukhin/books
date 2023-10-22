import BookShow from '../BookShow/BookShow';

const BookList = ({ books, onDelete }) => {
  const renderedBooks = books.map((book) => {
    return <BookShow onDelete={onDelete} book={book} key={book.id} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
};

export default BookList;
