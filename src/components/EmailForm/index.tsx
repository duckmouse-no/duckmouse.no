import React, { useState } from 'react';
import { validateEmail } from '../../utils/email';
import { addEmail } from '../../utils/firestore';
import { Button } from '../Button';

export const EmailForm = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (validateEmail(email)) {
      addEmail(email);
      setShowSuccessMessage(true);
    } else {
      setError('Invalid email address');
      setShowSuccessMessage(false);
    }
    setEmail('');
  };

  const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (error !== '') setError('');
    setEmail(evt.target.value);
  };

  return (
    <div className='mt-4 px-8'>
      <p className='text-gray-800 mb-2'>Meld deg på for å få oppdateringer:</p>
      <div className='flex justify-center flex-col sm:flex-row'>
        <input
          className='email-form mr-4 drop-shadow-btnA text-gray-600 p-2 w-full mb-2 sm:mb-0 sm:w-56'
          type='text'
          placeholder='_'
          value={email}
          onChange={handleInput}
        />
        <Button size='small' label='Send inn' onClick={handleSubmit} />
      </div>
      <span className='block mt-4 text-red-800'>{error}</span>
      {showSuccessMessage && (
        <span className='block mt-4'>Takk, vi holder deg oppdatert!</span>
      )}
    </div>
  );
};
