import React, { useState } from 'react';
import { getClassName } from './classNameHelper';

interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'primary' | 'inactive';
  onClick: () => void;
}

export const Button = ({
  label,
  size = 'medium',
  type = 'primary',
  onClick,
}: ButtonProps) => {
  const [className, setClassName] = useState(getClassName(size, type));

  const handleMouseDown = () => {
    if (type != 'inactive') {
      setClassName(className + ' mt-4px -mb-4px drop-shadow-none');
    }
  };

  const handleMouseUp = () => {
    if (type != 'inactive') {
      setClassName(getClassName(size, type));
    }
  };

  return (
    <button
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onPointerLeave={handleMouseUp}
      onClick={onClick}
      className={className}
    >
      {label}
    </button>
  );
};
