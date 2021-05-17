// import logo from './logo.svg';
import TextField from './components/TextField';
import './App.css';
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

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
        </form>
      </div>
    </div>
  );
}

export default App;
