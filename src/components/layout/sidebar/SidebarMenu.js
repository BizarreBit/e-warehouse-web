import MenuItem from './MenuItem';
import { path } from '../../../config/path';

const menuItems = [
  {
    title: 'Dashboard',
    to: path.dashboard,
    icon: 'fa-solid fa-table-columns',
    subitems: null,
  },
  {
    title: 'Orders',
    to: null,
    icon: 'fa-solid fa-boxes-packing',
    subitems: [
      { title: 'To Check', to: path.toCheck },
      { title: 'To Pack', to: path.toPack },
      { title: 'To Ship', to: path.toShip },
      { title: 'Returns', to: path.return },
      { title: 'All Orders', to: path.all },
    ],
  },
  {
    title: 'Inventory',
    to: null,
    icon: 'fa-solid fa-warehouse',
    subitems: [
      { title: 'List of Items', to: path.item },
      { title: 'Item Families', to: path.family },
      { title: 'Item Groups', to: path.group },
      { title: 'Inbound', to: path.inbound },
    ],
  },
  {
    title: 'Customers',
    to: path.customer,
    icon: 'fa-solid fa-people-roof',
    subitems: null,
  },
  { title: 'Shops', to: path.shop, icon: 'fa-solid fa-shop', subitems: null },
];

function SidebarMenu() {
  return (
    <div className='ct-sb-menus'>
      {menuItems.map((el) => (
        <MenuItem
          key={el.title}
          title={el.title}
          to={el.to}
          icon={el.icon}
          subitems={el.subitems}
        />
      ))}
    </div>
  );
}

export default SidebarMenu;
