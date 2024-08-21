import React, { useState, useEffect } from 'react';
import BorrowingService from '../services/BorrowingService';

const BorrowingList = () => {
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    BorrowingService.getDistinctBorrowedBookNamesWithCount().then((response) => {
      setBorrowedBooks(response.data);
    }).catch((error) => {
      console.error('Error fetching borrowed books:', error);
    });
  }, []);

  return (
    <div>
      <h2>Borrowed Books</h2>
      <ul>
        {borrowedBooks.map((book, index) => (
          <li key={index}>
            {book[0]} - Borrowed {book[1]} times
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BorrowingList;