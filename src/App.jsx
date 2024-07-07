import Navbar from "./modules/Navbar";
import UserRoutes from './UserRoutes';

export const App = () => {
  return (
    <div>
      <Navbar />
      <UserRoutes />
    </div>
  );
};