import React from 'react';

const TextField = ({ value, label, name, placeholder, onChange }) => (
  <div className="form-group">
    {label && (
      <label htmlFor="input-field">
        <h3>{label}</h3>
      </label>
    )}
    <input
      type="text"
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default TextField;
