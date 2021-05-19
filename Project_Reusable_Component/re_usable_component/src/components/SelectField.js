import React from 'react';

const SelectField = ({
  name,
  data,
  setvalue,
  label,
  value,
  register,
  errors = {},
}) => {
  const attributes = { ref: register };

  return (
    <div>
      {label && (
        <label>
          <h3>{label}</h3>
        </label>
      )}
      <select
        name={name}
        className="form-select"
        value={value}
        onChange={(e) => setvalue(e.target.value)}
        {...attributes}
      >
        <option value="">Select</option>
        {data &&
          data.map((option) => (
            <option key={option.id} value={option.name}>
              {option.name}
            </option>
          ))}
      </select>
      {errors && <h4 className="red">{errors.message}</h4>}
    </div>
  );
};
export default SelectField;
