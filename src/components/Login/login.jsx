import { Button } from '@material-ui/core'
import React from 'react'
import './login.css'
import {auth,provider} from '../../firebase'
import {actionTypes} from '../../reducer'
import { useStateValue } from '../../stateProvider'

function Login() {
    const [state,dispatch]=useStateValue()
    function signIn(){
      auth.signInWithPopup(provider)
      .then((res)=>{
          dispatch({
              type:actionTypes.SET_USER,
              user:res.user,
          })
          console.log(res);
      }).catch((err)=>alert(err.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/200px-Facebook_f_logo_%282019%29.svg.png" 
                alt=""
                />
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/392px-Facebook_Logo_%282019%29.svg.png" 
                alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
}

export default Login
