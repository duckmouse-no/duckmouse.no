import React from 'react';
import './button.css';

interface ButtonProps {
  label: string;
  type?: 'primary' | 'inactive';
}

export const Button = ({ label, type = 'primary' }) => {
  const getClassName = () => {
    return type === 'primary'
      ? 'button--primary bg-sky-300 pt-4 pb-4 pl-8 pr-8'
      : 'button--inactive bg-gray-300 pt-4 pb-4 pl-8 pr-8 cursor-default';
  };

  const className = getClassName();

  return <button className={className}>{label}</button>;
};
