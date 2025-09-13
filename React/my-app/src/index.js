import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, 
  document.getElementById('root')
);*/
// ReactDOM.render(<param1/>, param2) - Fr some reason this function is not working here
//param1 - name of the component to be rendered
//param2 - HTML node reference where component to be rendered

/* INFO
ReactDOM.render - to render an element/component to virtual DOM
React.StrictMode - helps developers to identify problems in app like unsafe lifecycles

Components reside in virtual DOM, available as nodes in actual DOM
Virtual DOM - abstraction of actual DOM. Code modifies virtual DOM. React internally updates actual DOM

Whenever a change happens in a react component, a new tree is created in virtual DOM. This si then updated
to actual DOM.
Virtual DOM enhances performance and efficiency
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
