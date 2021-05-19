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
  const attributes = { ref: register };

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
        onChange={(e) => setvalue(e.target.value)}
        {...attributes}
      />
      {errors && <h4 className="red">{errors.message}</h4>}
    </div>
  );
};

export default TextField;
