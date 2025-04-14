import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Receipe App/Styles/index.scss';
import './Receipe App/Styles/SignUp.scss';
import './Receipe App/Styles/Menu.scss';
import './Receipe App/Styles/SideBar.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './Receipe App/store/Store'
// import HomePage from './Receipe App/Pages/HomePage';
// import SignUp from './Receipe App/Pages/SignUp';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  //   {/* <HomePage /> */}
  // </React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
