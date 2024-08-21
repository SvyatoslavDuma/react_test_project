import React, { useState, useEffect } from 'react';
import BookService from '../services/BookService';

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [editingBookId, setEditingBookId] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = () => {
    BookService.getAllBooks().then((response) => {
      setBooks(response.data);
    }).catch((error) => {
      console.error('Error fetching books:', error);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author, amount };

    BookService.createBook(newBook).then(() => {
      alert('Book added successfully!');
      setTitle('');
      setAuthor('');
      setAmount(0);
      loadBooks();  
    }).catch((error) => {
      console.error('There was an error adding the book!', error);
    });
  };

  const startEditing = (book) => {
    setEditingBookId(book.id);
    setTitle(book.title);
    setAuthor(book.author);
    setAmount(book.amount);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const updatedBook = { title, author, amount };

    BookService.updateBook(editingBookId, updatedBook).then(() => {
      alert('Book updated successfully!');
      setEditingBookId(null);
      setTitle('');
      setAuthor('');
      setAmount(0);
      loadBooks();  
    }).catch((error) => {
      console.error('There was an error updating the book!', error);
    });
  };

  const deleteBook = (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      BookService.deleteBook(id).then(() => {
        alert('Book deleted successfully!');
        loadBooks(); 
      }).catch((error) => {
        console.error('There was an error deleting the book!', error);
      });
    }
  };

  return (
    <div className="container mt-4">
      <h2>Book List</h2>
      <ul className="list-group mb-4">
        {books.map((book) => (
          <li key={book.id} className="list-group-item d-flex justify-content-between align-items-center">
            {editingBookId === book.id ? (
              <form onSubmit={handleEditSubmit} className="w-100">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                  />
                  <input
                    type="number"
                    className="form-control mb-2"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-success btn-sm">Save</button>
                <button onClick={() => setEditingBookId(null)} className="btn btn-secondary btn-sm ml-2">Cancel</button>
              </form>
            ) : (
              <>
                <div>
                  <strong>{book.title}</strong> by {book.author} (Amount: {book.amount})
                </div>
                <div>
                  <button onClick={() => startEditing(book)} className="btn btn-warning btn-sm mr-2">Edit</button>
                  <button onClick={() => deleteBook(book.id)} className="btn btn-danger btn-sm">Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>

    
      <h3>Add a New Book</h3>
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            disabled={editingBookId !== null}  
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            className="form-control"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            disabled={editingBookId !== null}  
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            disabled={editingBookId !== null}  
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3" disabled={editingBookId !== null}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookList;
