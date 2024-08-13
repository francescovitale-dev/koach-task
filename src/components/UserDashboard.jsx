import { useParams } from "react-router-dom";

import UserProfile from "./UserProfile";
import UserActivities from "./UserActivities";
import Navbar from "./Navbar";

const UserDashboard = () => {
  const { userId } = useParams();

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <UserProfile userId={userId} />
        <UserActivities userId={userId} />
      </div>
    </>
  );
};

export default UserDashboard;
