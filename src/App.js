import logo from './logo.svg';
import './App.css';
import CustomButton from './CustomButton';
import Jarvis from './Jarvis'

function App() {

  const [isConnected, setIsConnected] = useState("notConnected")

  function isUIDisabled(isUIDisabled) {
    setIsConnected(isUIDisabled)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Jarvis />
      </header>
    </div>
  );
}

export default App;
