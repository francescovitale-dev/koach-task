import { Link } from 'react-router-dom';

const LandingPage = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col justify-center items-center p-4">
      <div className="text-center mb-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Welcome to User Dashboard
        </h1>
        <p className="text-xl text-blue-100 mb-8">
          Explore user profiles and activities with ease
        </p>
      </div>

      <div className="text-center">
        <Link
          to="/users/1"
          className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;