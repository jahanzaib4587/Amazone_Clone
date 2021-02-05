import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter } from 'react-router-dom';
import reactDom from 'react-dom';
import { StateProvider } from './Data_Layer/StateProvider';
import reducer, { initialState } from './Data_Layer/reducer';
ReactDOM.render(
  
  <React.StrictMode>
    <StateProvider intialState={initialState} reducer={reducer}>
       <App></App>
    </StateProvider>
   </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
