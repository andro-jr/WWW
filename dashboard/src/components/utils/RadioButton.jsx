import React from 'react';

const RadioButton = ({ label, id, name, ...rest }) => {
  return (
    <div>
      <input type='radio' id={id} name={name} {...rest} />
      <label for={id}>{label}</label>
    </div>
  );
};

export default RadioButton;
