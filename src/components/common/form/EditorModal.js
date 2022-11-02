import { useEffect, useState } from 'react';
import { useError } from '../../../contexts/ErrorContext';
import { useWait } from '../../../contexts/WaitContext';
import Modal from '../../ui/Modal';

function EditorModal({ modalState, onCloseModal, editingForm, onSuccess }) {
  const [input, setInput] = useState({});
  const [inputError, setInputError] = useState({});

  const { errorTrigger } = useError();
  const { startWait, endWait } = useWait();

  useEffect(() => {
    if (modalState) {
      setInput(modalState.defaultInput);
      setInputError({});
    }
    // eslint-disable-next-line
  }, [modalState]);

  const handleChangeInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let inputValidate = [];
    if (input) {
      inputValidate = editingForm.validate(input);
      setInputError(inputValidate);
    }

    try {
      if (Object.values(inputValidate).every((el) => el === '')) {
        startWait();
        const res = await modalState.api(input);
        onCloseModal();
        res && onSuccess();
      }
    } catch (err) {
      errorTrigger(err);
    } finally {
      endWait();
    }
  };

  return (
    <Modal title={modalState?.title} openState={modalState} onClose={onCloseModal}>
      <form
        className='row gy-3 justify-content-center align-items-center'
        onSubmit={handleSubmit}
      >
        {input ? (
          <>
            {Object.keys(input).map((el) => (
              <div key={el} className='col-12'>
                <div className='col-4 fs-6 d-inline-block pt-1 pe-2 align-top'>
                  {editingForm.name[el] + ':'}
                </div>
                <div className='col-8 d-inline-block'>
                  <input
                    className={`form-control${
                      inputError[el] ? ' is-invalid' : ''
                    }`}
                    type='text'
                    value={input[el]}
                    name={el}
                    onChange={handleChangeInput}
                    disabled={editingForm.isEditable ? !editingForm.isEditable[el] : false}
                  />
                  <div className='invalid-feedback'>{inputError[el]}</div>
                </div>
              </div>
            ))}
            <button type='submit' className='col-4 btn btn-tertiary'>
              Submit
            </button>
          </>
        ) : (
          <>
            <div>
              <p>Attention!! Are you sure to delete this item?</p>
            </div>

            <button type='submit' className='btn btn-danger col-4 mx-2'>
              Delete
            </button>
            <button
              type='button'
              className='btn btn-light col-4 mx-2'
              onClick={onCloseModal}
            >
              Cancel
            </button>
          </>
        )}
      </form>
    </Modal>
  );
}

export default EditorModal;
