import React from 'react';

const SelectField = ({ data, onChange, label, value }) => (
  <div>
    {label && (
      <label>
        <h3>{label}</h3>
      </label>
    )}
    <select
      name="customSearch"
      className="form-select"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value={null}>Select Item</option>
      {data &&
        data.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
    </select>
  </div>
);
export default SelectField;
