import { createContext, useContext, useState } from 'react';

const ErrorContext = createContext();

function ErrorContextProvider({ children }) {
  const [error, setError] = useState(null);
  const [trigger, setTriger] = useState(false)

  const errorTrigger = (err) => {
    console.log(err)
    if (err.response?.data) {
      setError(err.response.data.message);
    } else {
      setError(err.message);
    }
    setTriger(prev => !prev)
  }

  return (
    <ErrorContext.Provider value={{ error, trigger, errorTrigger }}>
      {children}
    </ErrorContext.Provider>
  );
}

export default ErrorContextProvider;

function useError() {
  const ctx = useContext(ErrorContext);
  return ctx;
}

export { useError };
