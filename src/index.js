import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from "./component/navbar/nav";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Nav />
    </>
);

reportWebVitals();
