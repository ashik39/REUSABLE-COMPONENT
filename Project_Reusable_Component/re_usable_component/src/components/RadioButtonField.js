import React from 'react';
import { useState } from 'react/cjs/react.development';

const RadioButtonField = ({
  options,
  label,
  name,
  defaultChecked = '',
  setvalue,
  register,
  errors = {},
}) => {
  const attributes = {};
  const [value, setValue] = useState(false);
  var check = true;
  if (register) {
    attributes.ref = register;
  }

  if (defaultChecked) {
    check = false;
  }

  const defaultValue = defaultChecked;

  const handleChange = (e) => {
    if (setvalue) {
      setvalue(e.target.value);
    }
    setValue(true);
    return null;
  };

  return (
    <div className="form-group">
      {label && (
        <label>
          <h3>{label}</h3>
        </label>
      )}
      <br />
      {options.map((option) => (
        <div>
          {check ? (
            <div>
              <input
                class="form-check-input"
                type="radio"
                id={option}
                name={name}
                value={option}
                onChange={(e) => handleChange(e)}
                {...attributes}
              />
              &nbsp;&nbsp;
              {name && (
                <label for={option}>
                  <h4>{option}</h4>
                </label>
              )}
            </div>
          ) : value ? (
            <div>
              <input
                class="form-check-input"
                type="radio"
                id={option}
                name={name}
                value={option}
                onChange={(e) => handleChange(e)}
                {...attributes}
              />
              &nbsp;&nbsp;
              {name && (
                <label for={option}>
                  <h4>{option}</h4>
                </label>
              )}
            </div>
          ) : (
            <div>
              <input
                class="form-check-input"
                type="radio"
                id={option}
                defaultChecked={defaultValue === option}
                onChange={(e) => handleChange(e)}
                {...attributes}
              />
              &nbsp;&nbsp;
              {name && (
                <label for={option}>
                  <h4>{option}</h4>
                </label>
              )}
            </div>
          )}
        </div>
      ))}

      {errors[name] && <h4 className="red">{errors?.[name]?.message}</h4>}
      <br />
    </div>
  );
};

export default RadioButtonField;
