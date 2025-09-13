import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Components/Login';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {createStore, applyMiddleware, compose} from "redux";
import thunk from 'redux-thunk';
import rootReducer from './Reducers/RootReducer';
import {Provider} from "react-redux";
import Counter from './Components/Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));

let store = applyMiddleware(thunk)(createStore)(rootReducer);
console.log('store', JSON.stringify(store));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/counter" element={<Counter/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
