import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  getAuth,
  createUserWithEmailAndPassword,
} from 'firebase/auth'

function Register() {
  let navigate = useNavigate();
  const auth = getAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handelForm = () => {
     createUserWithEmailAndPassword(auth, email, pass)
    .then(cred => {
      alert("Registration Successful");
      setName("");
      setEmail("");
      setPass("");
    })
    .catch(err => {
      console.log(err.message)
    })
    // navigate("/");
  }

  return (
    <div className='app__login flex__center'>
      <div className="loginForm-container flex__center">
        <p>Register</p>
        <form className='flex__center'>
          <div className='flex__justify'>
            <label id="email">Name</label>
            <input type="text" htmlFor="email" placeholder='Enter Your Name' name="name" required={true} value={name} onChange={(e)=> setName(e.target.value)} />
          </div>
          <div className='flex__justify'>
            <label id="email">Email</label>
            <input type="email" htmlFor="email" placeholder='Enter Your Email ID' name="email" required={true} value={email} onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div className='flex__justify'>
            <label id="password">Password</label>
            <input type="password" htmlFor="password" placeholder='Enter Password' name="password" required={true} value={pass} onChange={(e)=> setPass(e.target.value)} />
          </div>
          <button type='button' onClick={handelForm}>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default Register