import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

function AppLayout() {
  return (
    <div className="dark:bg-dark-primary-700 relative h-fit min-h-screen w-screen max-w-full">
      <Navbar />

      <main className="py-20">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
