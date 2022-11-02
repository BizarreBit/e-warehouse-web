function Table({
  headers,
  list,
  onClickEdit,
  onClickDelete,
  sorting,
  setSorting,
}) {
  const handleClickSort = (keyName) => {
    setSorting((prev) => {
      if (typeof prev[keyName] === 'boolean') {
        return { [keyName]: !prev[keyName] };
      }
      return { [keyName]: true };
    });
  };

  return (
    <div
      className='flex-grow-1 bg-light border rounded'
      style={{ overflow: 'clip' }}
    >
      <table className='table table-light table-hover mb-0'>
        <thead>
          <tr>
            {headers.map((header) => {
              const icon =
                typeof sorting[header.keyName] !== 'boolean'
                  ? ''
                  : sorting[header.keyName]
                  ? '-up'
                  : '-down';

              return (
                <th key={header.title} className='ct-tb-header' scope='col'>
                  <span>{header.title}</span>
                  {header.keyName && (
                    <i
                      className={`ct-mini-icon fa-solid fa-sort${icon}`}
                      onClick={() => handleClickSort(header.keyName)}
                    />
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {list.map((item) => (
            <tr key={item.id}>
              {headers.map((header) => {
                if (header.keyName) {
                  return <td key={header.keyName}>{item[header.keyName] || '-'}</td>;
                }
                return (
                  <td key={'actionButtons'} className='ps-0'>
                    <span className='text-nowrap'>
                      {onClickEdit && (
                        <i
                          className='fa-solid fa-pen ct-icon text-info'
                          onClick={() => onClickEdit(item)}
                        />
                      )}
                      {onClickDelete && (
                        <i
                          className='fa-solid fa-trash ct-icon text-danger'
                          onClick={() => onClickDelete(item)}
                        />
                      )}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
