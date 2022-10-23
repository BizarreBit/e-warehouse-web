function TitleCard({
  children,
  title,
  onClickEdit,
  onClickDelete,
  onClickOk,
  onClickCancel,
  bodyPadding = true,
}) {
  return (
    <div className='card bg-white m-2' style={{ minWidth: '15rem' }}>
      <div className='card-header d-flex align-items-center fw-bold '>
        <span className='flex-fill'>{title}</span>
        {onClickEdit && (
          <button
            className='border-0 bg-transparent text-info'
            onClick={onClickEdit}
          >
            <i className='fa-solid fa-pen' />
          </button>
        )}
        {onClickDelete && (
          <button
            className='border-0 bg-transparent text-danger'
            onClick={onClickDelete}
          >
            <i className='fa-solid fa-trash' />
          </button>
        )}
        {onClickOk && (
          <button
            className='border-0 bg-transparent text-success'
            onClick={onClickOk}
          >
            <i className='fa-solid fa-check' />
          </button>
        )}
        {onClickCancel && (
          <button
            className='border-0 bg-transparent text-danger'
            onClick={onClickCancel}
          >
            <i className='fa-solid fa-xmark' />
          </button>
        )}
      </div>
      <div className={`card-body d-flex flex-wrap${bodyPadding ? '' : ' p-0'}`}>
        {children}
      </div>
    </div>
  );
}

export default TitleCard;
