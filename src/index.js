import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Fetch_Test from './Fetch/Fetch_Test';
import Menu from './Fetch/Menu';
import { BrowserRouter } from 'react-router-dom';






const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Menu/>

  </BrowserRouter>
)
 
reportWebVitals();
