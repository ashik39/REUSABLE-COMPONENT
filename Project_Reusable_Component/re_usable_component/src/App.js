// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import NumberField from './components/NumberField';
import TextField from './components/TextField';
import SelectField from './components/SelectField';
import RadioButtonField from './components/RadioButtonField';
import ModalPopup from './components/ModalPopup';

function App() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [select, setSelect] = useState('');
  const [radio, setRadio] = useState('');
  const [popup, setPopup] = useState(false);
  const [dataState, setDataState] = useState(false);

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

  const handleConfirm = () => {
    setDataState(true);
    setPopup(false);
  };

  const handleCancel = () => {
    setDataState(false);
    setPopup(false);
  };

  const handleSubmit = () => {
    setPopup(true);
  };
  return (
    <div className="App">
      {popup && (
        <ModalPopup state={popup}>
          <h2>Confirm Submission</h2>
          <br />
          <span>
            <button className="ModalBtn Left" onClick={handleCancel}>
              Cancel
            </button>
            <button className="ModalBtn Right" onClick={handleConfirm}>
              Confirm
            </button>
          </span>
        </ModalPopup>
      )}

      {dataState ? (
        <div className="data">
          <h2>Data</h2>
          <br />
          <h4>Text: {name}</h4>
          <h4>Number: {number}</h4>
          <h4>Select: {select}</h4>
          <h4>Radio: {radio}</h4>
        </div>
      ) : (
        <div className="center">
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
            <br />
            <h2>Radio Button Fields</h2>
            <RadioButtonField
              value="Male"
              label="Radio Button"
              name="gender"
              onChange={setRadio}
            />
            <RadioButtonField
              value="Female"
              label="Radio Button"
              name="gender"
              onChange={setRadio}
            />
            <RadioButtonField
              value="Others"
              label="Radio Button"
              name="gender"
              onChange={setRadio}
            />
          </form>
          <br />
          <button className="SubmitBtn" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
