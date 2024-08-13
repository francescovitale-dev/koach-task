import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/users/:userId" element={<UserDashboard />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;