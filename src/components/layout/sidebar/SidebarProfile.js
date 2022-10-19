import { useNavigate } from 'react-router-dom';
import ImageIcon from '../../../common/ImageIcon';
import { useAuth } from '../../../contexts/AuthContext';
import { path } from '../../../config/path';

function SidebarProfile() {
  const { user, signout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'Settings',
      icon: 'fa-solid fa-gear',
      onClick: () => navigate(path.setting),
    },
    {
      title: 'Logout',
      icon: 'fa-solid fa-right-from-bracket',
      onClick: signout,
      color: ' text-danger',
    },
  ];

  return (
    <div className='dropup ct-sb-profilelabel'>
      <button
        type='button'
        className='btn btn-dark rounded-pill dropdown-toggle ct-sb-pill'
        data-bs-toggle='dropdown'
      >
        <ImageIcon alt='user' src={user.profileImage} />
        <div className='ct-sb-username'>{user.firstName}</div>
      </button>

      <ul className='dropdown-menu dropdown-menu-end'>
        {menuItems.map((el) => (
          <li key={el.title}>
            <button
              type='button'
              className={`dropdown-item${el.color ? el.color : ''}`}
              onClick={el.onClick}
            >
              <i className={el.icon} />
              <span className='ms-2'>{el.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarProfile;
