import React from 'react';

const RadioButtonField = ({
  data,
  label,
  name,
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
      {data &&
        data.map((value) => (
          <div>
            <br />
            <input
              class="form-check-input"
              type="radio"
              id={value}
              name={name}
              value={value}
              onChange={(e) => handleChange(e)}
              {...attributes}
            />
            &nbsp;&nbsp;
            {value && (
              <label for={value}>
                <h4>{value}</h4>
              </label>
            )}
          </div>
        ))}
      {errors[name] && <h4 className="red">{errors?.[name]?.message}</h4>}
      <br />
    </div>
  );
};

export default RadioButtonField;
