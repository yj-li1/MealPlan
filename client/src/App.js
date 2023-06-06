import logo from './logo.png';
import { Button } from 'antd';
import './App.css';
import axios from 'axios'
import { useState } from 'react'


function App() {
  const [response, setResponse] = useState(null)
  const [input, setInput] = useState('');

  function getResponse() {
    axios({
      method: "POST",
      url:"/",
      headers: {'Content-Type': 'application/json'},
      data: {"content": input}
    })
    .then((response) => {
      setResponse(response.data.content)
      console.log(response.data.content)
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
        <input type="text" id="input" value={input} onChange={(e) => setInput(e.target.value)}/>
        <p>Response: {response}</p>
      </header>
    </div>
  );
}

export default App;
