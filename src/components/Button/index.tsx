import React from 'react';
import './button.css';

interface ButtonProps {
  label: string;
}

export const Button = ({ label }) => (
  <button className='bg-sky-300 pt-4 pb-4 pl-8 pr-8'>{label}</button>
);
