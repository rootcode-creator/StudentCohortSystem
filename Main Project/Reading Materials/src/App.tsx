
import React from 'react'
import Login from './pages/Login'

function App() {
  return (
    <div>
     
    <Login />
     
    </div>
  );
}

export default App;



/*
import './App.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useGoogleOneTapLogin } from '@react-oauth/google';

import { useStore } from './hooks/useStore';
import Profile from './components/Profile';
function App() {
  const { authData } = useStore();

  const setAuthData = useStore((state: any) => state.setAuthData);
  return (
    <div className='App'>
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
  );
}

export default App;
*/