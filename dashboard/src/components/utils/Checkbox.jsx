import React from 'react';

const Checkbox = ({ label, name, className }) => {
  return (
    <div className={`form-group flex items-center ${className}`}>
      <input type='checkbox' id={name} name={name} />
      <label htmlFor={name} className='font-bold text-sm'>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
