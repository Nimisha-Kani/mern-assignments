import {createStore, combineReducers} from 'redux';
import {userReducer} from './user-reducer';
import {statusReducer} from './status-reducer';
import {authorReducer,authorsReducer} from './author-reducer';
import { bookReducer,booksReducer } from './book-reducer';


const config= ()=> combineReducers({
    status:statusReducer,
    user:userReducer,
    selectedAuthor:authorReducer,
    authors:authorsReducer,
    selectedBook: bookReducer,
    books:booksReducer
});


const createMyStore= () => createStore(
                    config(),
                    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
                    );

export default createMyStore;
