import React from 'react';

const Home = () => {
    return (
        <div className="container mt-4">
          <h2 className="text-primary">Welcome to the Library Management System</h2>
          <p className="lead">
            This system allows you to manage books, members, and borrowing transactions efficiently.
          </p>
          <ul className="list-group">
            <li className="list-group-item">View and manage the list of books.</li>
            <li className="list-group-item">Add new members and manage existing members.</li>
            <li className="list-group-item">Record borrowing and returning of books.</li>
            <li className="list-group-item">Delete books or members from the system.</li>
          </ul>
        </div>
      );
};

export default Home;