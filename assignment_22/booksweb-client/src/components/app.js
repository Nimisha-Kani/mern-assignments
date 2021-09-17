import React,{useEffect} from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AppHeader from './app-header';
import AppFooter from './app-footer';
import AppHome from './app-home';
import BookDetails from './book-details';
import BookList from './book-list';
import BookAdd from './book-add';
import NotFound from './not-found';
import BookEdit from './book-edit';
import Login from './user-login';
import Register from './user-register';
import AuthorManagerScreen from './author-manager-screen';
import {useDispatch} from 'react-redux';
import {getAllAuthors} from '../store/author-action';

const Component=({title})=>{

    const dispatch=useDispatch();
    useEffect(()=>{
        getAllAuthors(dispatch);
    },[]);
   
    return <div className='main'>
           

            <BrowserRouter>
                <AppHeader title={title} />
                <div className="main-body">
                    <Switch>
                        
                        <Route path="/" exact={true} >
                            <AppHome title="Book's Home"/>
                        </Route>
                        
                        <Route path="/book/list">
                            <BookList />
                        </Route>

                        <Route path="/book/add" component={BookAdd} />
                        
                        <Route path="/book/details/:isbn" >
                            <BookDetails  />
                        </Route>
                        <Route path="/book/edit/:isbn" >
                            <BookEdit  />
                        </Route>

                        <Route path="/author/manage" component={AuthorManagerScreen} />

                        <Route path="/user/signin" component={Login} />
                        <Route path="/user/signup" component={Register} />

                        <Route path="*" component={NotFound} />
                        
                    </Switch>
                </div>            
                <AppFooter copyright="conceptarchitect.in" url="http://conceptarchitect.in" />
            </BrowserRouter>           

            
        </div>;
};


export default Component;