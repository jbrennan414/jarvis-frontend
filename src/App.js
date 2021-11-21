import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Jarvis Manager</h3>

        <img src={logo} className="App-logo" alt="logo" />
        <CustomButton name={"Start"}/>
        <CustomButton name={"Stop"}/>
        <CustomButton name={"Dock "}/>

      </header>
    </div>
  );
}

export default App;
