import React from 'react';

const TextField = ({
  value,
  label,
  name,
  placeholder,
  setvalue,
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
    <div className="form-group">
      {label && (
        <label>
          <h3>{label}</h3>
        </label>
      )}
      <input
        type="text"
        value={value}
        name={name}
        className="form-control"
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        {...attributes}
      />
      {errors && <h4 className="red">{errors.message}</h4>}
    </div>
  );
};

export default TextField;
