import React from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import {Provider} from 'react-redux';
import createStore from './store'; //./store/index

import App from  './components/app';


ReactDOM.render((
                <Provider store={createStore()}>
                    <App title="Book's Web" />
                </Provider>
                ), 
                document.querySelector("#root"));