import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import graph from './graph';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<graph />, document.getElementById('root'));
registerServiceWorker();
