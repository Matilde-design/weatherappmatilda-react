import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Container from "./Container"
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
<Container />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
