import React from 'react';

const FormInput = ({ placeholder, type, label, ...rest }) => {
  return (
    <div className='flex flex-col-reverse w-1/3'>
      <input
        type={type || 'text'}
        placeholder={placeholder}
        className='border-2 rounded-md p-2 border-black-25 focus:border-blue outline-none peer transition'
        {...rest}
      />
      <label
        htmlFor=''
        className='font-bold text-sm mb-1 text-black-60 peer-focus:text-blue transition'
      >
        {label}
      </label>
    </div>
  );
};

export default FormInput;
