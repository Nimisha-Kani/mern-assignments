import React, { useState } from 'react';
import { LabeledInput,IconInput } from './input-controls';
import ValidationErrors from './validation-errors';
import {UserService} from '../services/user-service';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSignInAlt,faUserPlus, faKey ,faUser, faAt } from '@fortawesome/free-solid-svg-icons';
import {useSelector,useDispatch} from 'react-redux';
import * as ActionNames from '../store/action-names';
import {register} from '../store/user-actions';
import If from './if';
import Loading from './loading';



const UserRegistration = (props) => {

    const [user, setLoginUser] = useState({name:"", email: "", password: "", confirmPassword:"" });
    const [errors, setErrors] = useState(null);
    //const history = useHistory();

    const status=useSelector(state=>state.status);
    const dispatch=useDispatch();

    if(status.error)
        console.log('status.error',status.error.response.data);
    

    const handleChange = (id, value) => {
        user[id] = value;
        setLoginUser({ ...user });
    }

    const handleRegister = async(e) => {
        e.preventDefault();
        let newUser={...user};
        delete newUser.confirmPassword;
        console.log("registering",newUser);
        register(dispatch,newUser);
        
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
                        <IconInput value={user.name} id="name" icon={faUser} placeholder="Your Name" onChange={handleChange} />
                        <IconInput value={user.email} id="email" icon={faAt} placeholder="email address" onChange={handleChange} />
                        <IconInput value={user.password} id="password" icon={faKey} placeholder="password" type="password" onChange={handleChange} />
                        <IconInput value={user.confirmPassword} id="confirmPassword" icon={faKey} placeholder="confirm password" type="password" onChange={handleChange} />

                        <button onClick={handleRegister} type="submit" className='btn  btn-primary'>
                            <FontAwesomeIcon icon={faUserPlus}/>
                             &nbsp;&nbsp;Register
                        </button>
                        <If condition={status.type===ActionNames.STATUS_ERROR}>
                            <p className="text text-danger">{status.error?.response.data.message}</p>
                        </If>
                        <If condition={status.type===ActionNames.STATUS_WAIT}>
                            <Loading compact />
                        </If>
                        
                    </form>
                </div>

            </div>
        </div>

    );
};

export default UserRegistration;