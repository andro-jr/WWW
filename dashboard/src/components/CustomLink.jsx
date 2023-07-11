import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

const CustomLink = ({ to, children }) => {
  const resolvedPath = useResolvedPath(to);
  console.log(resolvedPath, 'resolvedPath');

  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  const isActiveClass = isActive ? 'activeNav' : '';

  return (
    <Link to={to} className={`${isActiveClass} py-4`}>
      {children}
    </Link>
  );
};

export default CustomLink;
