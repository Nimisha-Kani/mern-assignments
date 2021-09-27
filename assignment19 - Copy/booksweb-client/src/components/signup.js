import React, {useState}from 'react';
import {LabeledInput,LabeledTextArea} from './input-controls';

const Signup = ()=>{
    return(
        <div>
            <h2>User Registration</h2>
        
            <form>
                <div className="form-group">
                    <label htmlFor="first-name">First Name</label>
                    <input  type="text"          
                            id="first-name"
                            className="form-control"          
                            placeholder="first-name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastname">Last Name</label>
                    <input  type="text"          
                            id="last-name"
                            className="form-control"          
                            placeholder="last-name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input  type="text"          
                            id="email"
                            className="form-control"          
                            placeholder="email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone-no">Phone No</label>
                    <input  type="number"          
                            id="phone"
                            className="form-control"          
                            placeholder="phone no"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input  type="password"          
                            id="password"
                            className="form-control"          
                            placeholder="password"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password-confirm">Confirm Password</label>
                    <input  type="password"          
                            id="password-confirm"
                            className="form-control"          
                            placeholder="confirm password"
                    />
                </div>
                <button  type="submit" className='btn  btn-primary'>Signup</button>
            </form>
        </div>
    )
}

export default Signup;