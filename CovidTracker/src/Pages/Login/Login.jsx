import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css'
import {
  getAuth,
  signInWithEmailAndPassword, signOut
} from 'firebase/auth'

function Login() {
  let navigate = useNavigate();
  const auth = getAuth()

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handelForm = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, pass)
      .then(cred => {
        alert("Login Successful");
        navigate("/appointment");
      })
      .catch(err => {
        alert("Incorrect Credentials");
      })
    // navigate("/");
  }

  return (
    <div className='app__login flex__center'>
      <div className="loginForm-container flex__center">
        <p>Login</p>
        <form className='flex__center'>
          <div className='flex__justify'>
            <label id="email">Email</label>
            <input type="email" htmlFor="email" placeholder='Enter Your Email ID' name="email" required={true} value={email} onChange={(e)=> setEmail(e.target.value)} />
          </div>
          <div className='flex__justify'>
            <label id="password">Password</label>
            <input type="password" htmlFor="password" placeholder='Enter Password' name="password" required={true} value={pass} onChange={(e)=> setPass(e.target.value)} />
          </div>
          <button type='button' onClick={handelForm}>Login</button>
          <p>Don't have an account yet? <a href="/register" style={{ color: "#2BB9B9", marginTop: "1rem" }}>Create an account</a></p>
        </form>
      </div>
    </div>
  )
}

export default Login