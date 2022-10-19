import { useState } from 'react';
import validator from 'validator';
import { useAuth } from '../../contexts/AuthContext';
import { useError } from '../../contexts/ErrorContext';
import { useWait } from '../../contexts/WaitContext';

const defaultInput = {
  email: '',
  password: '',
};
const inputErrorMessage = {
  email: 'Email is required',
  password: 'Password is required',
};

function SigninForm() {
  const [input, setInput] = useState(defaultInput);
  const [inputError, setInputError] = useState({});

  const { errorTrigger } = useError();
  const { signin } = useAuth();
  const { startWait, endWait } = useWait();

  const handleChangeInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitSignin = async (e) => {
    e.preventDefault();
    const inputValidate = {
      email: validator.isEmail(input.email) ? '' : inputErrorMessage.email,
      password: validator.isEmpty(input.password)
        ? inputErrorMessage.password
        : '',
    };
    setInputError(inputValidate);

    try {
      if (Object.values(inputValidate).every((el) => el === '')) {
        startWait();
        await signin(input);
      }
    } catch (err) {
      errorTrigger(err);
    } finally {
      endWait();
    }
  };
  
  return (
    <form onSubmit={handleSubmitSignin}>
      <div className='text-primary fs-4 fw-bold text-center'>Sign in</div>
      <div className='mt-3'>
        <input
          type='text'
          className={`form-control${inputError.email ? ' is-invalid' : ''}`}
          placeholder='Email address'
          value={input.email}
          name='email'
          onChange={handleChangeInput}
        />
        <div className='invalid-feedback'>{inputError.email}</div>
      </div>
      <div className='mt-3'>
        <input
          type='password'
          className={`form-control${inputError.password ? ' is-invalid' : ''}`}
          placeholder='Password'
          value={input.password}
          name='password'
          onChange={handleChangeInput}
        />
        <div className='invalid-feedback'>{inputError.password}</div>
      </div>
      <div className='mt-3 d-grid'>
        <button type='submit' className='btn btn-tertiary fw-bold'>
          Sign In
        </button>
      </div>
    </form>
  );
}

export default SigninForm;
