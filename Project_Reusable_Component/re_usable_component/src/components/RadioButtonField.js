import React from 'react';

const RadioButtonField = ({ value, label, name, onChange }) => {
  const handleChange = (e) => {
    if (value) onChange(e.target.value);
  };
  return (
    <div className="form-group">
      <input
        class="form-check-input"
        type="radio"
        id={value}
        name={name}
        value={value}
        onChange={handleChange}
      />
      &nbsp;&nbsp;
      {label && (
        <label for={value}>
          <h4>{value}</h4>
        </label>
      )}
      <br />
    </div>
  );
};

export default RadioButtonField;
