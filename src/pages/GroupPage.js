import { useState } from 'react';
import validator from 'validator';
import Header from '../components/common/Header';
import AdaptiveTable from '../components/common/table/AdaptiveTable';
import EditorModal from '../components/common/form/EditorModal';
import {
  getGroupApi,
  createGroupApi,
  editGroupApi,
  deleteGroupApi,
} from '../api/group';

const pageUi = {
  content: { keyName: 'groups', getApi: getGroupApi },
  header: {
    breadcrumb: [{ title: 'Inventory' }, { title: 'Item Group' }],
    description: 'List of product groups on the wearhouse.',
    buttons: [{ title: 'Add New Group', icon: 'fa-solid fa-plus', api: createGroupApi }],
  },
  filter: {
    default: { criteria: {}, perPage: 10, currentPage: 1 },
    text: { keyName: 'name', placeholder: 'Search Product Groups' },
    // categories: [
    //   {
    //     keyName: 'dummy.id',
    //     placeholder: 'Select Dummy',
    //     options: [
    //       { id: 1, name: 'One' },
    //       { id: 2, name: 'Two' },
    //       { id: 3, name: 'Three' },
    //     ],
    //   },
    // ],
  },
  table: {
    headers: [
      { title: 'Group Name', keyName: 'name' },
      { title: 'Group ID', keyName: 'id' },
      { title: 'No. of families', keyName: 'familyCount' },
      { title: 'No. of items', keyName: 'itemCount' },
      { title: 'Action' },
    ],
    action: {
      edit: { title: 'Edit Group', api: editGroupApi },
      delete: { title: 'Delete Group', api: deleteGroupApi },
    },
  },
  form: {
    name: {
      // id: 'Group ID',
      name: 'Group Name',
    },
    default: {
      // id: '',
      name: '',
    },
    isEditable: {
      // id: false,
      name: true,
    },
    validate: (input) => ({
      name: validator.isEmpty(input.name) ? 'Group name is required' : '',
    }),
  },
};

function GroupPage() {
  const [modal, setModal] = useState(null);

  const [fetchTrigger, setFetchTrigger] = useState(false);

  const fetch = () => {
    setFetchTrigger((prev) => !prev);
  };

  const openModal = (title, defaultInput, api) => {
    setModal({ title, defaultInput, api });
  };

  const closeModal = () => {
    setModal(null);
  };

  const handleClickAdd = () => {
    openModal(
      pageUi.header.buttons[0].name,
      pageUi.form.default,
      pageUi.header.buttons[0].api
    );
  };

  const handleClickEdit = (item) => {
    openModal(
      `${pageUi.table.action.edit.title} #${item.id}`,
      { name: item.name },
      (input) => pageUi.table.action.edit.api(item, input)
    );
  };

  const handleClickDelete = (item) => {
    openModal(`${pageUi.table.action.delete.title} #${item.id}`, null, () =>
      pageUi.table.action.delete.api(item.id)
    );
  };

  return (
    <div className='h-100 d-flex flex-column'>
      <Header
        breadcrumb={pageUi.header.breadcrumb}
        description={pageUi.header.description}
        buttons={pageUi.header.buttons}
        onClickButtons={[handleClickAdd]}
      />
      <AdaptiveTable
        filter={pageUi.filter}
        table={pageUi.table}
        content={pageUi.content}
        onClickEdit={handleClickEdit}
        onClickDelete={handleClickDelete}
        fetchTrigger={fetchTrigger}
      />
      <EditorModal
        modalState={modal}
        onCloseModal={closeModal}
        editingForm={pageUi.form}
        onSuccess={fetch}
      />
    </div>
  );
}

export default GroupPage;
