import { useEffect, useRef, useState } from 'react';
import { Modal as BsModal } from 'bootstrap';

function Modal({ title, openState, onClose, children }) {
  const modalEl = useRef();

  const [modal, setModal] = useState(null);

  useEffect(() => {
    const modalObj = new BsModal(modalEl.current);
    setModal(modalObj);
  }, []);

  useEffect(() => {
    if (openState) {
      return modal?.show();
    }
    modal?.hide();
  }, [modal, openState]);

  return (
    <div
      className='modal fade'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      tabIndex='-1'
      ref={modalEl}
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title text-primary fw-bold'>{title}</h5>
            <button type='button' className='btn-close' onClick={onClose} />
          </div>
          <div className='modal-body'>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
