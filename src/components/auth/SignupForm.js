import { useEffect, useState } from 'react';
import validator from 'validator';
import { useAuth } from '../../contexts/AuthContext';
import { useError } from '../../contexts/ErrorContext';
import { useWait } from '../../contexts/WaitContext';

const defaultInput = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const inputErrorMessage = {
  firstName: 'First name is required',
  lastName: 'Last name is required',
  email: 'Email is required',
  password: 'Password is required',
  confirmPassword: 'Password mismatch',
};

function SignupForm({ modalOpenState, closeModal }) {
  const [input, setInput] = useState(defaultInput);
  const [inputError, setInputError] = useState({});

  const { errorTrigger } = useError();
  const { signup } = useAuth();
  const { startWait, endWait } = useWait();

  useEffect(() => {
    setInputError({});
  }, [modalOpenState]);

  const handleChangeInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();

    const inputValidate = {
      firstName: validator.isEmpty(input.firstName)
        ? inputErrorMessage.firstName
        : '',
      lastName: validator.isEmpty(input.lastName)
        ? inputErrorMessage.lastName
        : '',
      email: validator.isEmail(input.email) ? '' : inputErrorMessage.email,
      password: validator.isEmpty(input.password)
        ? inputErrorMessage.password
        : '',
      confirmPassword:
        input.confirmPassword !== input.password
          ? inputErrorMessage.confirmPassword
          : '',
    };
    setInputError(inputValidate);

    try {
      if (Object.values(inputValidate).every((el) => el === '')) {
        startWait();
        await signup(input, closeModal);
      }
    } catch (err) {
      errorTrigger(err);
    } finally {
      endWait();
    }
  };

  return (
    <form
      className='row gx-2 gy-3 justify-content-center text-start'
      onSubmit={handleSubmitSignup}
    >
      <div className='col-6'>
        <input
          className={`form-control${inputError.firstName ? ' is-invalid' : ''}`}
          type='text'
          placeholder='First name'
          value={input.firstName}
          name='firstName'
          onChange={handleChangeInput}
        />
        <div className='invalid-feedback'>{inputError.firstName}</div>
      </div>
      <div className='col-6'>
        <input
          className={`form-control${inputError.lastName ? ' is-invalid' : ''}`}
          type='text'
          placeholder='Last name'
          value={input.lastName}
          name='lastName'
          onChange={handleChangeInput}
        />
        <div className='invalid-feedback'>{inputError.lastName}</div>
      </div>
      <div className='col-12'>
        <input
          className={`form-control${inputError.email ? ' is-invalid' : ''}`}
          type='text'
          placeholder='Email address'
          value={input.email}
          name='email'
          onChange={handleChangeInput}
        />
        <div className='invalid-feedback'>{inputError.email}</div>
      </div>
      <div className='col-12'>
        <input
          className={`form-control${inputError.password ? ' is-invalid' : ''}`}
          type='password'
          placeholder='Password'
          value={input.password}
          name='password'
          onChange={handleChangeInput}
        />
        <div className='invalid-feedback'>{inputError.password}</div>
      </div>
      <div className='col-12'>
        <input
          className={`form-control${
            inputError.confirmPassword ? ' is-invalid' : ''
          }`}
          type='password'
          placeholder='Confirm password'
          value={input.confirmPassword}
          name='confirmPassword'
          onChange={handleChangeInput}
        />
        <div className='invalid-feedback'>{inputError.confirmPassword}</div>
      </div>

      <button type='submit' className='col-4 btn btn-tertiary'>
        Sign up
      </button>
    </form>
  );
}

export default SignupForm;
