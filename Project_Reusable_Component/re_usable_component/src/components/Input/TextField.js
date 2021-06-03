import React from 'react';
import '../Style.css';

const TextField = ({
  type,
  value,
  label = '',
  name = '',
  placeholder = '',
  setvalue,
  register,
  defaultValue = '',
  errors = {},
}) => {
  const attributes = { type: type };
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
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        {...attributes}
      />
      {errors[name] && (
        <h6 className="text-danger">{errors?.[name]?.message}</h6>
      )}
    </div>
  );
};

export default TextField;
