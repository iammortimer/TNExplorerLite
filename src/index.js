import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Redirect} from 'react-router';

import './styles/main.scss';
import App from './App';

ReactDOM.render((<App />), document.getElementById('root'));

if (module.hot) {
    module.hot.accept('./App', function() {
        console.log('Reloading App!');
    });
}
