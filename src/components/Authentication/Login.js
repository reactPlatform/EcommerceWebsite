import React from 'react'
import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import {auth} from './Firebase';
import SignUp from './SignUp';
import AuthDetails from './AuthDetails';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { CartContext } from '../CartContext';
const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const history = useHistory();
  const {currentUserHandler} = useContext(CartContext);
  const signIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      console.log(userCredential);
      history.replace('/store');
      currentUserHandler(userCredential._tokenResponse.email);
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <form onSubmit={signIn}>
        <h2>Login to your Account</h2>
        <input type='email' 
        placeholder='Enter your email' 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input type='password' 
        placeholder='Enter your password' 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        ></input>
        <button type='submit'>Login</button>
      </form>
      <SignUp />
      <AuthDetails />
    </div>
  )
}

export default Login