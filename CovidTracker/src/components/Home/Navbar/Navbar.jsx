import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import icon from '../../../assets/1.png'
import { getAuth, onAuthStateChanged,signOut } from "firebase/auth";


const Navbar = ({ userType }) => {
  let navigate = useNavigate();
  const auth = getAuth();

  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true)
      } else {
        setIsLogin(false)
      }
    });
  }, [])


  return (
    <>
      <nav className="app__navbar flex__center section__padding">
        <img className="logo" src={icon} alt="logo" onClick={() => navigate("/")} />
        <ul>
          <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/survey")}>Survey</li>
          {!isLogin && (
            <>
              <li onClick={() => navigate("/login")}>Patient Login</li>
              <li onClick={() => navigate("/login")}>Doctor Login</li>
            </>
          )}
          { isLogin && <li onClick={() => signOut(auth)}>Logout</li> }
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
