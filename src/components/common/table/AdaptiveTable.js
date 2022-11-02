import { useEffect, useState } from 'react';
import { useError } from '../../../contexts/ErrorContext';
import Filter from './Filter';
import Paginator from './Paginator';
import Table from './Table';

function AdaptiveTable({
  filter,
  table,
  content,
  onClickEdit,
  onClickDelete,
  fetchTrigger,
}) {
  const [list, setList] = useState([]);
  const [criteria, setCriteria] = useState(filter.default.criteria || {});
  const [sorting, setSorting] = useState(filter.default.sorting || {});
  const [perPage, setPerPage] = useState(filter.default.perPage || 10);
  const [currentPage, setCurrentPage] = useState(
    filter.default.currentPage || 1
  );

  const { errorTriger } = useError();

  const fetch = async () => {
    try {
      const result = await content.getApi();
      setList(result.data[content.keyName]);
    } catch (err) {
      errorTriger(err);
    }
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  }, [fetchTrigger]);

  const seletedCriteria = Object.keys(criteria).reduce(
    (acc, el) => (criteria[el] ? { ...acc, [el]: criteria[el] } : acc),
    {}
  );

  const objListFilter = (objList, criteria) => {
    return objList.filter((item) =>
      Object.keys(criteria).reduce((acc, el) => {
        const keyNames = el.split('.');
        let value = '';

        try {
          value = keyNames.reduce((acc, el) => acc[el], item);
        } catch (error) {
          console.log(error);
        }

        const isCategoryFilter = keyNames[keyNames.length - 1] === 'id';
        const logic = isCategoryFilter
          ? value + '' === criteria[el]
          : value.toLowerCase().includes(criteria[el].toLowerCase());

        return acc || logic;
      }, false)
    );
  };

  const filteredList =
    Object.keys(seletedCriteria).length === 0
      ? list
      : objListFilter(list, seletedCriteria);

  const objListSorter = (objList, sorting) => {
    const sortingKeyName = Object.keys(sorting)[0];
    const isAscending = sorting[sortingKeyName];

    return objList.sort((a, b) => {
      let compare = 0;
      if (a[sortingKeyName] < b[sortingKeyName]) {
        compare = -1;
      }
      if (a[sortingKeyName] > b[sortingKeyName]) {
        compare = 1;
      }
      return isAscending ? compare : compare * -1;
    });
  };

  const sortedList =
    Object.keys(sorting).length === 0
      ? filteredList
      : objListSorter(filteredList, sorting);

  const displayList = sortedList.slice(
    perPage * (currentPage - 1),
    perPage * currentPage
  );

  return (
    <>
      <Filter
        text={filter.text}
        categories={filter.categories}
        criteria={criteria}
        setCriteria={setCriteria}
      />
      <Table
        headers={table.headers}
        list={displayList}
        sorting={sorting}
        setSorting={setSorting}
        onClickEdit={onClickEdit}
        onClickDelete={onClickDelete}
      />
      <Paginator
        totalItem={filteredList.length}
        perPage={perPage}
        setPerPage={setPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}

export default AdaptiveTable;
