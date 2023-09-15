import './App.css';
import { useState } from 'react';
import ToggleSwicth from './component/ToggleSwitch';

function App() {
  const [toggleValue, setToggleValue] = useState(false);

  const handleToggleChange = (value) => {
    setToggleValue(value); 
  };

  return (
    <div className="App">
      <h1>Toggle Switch Button</h1>
      <ToggleSwicth defaultValue={false} onValueChange={handleToggleChange} rounded={false}/>
    </div>
  );
}

export default App;
