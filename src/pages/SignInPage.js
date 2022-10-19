import { useState } from 'react';
import Modal from '../components/ui/Modal';

import SigninForm from '../components/auth/SigninForm';
import SignupForm from '../components/auth/SignupForm';

function SigninPage() {
  const [signupModal, setSignupModal] = useState(false);

  const openModal = () => {
    setSignupModal(true);
  };
  const closeModal = () => {
    setSignupModal(false);
  };

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
          <div
            className='border border-1 shadow p-3 rounded w-75'
            style={{ maxWidth: '25rem' }}
          >
            <SigninForm />

            <div className='mt-2 text-center'>
              <span className='mx-1'>Don't have an account?</span>
              <button
                type='button'
                className='text-primary fw-bold border-0 bg-transparent'
                onClick={openModal}
              >
                Sign up
              </button>
              <Modal
                title={'Sign Up'}
                openState={signupModal}
                onClose={closeModal}
              >
                <SignupForm
                  modalOpenState={signupModal}
                  closeModal={closeModal}
                />
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SigninPage;
