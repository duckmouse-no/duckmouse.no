import React, { useState } from 'react';
import { validateEmail } from '../../utils/email';
import { addEmail } from '../../utils/firestore';

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
    <div>
      <input
        type='text'
        placeholder='Enter your email'
        value={email}
        onChange={handleInput}
      />
      <button onClick={handleSubmit}>Send inn</button>
      <span className='error'>{error}</span>
      {showSuccessMessage && (
        <span className='success'>
          Thanks, we will let you know when the product is ready!
        </span>
      )}
    </div>
  );
};
