import { useEffect, useState } from 'react';
import { useError } from '../../../contexts/ErrorContext';
import { useWait } from '../../../contexts/WaitContext';

function PropForm({ edit, modalOpenState, closeModal }) {
  const { name, default: defaultInput, validate, api } = edit;

  const [input, setInput] = useState(defaultInput);
  const [inputError, setInputError] = useState({});

  const { errorTrigger } = useError();
  const { startWait, endWait } = useWait();

  useEffect(() => {
    if (modalOpenState) {
      setInput(defaultInput);
      setInputError({});
    }
    // eslint-disable-next-line
  }, [modalOpenState]);

  const handleChangeInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const inputValidate = validate(input);
    setInputError(inputValidate);

    try {
      if (Object.values(inputValidate).every((el) => el === '')) {
        startWait();
        await api(input)
        closeModal();
      }
    } catch (err) {
      errorTrigger(err);
    } finally {
      endWait();
    }
  };

  return (
    <form
      className='row gy-3 justify-content-center align-items-center'
      onSubmit={handleSubmit}
    >
      {Object.keys(input).map((el) => (
        <div key={el} className='col-12'>
          <div className='col-4 fs-6 d-inline-block pt-1 pe-2 align-top'>
            {name[el] + ':'}
          </div>
          <div className='col-8 d-inline-block'>
            <input
              className={`form-control${inputError[el] ? ' is-invalid' : ''}`}
              type='text'
              value={input[el]}
              name={el}
              onChange={handleChangeInput}
            />
            <div className='invalid-feedback'>{inputError[el]}</div>
          </div>
        </div>
      ))}

      <button type='submit' className='col-4 btn btn-tertiary'>
        Submit
      </button>
    </form>
  );
}

export default PropForm;
