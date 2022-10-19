import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { useAuth } from '../contexts/AuthContext';
import SigninPage from '../pages/SigninPage';
import { path } from '../config/path';
import { getAccessToken } from '../services/localStorage';
import { useWait } from '../contexts/WaitContext';
import { useEffect } from 'react';

function Router() {
  const token = getAccessToken();

  const { user } = useAuth();
  const { startWait, endWait } = useWait();

  useEffect(() => {
    if (token && !user) {
      startWait();
    } else {
      endWait();
    }
    // eslint-disable-next-line
  }, [token, user]);

  if (token && !user) {
    return;
  }

  return (
    <Routes>
      {!user ? (
        <>
          <Route path={path.signin} element={<SigninPage />} />
          <Route path='*' element={<Navigate to={path.signin} />} />
        </>
      ) : (
        <>
          <Route path='/' element={<Layout />}>
            <Route path={path.dashboard} element={<div>dashboard</div>} />
            <Route path={path.setting} element={<div>settings</div>} />
            <Route path={path.toCheck} element={<div>tocheck</div>} />
            <Route path={path.toPack} element={<div>topack</div>} />
            <Route path={path.toShip} element={<div>toship</div>} />
            <Route path={path.return} element={<div>returns</div>} />
            <Route path={path.all} element={<div>all</div>} />
            <Route path={path.item} element={<div>items</div>} />
            <Route path={path.family} element={<div>families</div>} />
            <Route path={path.group} element={<div>groups</div>} />
            <Route path={path.inbound} element={<div>groups</div>} />
            <Route path={path.customer} element={<div>customers</div>} />
            <Route path={path.shop} element={<div>shops</div>} />
          </Route>
          <Route path='*' element={<Navigate to={'/'} />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
