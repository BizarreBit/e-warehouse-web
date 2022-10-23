import { useState } from 'react';
import validator from 'validator';
import PropDisplay from '../common/card/PropDisplay';
import PropForm from '../common/card/PropForm';
import TitleCard from '../common/card/TitleCard';
import { useAuth } from '../../contexts/AuthContext';
import { updateDetailApi } from '../../api/user';
import Modal from '../ui/Modal';

function SettingText() {
  const { user, fetchMe, changeEmail, changePassword } = useAuth();

  const propCard = [
    {
      title: 'Profile Detail',
      prop: [
        { name: 'First Name', value: user.firstName },
        { name: 'Last Name', value: user.lastName },
      ],
      edit: {
        name: {
          firstName: 'First Name',
          lastName: 'Last Name',
        },
        default: {
          firstName: user.firstName,
          lastName: user.lastName,
        },
        validate: (input) => ({
          firstName: validator.isEmpty(input.firstName)
            ? 'First name is required'
            : '',
          lastName: validator.isEmpty(input.lastName)
            ? 'Last name is required'
            : '',
        }),
        api: async (input) => {
          await updateDetailApi(input);
          await fetchMe();
        },
      },
    },
    {
      title: 'ID',
      prop: [
        { name: 'Account ID', value: user.id },
        {
          name: 'Joined Date',
          value: new Date(user.createdAt).toLocaleDateString('en-UK'),
        },
        { name: 'Email Address', value: user.email },
      ],
      edit: {
        name: {
          password: 'Password',
          newEmail: 'New Email Address',
        },
        default: {
          password: '',
          newEmail: '',
        },
        validate: (input) => ({
          password: validator.isEmpty(input.password)
            ? 'password is required'
            : '',
          newEmail: validator.isEmail(input.newEmail)
            ? ''
            : 'New email address is required',
        }),
        api: (input) => changeEmail(input, () => closeModal(1)),
      },
    },
    {
      title: 'Password',
      prop: [
        {
          name: 'Last Changed',
          value:
            user.pwdChangedAt &&
            new Date(user.pwdChangedAt).toLocaleString('en-UK'),
        },
      ],
      edit: {
        name: {
          oldPassword: 'Old password',
          newPassword: 'New password',
          confirmPassword: 'Confirm password',
        },
        default: {
          oldPassword: '',
          newPassword: '',
          confirmPassword: '',
        },
        validate: (input) => ({
          oldPassword: validator.isEmpty(input.oldPassword)
            ? 'Old password is required'
            : '',
          newPassword: validator.isEmpty(input.newPassword)
            ? 'New password is required'
            : '',
          confirmPassword:
            input.confirmPassword !== input.newPassword
              ? 'Password mismatch'
              : '',
        }),
        api: (input) => changePassword(input, () => closeModal(2)),
      },
    },
  ];

  const [modals, setModals] = useState(propCard.map(() => false));

  const openModal = (idx) =>
    setModals((prev) => {
      const newState = [...prev];
      newState[idx] = true;
      return newState;
    });

  const closeModal = (idx) => {
    setModals((prev) => {
      const newState = [...prev];
      newState[idx] = false;
      return newState;
    });
  };

  return (
    <div className='flex-grow-1 d-grid'>
      {propCard.map((el, idx) => (
        <TitleCard
          key={el.title}
          title={el.title}
          bodyPadding={false}
          onClickEdit={() => openModal(idx)}
        >
          <PropDisplay prop={el.prop} />
          <Modal
            title={el.title}
            openState={modals[idx]}
            onClose={() => closeModal(idx)}
          >
            <PropForm
              edit={el.edit}
              modalOpenState={modals[idx]}
              closeModal={() => closeModal(idx)}
            />
          </Modal>
        </TitleCard>
      ))}
    </div>
  );
}

export default SettingText;
