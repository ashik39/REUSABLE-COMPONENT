import { useState } from 'react';
import { useForm } from 'react-hook-form';
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
  const { register, handleSubmit, errors } = useForm();
  const radioButtonData = ['Male', 'Female', 'Other'];

  const selectData = [
    {
      id: '1',
      name: 'Chennai',
    },
    {
      id: '2',
      name: 'Delhi',
    },
    {
      id: '3',
      name: 'Mumbai',
    },
    {
      id: '4',
      name: 'Kerala',
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

  const submitButton = () => {
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
          <form onSubmit={handleSubmit(submitButton)}>
            <TextField
              placeholder="Text"
              label="Text Field"
              name="name"
              setvalue={setName}
              value={name}
              register={register({
                required: 'The name field is required.',
              })}
              errors={errors.name}
            />
            <br />
            <NumberField
              placeholder="Number"
              label="Number Field"
              name="number"
              setvalue={setNumber}
              value={number}
              register={register({
                required: 'The Number field is required.',
                pattern: {
                  value: /^\d{10,15}$/,
                  message: 'The mobile no must be between 10 and 15 digits.',
                },
              })}
              errors={errors.number}
            />
            <br />

            <SelectField
              label="Select Field"
              name="select"
              data={selectData}
              setvalue={setSelect}
              value={select}
              register={register({
                required: 'The Select field is required.',
              })}
              errors={errors.select}
            />
            <br />
            <h2>Radio Button Fields</h2>
            <RadioButtonField
              data={radioButtonData}
              label="Radio Button"
              name="gender"
              setvalue={setRadio}
              register={register({
                required: 'Select anyone option',
              })}
              errors={errors.gender}
            />

            <input type="submit" className="SubmitBtn" />
          </form>
          <br />
        </div>
      )}
    </div>
  );
}

export default App;
