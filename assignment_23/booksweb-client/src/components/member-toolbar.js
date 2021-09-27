import React,{useEffect} from 'react';
import {Link,useHistory} from 'react-router-dom';
import {UserService} from '../services/user-service';
import If from './if';
import {useSelector,useDispatch} from 'react-redux';
import {verifyUserLogin,logout} from '../store/user-actions';


const Component = (props) => {

    //get the data from redux-store
    const user= useSelector( state => state.user);
    const dispatch=useDispatch();

    useEffect(()=>{
        verifyUserLogin(dispatch);
    },[]);
    

    const userName= user? user.name:null; //UserService.instance.getUserName();
    const history = useHistory();
    const handleLogout=()=>{
        logout(dispatch);
        //history.push("/");
    }

    return (<ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {userName || "Guest"}
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <If condition={!userName} >
                    <Link  className="dropdown-item" to="/user/signin">Login</Link>
                    <Link  className="dropdown-item" to="/user/signup">Register</Link>
                </If>
                <If condition={userName}>
                    <Link  className="dropdown-item" to="/user/signout">Profile</Link>
                    <Link  className="dropdown-item" to="/user/signout">Favorities</Link>
                    <div  className="dropdown-divider"></div>
                    <button  className="dropdown-item" onClick={handleLogout}>Logout</button>
                </If>
                
            </div>
        </li>

    </ul>)
};

export default Component;