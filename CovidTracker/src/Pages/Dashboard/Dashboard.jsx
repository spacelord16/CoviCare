import React from 'react'
import "./Dashboard.css"

function Dashboard() {
  return (
    <div>
      <iframe title="COVID-19" className="powerBI" src="https://app.powerbi.com/reportEmbed?reportId=e2cc6381-b1f7-4d29-bc77-e950d882b842&autoAuth=true&ctid=23035d1f-133c-44b5-b2ad-b3aef17baaa1&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXNvdXRoLWVhc3QtYXNpYS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldC8ifQ%3D%3D" frameborder="0" allowFullScreen="true"></iframe>
    </div>
  )
}

export default Dashboard