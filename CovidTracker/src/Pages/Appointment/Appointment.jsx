import React from 'react'
import "./Appointment.css"

const Appointment = () => {
  return (
    <div className='appt_container'>
      <h1>Patient Dashboard</h1>

      <div className='appointment'>
        <div>
          <h3>My Profile</h3>
          <a href="#">Update Profile</a>
        </div>
        <div>
          <h3>My Appointments</h3>
          <a href="#">View Appointment History</a>
        </div>
        <div>
          <h3>Book My Appointment</h3>
          <a href="#">Book Appointment</a>
        </div>
      </div>
    </div>
  )
}

export default Appointment