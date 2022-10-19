import SidebarLogo from './SidebarLogo';
import SidebarMenu from './SidebarMenu';
import SidebarProfile from './SidebarProfile';

function Sidebar() {
  return (
    <aside className='ct-sidebar'>
      <nav>
        <SidebarLogo />
        <SidebarMenu />
        <SidebarProfile />
      </nav>
    </aside>
  );
}

export default Sidebar;
