import { useNavigate } from 'react-router-dom';

function ItemSubitem({ title, to, active }) {
  const navigate = useNavigate();
  return (
    <button
      type='button'
      className={`ct-sb-submenu btn${active ? ' btn-tertiary' : ' btn-dark'}`}
      onClick={() => navigate(to)}
    >
      {title}
    </button>
  );
}

export default ItemSubitem;
