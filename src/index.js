import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './app/main/apps/@history/@history';
import Routes from "./app/main/apps/routes/index";
import AppContext from './AppContext';

ReactDOM.render(

                <Router history={history}>
                    <Routes />
                </Router>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
