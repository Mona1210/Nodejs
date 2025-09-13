import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UseEffectEx from './components/UseEffectEx';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginR from './components/LoginR';
import LandingR from './components/LandingR';
import NotFound from './components/NotFound';
import reducer from './components/Reducer';
import {createStore} from 'redux';
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode> 
 /* <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header/>}>
        <Route index element={<Contact/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Route>
    </Routes>
  </BrowserRouter>*/
  /*<BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginR/>}/>
        <Route index element={<LoginR/>}/>
        <Route path="/landing/:name/*" element={<LandingR/>}/>
        <Route path="*" element={<NotFound/>}/>
      
    </Routes>
  </BrowserRouter>*/
  
);
var store = createStore(reducer); // The reducer should be mentioned in createStore()
var store2 = applyMiddleware(thunk)(createStore)(reducer);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
