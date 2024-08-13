import { useState, useEffect } from 'react';
import { MdEmail, MdPhone, MdLanguage } from 'react-icons/md';

const UserProfile = ({ userId }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch user data');
        const data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 sm:p-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">{user.name}</h2>
        <p className="text-blue-100 text-sm sm:text-base">User ID: {userId}</p>
      </div>
      <div className="p-4 sm:p-6">
        <div className="space-y-3">
          <div className="flex items-center">
            <MdEmail className="text-gray-600 mr-3 text-xl" />
            <p className="text-gray-700 text-sm sm:text-base">{user.email}</p>
          </div>
          <div className="flex items-center">
            <MdPhone className="text-gray-600 mr-3 text-xl" />
            <p className="text-gray-700 text-sm sm:text-base">{user.phone}</p>
          </div>
          <div className="flex items-center">
            <MdLanguage className="text-gray-600 mr-3 text-xl" />
            <p className="text-gray-700 text-sm sm:text-base">{user.website}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;