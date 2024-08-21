import React, { useState, useEffect } from 'react';
import BookService from '../services/BookService';

const UpdateBook = ({ match }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    BookService.getBookById(match.params.id).then((response) => {
      setTitle(response.data.title);
      setAuthor(response.data.author);
      setAmount(response.data.amount);
    }).catch((error) => {
      console.error('There was an error retrieving the book data!', error);
    });
  }, [match.params.id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedBook = { title, author, amount };

    BookService.updateBook(match.params.id, updatedBook).then(() => {
      alert('Book updated successfully!');
    }).catch((error) => {
      console.error('There was an error updating the book!', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title: </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Author: </label>
        <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      </div>
      <div>
        <label>Amount: </label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      </div>
      <button type="submit">Update Book</button>
    </form>
  );
};

export default UpdateBook;