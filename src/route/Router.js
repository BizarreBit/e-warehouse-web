import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import SignInPage from '../pages/SignInPage';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Layout />} />
      <Route path='/signin' element={<SignInPage />} />
      <Route path='*' element={<Navigate to={'/signin'} />} />
    </Routes>
  );
}

export default Router;
