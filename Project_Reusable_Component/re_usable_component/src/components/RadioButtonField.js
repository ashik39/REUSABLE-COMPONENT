import React from 'react';

const RadioButtonField = ({
  data,
  label,
  name,
  setvalue,
  register,
  errors = {},
}) => {
  const attributes = { ref: register };

  return (
    <div className="form-group">
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
              onChange={(e) => setvalue(e.target.value)}
              {...attributes}
            />
            &nbsp;&nbsp;
            {label && (
              <label for={value}>
                <h4>{value}</h4>
              </label>
            )}
          </div>
        ))}
      {errors && <h4 className="red">{errors.message}</h4>}
      <br />
    </div>
  );
};

export default RadioButtonField;
