import { useState } from 'react';
import { useForm } from 'react-hook-form';
// import './App.css';
import TextField from './TextField';
import NumberField from './NumberField';
import SelectField from './SelectField';
//import RadioButtonField from './RadioButtonField';
// import ModalPopup from './components/ModalPopup';

function EditForm(props) {
  const [name, setName] = useState('Default Text');
  const [number, setNumber] = useState(100);
  const [select, setSelect] = useState({
    name: 'Mumbai',
    value: 'Mumbai',
  });
  //const [radio, setRadio] = useState({ id: 2, value: 'Female' });
  //   const [popupState, setPopupState] = useState(false);
  const [dataState, setDataState] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  //   const radioButtonData = [
  //     { name: 'Male', value: 'Male' },
  //     { name: 'Female', value: 'Female' },
  //     { name: 'Other', value: 'Other' },
  //   ];

  const selectData = [
    {
      name: 'Chennai',
      value: 'Chennai',
    },
    {
      name: 'Mumbai',
      value: 'Mumbai',
    },
    {
      name: 'Delhi',
      value: 'Delhi',
    },
  ];

  //   [
  //     {
  //       id: '1',
  //       name: 'Chennai',
  //     },
  //     {
  //       id: '2',
  //       name: 'Delhi',
  //     },
  //     {
  //       id: '3',
  //       name: 'Mumbai',
  //     },
  //     {
  //       id: '4',
  //       name: 'Kerala',
  //     },
  //   ];

  //   const handleConfirm = () => {
  //     setDataState(true);
  //     //      setPopupState(false);
  //   };

  //   const handleCancel = () => {
  //     setDataState(false);
  //     //      setPopupState(false);
  //   };

  //   const dataSet = (data) => {
  //     setName(data.name);
  //     setNumber(data.number);
  //     setSelect(data.select);
  //     setRadio(data.gender);
  //     setPopupState(true);
  //   };

  const submitButton = (data) => {
    console.log('data:', data);

    setName(data.name);
    setNumber(data.number);
    setSelect(data.select);
    setDataState(true);
    //setRadio(data.gender);
    //props.editedData(name);
    //dataSet(data);
  };
  return (
    <div className="App">
      <h2 className="white">EDIT FORM</h2>
      <div className="center">
        <form onSubmit={handleSubmit(submitButton)}>
          <TextField
            placeholder="Text"
            label="Text Field"
            name="name"
            defaultValue={name}
            register={register({
              required: 'The name field is required.',
            })}
            errors={errors}
          />
          <br />
          <NumberField
            placeholder="Number"
            label="Number Field"
            name="number"
            defaultValue={number}
            register={register({
              required: 'The Number field is required.',
              minLength: {
                value: 2,
                message: 'Enter minimum two numbers',
              },
            })}
            errors={errors}
          />
          <br />

          <SelectField
            label="Select Field"
            name="select"
            placeholder="Select Meee"
            defaultValue={select}
            data={selectData}
            register={register({
              required: 'The Select field is required.',
            })}
            errors={errors}
          />
          <br />

          {/* <RadioButtonField
            data={radioButtonData}
            label="Radio Button Field"
            name="gender"
            defaultChecked={radio}
            register={register({
              required: 'Select anyone option',
            })}
            errors={errors}
          /> */}

          <input type="submit" className="SubmitBtn" value="SUBMIT" />
        </form>
      </div>
      {dataState && (
        <div className="data">
          <h2>Data</h2>
          <br />
          <h4>Text: {name}</h4>
          <h4>Number: {number}</h4>
          <h4>Select: {select}</h4>
          {/*<h4>Radio: {radio}</h4> */}
        </div>
      )}

      {/* {popupState && (
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
      )} */}
    </div>
  );
}

export default EditForm;
