import React, { useState } from 'react';
import BorrowingService from '../services/BorrowingService';

const BorrowBook = () => {
  const [memberId, setMemberId] = useState('');
  const [bookId, setBookId] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    BorrowingService.borrowBook(memberId, bookId).then(() => {
      alert('Book borrowed successfully!');
      setMemberId('');
      setBookId('');
    }).catch((error) => {
      console.error('There was an error borrowing the book!', error);
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="form-group">
        <label htmlFor="memberId">Member ID:</label>
        <input
          type="text"
          id="memberId"
          className="form-control"
          value={memberId}
          onChange={(e) => setMemberId(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="bookId">Book ID:</label>
        <input
          type="text"
          id="bookId"
          className="form-control"
          value={bookId}
          onChange={(e) => setBookId(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary mt-3">Borrow Book</button>
    </form>
  );
};

export default BorrowBook;