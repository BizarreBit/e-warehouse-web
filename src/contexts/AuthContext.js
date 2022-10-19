import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMeApi, signinApi, signupApi } from '../api/auth';
import {
  getAccessToken,
  removeAccessToken,
  setAccessToken,
} from '../services/localStorage';

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const setMe = async (token) => {
    if (token) {
      setAccessToken(token);
      const res = await getMeApi();
      setUser(res.data.user);
    }
  };

  const fetchMe = async () => {
    try {
      const token = getAccessToken();
      await setMe(token);
    } catch (err) {
      if (err.message !== 'Network Error') {
        removeAccessToken();
        setUser(null);
        navigate('/signin');
      }
    }
  };
  useEffect(() => {
    fetchMe();
    // eslint-disable-next-line
  }, []);

  const signup = async (input, onSuccess) => {
    const res = await signupApi(input);
    onSuccess && onSuccess();
    await setMe(res.data.token);
  };

  const signin = async (input) => {
    const res = await signinApi(input);
    await setMe(res.data.token);
  };

  const signout = () => {
    removeAccessToken();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, fetchMe, signup, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;

function useAuth() {
  const ctx = useContext(AuthContext);
  return ctx;
}

export { useAuth };
