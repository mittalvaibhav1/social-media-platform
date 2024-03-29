import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth,provider} from './firebase';
import {actionTypes} from "./reducer";
import {useStateValue} from './StateProvider';
function Login() {
    const [{},dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(result => {
           dispatch({
               type:actionTypes.SET_USER,
               user: result.user,
           })
        })
        .catch((error)=>alert(error.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img alt="logo" src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"/>
                <img alt="brandname" src="https://seeklogo.net/wp-content/uploads/2016/09/facebook-logo-preview.png"/>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
