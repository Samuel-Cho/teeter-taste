import React from 'react';

export default function PageWrapper(props) {
  const background = props.path === 'searchResults'
    ? 'bg-pattens-blue'
    : props.path === ''
      ? 'bg-white'
      : props.path === 'search'
        ? 'bg-white'
        : 'bg-venice-blue';
  return (
    <div className={`background ${background}`}>
      {props.children}
    </div>
  );
}
