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
  const [popupState, setPopupState] = useState(false);
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
    setPopupState(false);
  };

  const handleCancel = () => {
    setDataState(false);
    setPopupState(false);
  };

  const dataSet = (data) => {
    setName(data.name);
    setNumber(data.number);
    setSelect(data.select);
    setRadio(data.gender);
    setPopupState(true);
  };

  const submitButton = (data) => {
    console.log('data:', data);
    dataSet(data);
  };
  return (
    <div className="App">
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
              register={register({
                required: 'The Number field is required.',
                minLength: {
                  value: 5,
                  message: 'Enter minimum five numbers',
                },
              })}
              errors={errors.number}
            />
            <br />

            <SelectField
              label="Select Field"
              name="select"
              data={selectData}
              register={register({
                required: 'The Select field is required.',
              })}
              errors={errors.select}
            />
            <br />

            <RadioButtonField
              data={radioButtonData}
              label="Radio Button Field"
              name="gender"
              register={register({
                required: 'Select anyone option',
              })}
              errors={errors.gender}
            />

            <input type="submit" className="SubmitBtn" value="SUBMIT" />
          </form>
          <br />
        </div>
      )}

      {popupState && (
        <ModalPopup state={popupState}>
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
    </div>
  );
}

export default App;
