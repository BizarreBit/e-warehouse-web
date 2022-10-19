import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/scss/bootstrap.scss';
import './style.scss';
// import './style.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ErrorContextProvider from './contexts/ErrorContext';
import AuthContextProvider from './contexts/AuthContext';
import WaitContextProvider from './contexts/WaitContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorContextProvider>
        <WaitContextProvider>
          <AuthContextProvider>
            <App />
          </AuthContextProvider>
        </WaitContextProvider>
      </ErrorContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
