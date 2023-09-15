import './App.css';
import ToggleSwicth from './component/ToggleSwitch';

function App() {
  return (
    <div className="App">
      <h1>Toggle Switch Button</h1>
      <ToggleSwicth defaultValue={false}/>
    </div>
  );
}

export default App;
