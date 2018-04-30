import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import store from './Store';
import App from './Containers/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
     document.getElementById('app'));
registerServiceWorker();
