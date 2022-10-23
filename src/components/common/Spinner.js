import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useWait } from '../../contexts/WaitContext';

function Spinner() {
  const [fail, setFail] = useState(false);

  const { pathname } = useLocation();

  const { waiting } = useWait();

  useEffect(() => {
    if (waiting) {
      const timer = setTimeout(() => setFail(true), 10000);

      return () => {
        clearTimeout(timer);
        setFail(false);
      };
    }
  }, [waiting]);

  if (!waiting) {
    return;
  }

  return (
    <div
      className='d-flex justify-content-center align-items-center offcanvas-backdrop show'
      style={{ zIndex: 1100 }}
    >
      {!fail ? (
        <>
          <div className='spinner-border text-light'></div>
          <span className='text-light ms-3'>Please Wait</span>
        </>
      ) : (
        <div className='text-center'>
          <div className='text-light'>
            Can't connect to the server, try again later.
          </div>
          <a className='fw-bold text-light' href={pathname}>
            Refresh
          </a>
        </div>
      )}
    </div>
  );
}

export default Spinner;
