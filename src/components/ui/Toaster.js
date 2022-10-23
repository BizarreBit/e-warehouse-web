import { Toast } from 'bootstrap';
import { useEffect, useRef } from 'react';
import { useError } from '../../contexts/ErrorContext';

function Toaster() {
  const { error, trigger } = useError();
  const toastEl = useRef();

  useEffect(() => {
    if (error) {
      const toast = new Toast(toastEl.current);
      toast.show();
    }
  }, [error, trigger]);

  return (
    <div
      className='toast-container position-fixed p-3 start-50 bottom-0 translate-middle-x'
      style={{ zIndex: 2000 }}
    >
      <div
        className='toast align-items-center text-white bg-danger border-0'
        ref={toastEl}
      >
        <div className='d-flex'>
          <div className='toast-body'>{error}</div>
          <button
            type='button'
            className='btn-close btn-close-white me-2 m-auto'
            data-bs-dismiss='toast'
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Toaster;
