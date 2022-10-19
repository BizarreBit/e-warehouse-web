import { createContext, useContext, useState } from 'react';

const WaitContext = createContext();

function WaitContextProvider({ children }) {
  const [waiting, setWaiting] = useState(false);

  const startWait = () => {
    setWaiting(true);
  };

  const endWait = () => {
    setWaiting(false);
  };

  return (
    <WaitContext.Provider value={{ waiting, startWait, endWait }}>
      {children}
    </WaitContext.Provider>
  );
}

export default WaitContextProvider;

function useWait() {
  const ctx = useContext(WaitContext);
  return ctx;
}

export { useWait };
