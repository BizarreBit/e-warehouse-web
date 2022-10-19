import { Outlet } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';

function Layout() {
  return (
    <div className='ct-layout'>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
