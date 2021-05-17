// import logo from './logo.svg';
import { useState } from 'react';
import NumberField from './components/NumberField';
import TextField from './components/TextField';
import SelectField from './components/SelectField';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [select, setSelect] = useState('');

  const data = [
    {
      id: '1',
      name: 'One',
    },
    {
      id: '2',
      name: 'Two',
    },
    {
      id: '3',
      name: 'Three',
    },
    {
      id: '4',
      name: 'Four',
    },
  ];

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
          <br />

          <SelectField
            label="Select Field"
            value={select}
            data={data}
            onChange={setSelect}
          />
        </form>
      </div>
    </div>
  );
}

export default App;
