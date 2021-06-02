import React from 'react';

const NumberField = ({
  value,
  label,
  name,
  placeholder,
  setvalue,
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
  } else {
    attributes.defaultValue = defaultValue;
  }

  return (
    <div className="form-group">
      {label && (
        <label>
          <h3>{label}</h3>
        </label>
      )}
      <input
        type="number"
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        {...attributes}
      />
      {errors[name] && <h4 className="red">{errors?.[name]?.message}</h4>}
    </div>
  );
};

export default NumberField;
