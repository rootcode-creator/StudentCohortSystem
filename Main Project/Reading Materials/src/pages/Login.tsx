import React from 'react'
import { render } from 'react-dom'

import { GoogleOAuthProvider, GoogleLogin, useGoogleLogin } from '@react-oauth/google';

import axios from 'axios';
import { useGoogleOneTapLogin } from '@react-oauth/google';
import { useStore } from '../hooks/useStore';
import Profile from '../components/Profile';


function Login () {
  
  const { authData } = useStore();

  const setAuthData = useStore((state: any) => state.setAuthData);
 

  return (

    <div>
      <div>
        <img className="wave" src="assets/img/wave.png" />
        <div className="container">
          <div className="img">
            <img src="assets/img/bg.svg" />
          </div>
          <div className="login-content">
            <form action="index.html">

              <img src="assets/img/avatar.svg" />
              <h2 className="title">Welcome</h2>
              <h3 className="title">Sign in with google</h3>
              <div className="social-media">

                <GoogleOAuthProvider clientId='368807546907-1bh1fe2vja15rvpotua7c9phnkpin7t2.apps.googleusercontent.com'>
                  <div>
                    <GoogleLogin
                      useOneTap
                      onSuccess={async (credentialResponse) => {
                        const response = await axios.post(
                          'http://localhost:3001/login',
                          {
                            token: credentialResponse.credential,
                          }
                        );
                        const data = response.data;

                        localStorage.setItem('authData', JSON.stringify(data));
                        setAuthData(data);
                      }}
                      onError={() => {
                        console.log('Login Failed');
                      }}
                    />
                  </div>

                  <Profile />
                </GoogleOAuthProvider>



              </div>
            </form>
          </div>
        </div>
      </div>

    </div>

  )

}

export default Login



