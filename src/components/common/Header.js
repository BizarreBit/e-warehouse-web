import { Link } from 'react-router-dom';

function Header({ breadcrumb, description, buttons, onClickButtons }) {
  return (
    <div className='ct-between-wrap'>
      <div>
        <ol className='ct-breadcrumb'>
          {breadcrumb.map((el) => (
            <li key={el.title}>
              {el.to ? <Link to={el.to}>{el.title}</Link> : el.title}
            </li>
          ))}
        </ol>
        <div className='fs-6'>{description}</div>
      </div>
      <div className='ct-flex-items'>
        {buttons.map((el, idx) => (
          <button
            key={el.title}
            className='btn btn-tertiary'
            onClick={onClickButtons[idx]}
          >
            <i className={el.icon} />
            <span className='ms-2'>{el.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Header;
