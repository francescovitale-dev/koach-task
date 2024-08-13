import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [userId, setUserId] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 10)) {
      setUserId(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId && parseInt(userId) >= 1 && parseInt(userId) <= 10) {
      navigate(`/users/${userId}`);
    }
  };

  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          User Dashboard
        </Link>
        <form onSubmit={handleSubmit} className="flex items-center">
          <input
            type="number"
            value={userId}
            onChange={handleInputChange}
            min="1"
            max="10"
            placeholder="User ID (1-10)"
            className="bg-white text-gray-800 rounded-l-md px-3 py-1 w-36 focus:outline-none"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white rounded-r-md px-4 py-1 transition duration-300 ease-in-out"
          >
            Go
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;