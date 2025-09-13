// import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/* 2 types of components in react - 
1. Class based
2. Funcional

Functional - simple JS function which returns HTML elements
*/
function App() {
  return (
    <> 
    <h1 style={{color:"blue", fontFamily:"verdana"}}>Welcome to react</h1>
    <Typography variant="h4" gutterBottom>Hope you enjoy the course!</Typography>
    <button className={"button"}>Submit</button>
    <Button variant="contained" color="primary">Submit</Button>
    </>
  //  <Button variant="warning/success">Click here</Button> --react-bootstrap
  // <buton className="btn btn-success">Submit</buton> -- bootstrap button
  // <button className="button">Submit</button> -- normal button
  );
  // return <h1 style={{'color':'green', 'font-family':'Verdana'}}> Welcome </h1>
  // return <h1 style={{color:'green', fontFamily:'Verdana'}}> Welcome </h1> - camelcasing without ''

  // return React.createElement('h1', {}, 'Hello World!'); 
  // h1 - HTML element to be used
  // {} - attributes of the element
  //"Hello World" - Content to be appended to h1
}

export default App;
