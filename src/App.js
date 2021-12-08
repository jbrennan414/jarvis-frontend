import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';
import Status from './Status';
import { useState } from 'react';

function App() {

  const [isConnected, setIsConnected] = useState("notConnected")

  function isUIDisabled(isUIDisabled) {
    setIsConnected(isUIDisabled)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Status isUIDisabled={isUIDisabled} />
        <h3>Jarvis Manager</h3>
        <h4>{isConnected}</h4>

        <img src={logo} className="App-logo" alt="logo" />
        <CustomButton name={"Start"} onClick={() => isUIDisabled} />
        <CustomButton name={"Stop"} onClick={() => isUIDisabled} />
        <CustomButton name={"Dock "} onClick={() => isUIDisabled}/>
      </header>
    </div>
  );
}

export default App;
