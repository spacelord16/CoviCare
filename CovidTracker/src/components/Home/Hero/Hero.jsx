import React from 'react'
import "./Hero.css"
import { useNavigate } from "react-router-dom";

function Hero() {
  let navigate = useNavigate();

  return (
    <div className="mainhero flex__justify">
      <div>
        <button className='flex__justify'>
          <p onClick={() => navigate("/dashboard")} >COVID-19 Live</p>
          <p>&rarr;</p>
        </button>
      </div>
      <div>
        <span className='flex__center'>15M+</span>
        <span className='flex__center'>15M+</span>
        <span className='flex__center'>15M+</span>
      </div>
    </div>
  )
}

export default Hero