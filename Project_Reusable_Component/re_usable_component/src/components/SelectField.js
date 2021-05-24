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
  const attributes = {};
  if (register) {
    attributes.ref = register;
  }

  const handleChange = (e) => {
    if (setvalue) {
      setvalue(e.target.value);
    }
    return null;
  };

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
        onChange={(e) => handleChange(e)}
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
      {errors[name] && <h4 className="red">{errors?.[name]?.message}</h4>}
    </div>
  );
};
export default SelectField;
