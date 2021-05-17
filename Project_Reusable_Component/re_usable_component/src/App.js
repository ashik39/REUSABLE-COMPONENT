// import logo from './logo.svg';
import { useState } from 'react';
import NumberField from './components/NumberField';
import TextField from './components/TextField';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  return (
    <div className="App">
      <div className="Form">
        <form>
          <TextField
            value={name}
            placeholder="Text"
            label="Text Field"
            name="name"
            onChange={setName}
          />
          <br />
          <NumberField
            value={number}
            placeholder="Number"
            label="Number Field"
            name="number"
            onChange={setNumber}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
