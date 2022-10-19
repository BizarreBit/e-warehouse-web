import { useLocation, useNavigate } from 'react-router-dom';
import ItemSubitem from './ItemSubitem';

function MenuItem({ title, to, icon, subitems }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <button
        type='button'
        className={`ct-sb-menu btn${
          pathname === to ? ' btn-tertiary' : ' btn-secondary'
        }${subitems ? ' dropdown-toggle' : ''}`}
        data-bs-toggle={subitems ? 'collapse' : ''}
        data-bs-target={subitems ? `#${title}` : ''}
        onClick={() => navigate(to)}
      >
        <i className={`fs-6 ${icon}`} />
        <span className='ps-2'>{title}</span>
      </button>

      {subitems && (
        <div className='ct-sb-menu collapse' id={title}>
          {subitems.map((el) => (
            <ItemSubitem
              key={el.title}
              title={el.title}
              to={el.to}
              active={pathname === el.to}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default MenuItem;
