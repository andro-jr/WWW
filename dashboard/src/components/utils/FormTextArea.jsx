import React from 'react';

const FormTextArea = ({ label, placeholder, id, ...rest }) => {
  return (
    <div className={`flex flex-col-reverse w-1/2 `}>
      <textarea
        placeholder={placeholder}
        id={id}
        className='border-2 rounded-md p-2 border-black-25 focus:border-blue outline-none peer transition h-32'
        {...rest}
      />
      <label
        htmlFor={id}
        className='font-bold text-sm mb-1 text-black-60 peer-focus:text-blue transition'
      >
        {label}
      </label>
    </div>
  );
};

export default FormTextArea;
