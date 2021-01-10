import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
require('dotenv').config();
require('./sass/main.scss');

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);
