import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';

function Layout() {
  return (
    <div className='ct-layout'>
      <Sidebar />
      <main className='p-4 fs-6'>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
