import logo from './logo.png';
import { Button } from 'antd';
import './App.css';
import axios from 'axios'
import { useState } from 'react'


function App() {
  const [profileData, setProfileData] = useState(null)

  function getResponse() {
    axios({
      method: "GET",
      url:"/profile",
    })
    .then((response) => {
      setProfileData(response.data.return)
      console.log(response.data.return)
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        }
    })
  }

  return (
    <div >
      <header className="App-header">
        <img src={logo} alt="logo" />
        <h2>Your Personalized Path to Nutritional Balance</h2>
        <Button type="primary" shape="round" onClick={getResponse}>Join the Healthy Eating Revolution</Button>
        <p>Response: {profileData}</p>
      </header>
    </div>
  );
}

export default App;
