import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import 'bootstrap/dist/css/bootstrap.min.css'; //checked in node_modules folder
import './app.css';
import createStore from './store';
import {Provider} from 'react-redux';


ReactDOM.render((
    <Provider store={createStore()}>
        
        <App/>
    </Provider>
),document.getElementById('root'));