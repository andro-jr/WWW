import React from 'react';

const StatusBadge = ({ status, children }) => {
  let classes;
  if (status === 'green') {
    classes = 'bg-statusGreen';
  } else if (status === 'red') {
    classes = 'bg-statusRed';
  } else {
    classes = 'bg-statusYellow';
  }
  return (
    <div
      className={`${classes} inline-block py-1 px-3 text-white rounded-xl text-xs bg-opacity-90 font-bold`}
    >
      {children}
    </div>
  );
};

export default StatusBadge;
