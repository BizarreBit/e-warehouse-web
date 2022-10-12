import { Modal } from 'bootstrap';
import { useEffect, useRef, useState } from 'react';

function SignInPage() {
  const modalEl = useRef();
  const [modal, setModal] = useState(null);

  useEffect(() => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
  }, []);

  return (
    <div className='container-fluid' style={{ backgroundColor: 'white' }}>
      <div className='row vh-100'>
        <div className='col-12 col-lg-6 bg-primary d-flex align-items-center'>
          <div className='text-white mx-auto'>
            <div className='fs-1 fw-bold'>e-Warehouse</div>
            <div className='fs-5 pt-2'>
              A warehouse management app for your
              <br />
              e-commerce world
            </div>
          </div>
        </div>
        <div className='col-12 col-lg-6 d-flex align-items-center justify-content-center'>
          <form
            className='border border-1 shadow p-3 rounded w-75'
            style={{ maxWidth: '25rem' }}
          >
            <div className='text-primary fs-4 fw-bold text-center'>Sign in</div>
            <div className='mt-3'>
              <input
                type='text'
                className='form-control rounded h-13 is-invalid'
                placeholder='Email'
              />
              <div className='invalid-feedback'>feedback</div>
            </div>
            <div className='mt-3'>
              <input
                type='text'
                className='form-control rounded h-13 is-invalid'
                placeholder='Password'
              />
              <div className='invalid-feedback'>feedback</div>
            </div>
            <div className='mt-3 d-grid'>
              <button
                type='submit'
                className='btn btn-tertiary rounded h-12 fw-bold'
              >
                Log In
              </button>
            </div>
            <div className='mt-2 text-center'>
              <span className='mx-1'>Don't have an account?</span>
              <button
                type='button'
                className='text-primary fw-bold border-0 bg-transparent'
                data-bs-toggle='modal'
                data-bs-target='#staticBackdrop'
                onClick={() => modal.show()}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabIndex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
        ref={modalEl}
      >
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5
                className='modal-title text-primary fw-bold'
                id='staticBackdropLabel'
              >
                Sign Up
              </h5>
              <button
                type='button'
                className='btn-close'
                data-bs-dismiss='modal'
                aria-label='Close'
              ></button>
            </div>
            <div className='modal-body'>
              <form className='row gx-2 gy-3 justify-content-center'>
                <div className='col-6'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='First name'
                  />
                </div>
                <div className='col-6'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Last name'
                  />
                </div>
                <div className='col-12'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Email address'
                  />
                </div>
                <div className='col-12'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Password'
                  />
                </div>
                <div className='col-12'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='Confirm password'
                  />
                </div>

                <button type='submit' className='col-4 btn btn-tertiary'>
                  Sign up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
