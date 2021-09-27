import { createStore, compose, combineReducers, applyMiddleware } from 'redux';
import { userReducer } from './user-reducer';
import { statusReducer } from './status-reducer';
import { authorReducer, authorsReducer } from './author-reducer';
import {logger,handleInvalidLogins,handlePromise} from './middlewares';
import * as ActionNames from './action-names';


const getReducers = () => combineReducers({
    status: statusReducer,
    user: userReducer,
    selectedAuthor: authorReducer,
    authors: authorsReducer,
});




//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const createMyStore = () => createStore(
    getReducers(),
    composeEnhancers(
        applyMiddleware(
                //logger(ActionNames.STATUS_ERROR, ActionNames.AUTHOR_UPDATE),
                handlePromise,
                handleInvalidLogins,
                
            )
    ));

export default createMyStore;
