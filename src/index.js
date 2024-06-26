import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Display from './components/Display';
import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
function Hello(name){
  return <div>
    <h1>Hello</h1>
    
  </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Display />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
