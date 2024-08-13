import React, { useState, useEffect } from 'react';
import { MdDescription } from 'react-icons/md';

const UserActivities = ({ userId }) => {
  const [activities, setActivities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        if (!response.ok) throw new Error('Failed to fetch activities');
        const data = await response.json();
        setActivities(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchActivities();
  }, [userId]);

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out max-w-2xl mx-auto mt-6">
      <div className="bg-gradient-to-r from-green-500 to-blue-500 p-4 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">User Activities</h3>
      </div>
      <div className="p-4 sm:p-6">
        {activities.length === 0 ? (
          <p className="text-gray-600 text-center">No activities found for this user.</p>
        ) : (
          <ul className="space-y-4">
            {activities.map((activity) => (
              <li key={activity.id} className="border-b border-gray-200 pb-4">
                <div className="flex items-start">
                  <MdDescription className="text-gray-500 mr-3 text-xl flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800 mb-2">{activity.title}</h4>
                    <p className="text-gray-600 text-sm sm:text-base">{activity.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserActivities;