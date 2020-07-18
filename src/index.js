import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import './styles.css';
import Container from "./Container";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
<Container />
  </React.StrictMode>,
  document.getElementById('root')
);


serviceWorker.unregister();
