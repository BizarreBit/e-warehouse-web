function Paginator({
  totalItem,
  perPage,
  setPerPage,
  currentPage,
  setCurrentPage,
}) {
  const totalPage = Math.ceil(totalItem / perPage);
  let pageNum = [1];
  for (let i = 2; i <= totalPage; i++) {
    pageNum.push(i);
  }

  const firstItem = perPage * (currentPage - 1) + 1;
  const lastItem =
    currentPage === totalPage ? totalItem : currentPage * perPage;

  const isAbleToDecrease = () => currentPage - 1 > 0;
  const isAbleToIncrease = () => currentPage + 1 <= totalPage;
  const handleClickIncrease = () => {
    if (isAbleToIncrease()) {
      setCurrentPage((prev) => prev + 1);
    }
  };
  const handleClickDecrease = () => {
    if (isAbleToDecrease()) {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleChangePerPage = (e) => {
    setCurrentPage(1);
    setPerPage(e.target.value);
  };

  return (
    <div
      className='ct-between-wrap position-relative'
      style={{ top: '0.5rem' }}
    >
      <span>{`Showing ${firstItem} - ${lastItem} of ${totalItem} results`}</span>

      <div className='ct-mn-paginator'>
        <select
          title='Items per page'
          value={perPage}
          onChange={handleChangePerPage}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
        <i
          className={`fa-solid fa-angle-left ct-mini-icon${
            isAbleToDecrease() ? '' : ' inactive'
          }`}
          onClick={handleClickDecrease}
        />
        <select
          title='Page No.'
          value={currentPage}
          onChange={(e) => setCurrentPage(e.target.value)}
          disabled={pageNum.length === 1}
        >
          {pageNum.map((el) => (
            <option key={el} value={el}>{`Page ${el}`}</option>
          ))}
        </select>
        <i
          className={`fa-solid fa-angle-right ct-mini-icon${
            isAbleToIncrease() ? '' : ' inactive'
          }`}
          onClick={handleClickIncrease}
        />
      </div>
    </div>
  );
}

export default Paginator;
