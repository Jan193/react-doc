import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/main';
import "./css/base.css"
import "./css/style.css"
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
