import React, { useState } from 'react';
import { IconInput } from './input-controls';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSignInAlt, faKey , faAt } from '@fortawesome/free-solid-svg-icons'
import {useDispatch,useSelector} from 'react-redux';
import {login} from '../store/user-actions';
import If from './if';
import Loading from './loading';
import * as ActionNames from '../store/action-names';


const Component = (props) => {

    const [loginUser, setLoginUser] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState(null);
    //const history = useHistory();

    const status=useSelector(state=>state.status);
    console.log('status',status);

    //get redux dispatch
    const dispatch=useDispatch();


    const handleChange = (id, value) => {
        loginUser[id] = value;
        setLoginUser({ ...loginUser });
    }

    const handleLogin = async(e) => {
        e.preventDefault(); //don't send to server
        login(dispatch, loginUser);
    }

    return (
        <div>
            <h2>User Login</h2>
            <div className="row">
                <div className="col col-7">
                     <img className="login-image" src="/images/coverpage02.jpg" alt="" />
                </div>
                <div className="col col-5">
                    <form>
                        <IconInput value={loginUser.email} id="email" icon={faAt} placeholder="email address" onChange={handleChange} />
                        <IconInput value={loginUser.password} id="password" icon={faKey} placeholder="password" type="password" onChange={handleChange} />

                        <button onClick={handleLogin} type="submit" className='btn  btn-primary'>
                            <FontAwesomeIcon icon={faSignInAlt}/>
                             &nbsp;&nbsp;Login
                        </button>

                        <If condition={status.type===ActionNames.STATUS_WAIT}>
                            <Loading compact />
                        </If>
                        <If condition={status.type===ActionNames.STATUS_ERROR}>
                            <p className="text text-danger">
                                *
                                {status.error?.response.data.message}
                            </p>
                        </If>
                        
                    </form>
                </div>

            </div>
        </div>

    );
};

export default Component;