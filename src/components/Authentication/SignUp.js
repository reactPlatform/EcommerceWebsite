import React from 'react'
import { useState } from 'react'
import {auth} from './Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
const SignUp = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const signUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
     .then((userCredential) => {
      console.log(userCredential);
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <form onSubmit={signUp}>
        <h2>Create Account</h2>
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
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default SignUp