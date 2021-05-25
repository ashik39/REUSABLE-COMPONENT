import React from 'react';

const SelectField = ({
  name,
  data,
  setvalue,
  placeholder,
  label,
  value,
  register,
  defaultValue,
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

  if (value) {
    attributes.value = value;
  }
  if (defaultValue) {
    attributes.defaultValue = defaultValue.value;
  }

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
        // value={value}
        onChange={(e) => handleChange(e)}
        {...attributes}
      >
        <option value="">{placeholder}</option>
        {data &&
          data.map((option) => (
            <option value={option.value} key={option.value}>
              {option.name}
            </option>
          ))}
      </select>
      {errors[name] && <h4 className="red">{errors?.[name]?.message}</h4>}
    </div>
  );
};
export default SelectField;
