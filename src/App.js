import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import BookList from './components/BookList';
import MemberList from './components/MemberList';
import BorrowingList from './components/BorrowingList';
import UpdateBook from './components/UpdateBook';
import BorrowBook from './components/BorrowBook';
import ReturnBook from './components/ReturnBook';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="bg-primary text-white mb-4">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container">
              <Link className="navbar-brand" to="/">Library Management System</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/books">Books</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/members">Members</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/borrowings">Borrowings</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/borrow-book">Borrow Book</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/return-book">Return Book</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/members" element={<MemberList />} />
            <Route path="/borrowings" element={<BorrowingList />} />
            <Route path="/update-book/:id" element={<UpdateBook />} />
            <Route path="/borrow-book" element={<BorrowBook />} />
            <Route path="/return-book" element={<ReturnBook />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;