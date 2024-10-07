import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">E-Library</h1>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/add-book" className="mr-4">Add Book</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
