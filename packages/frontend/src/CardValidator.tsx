import React, { useState } from 'react';

export const CardValidator = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [validationResult, setValidationResult] = useState('');

  const validateCard = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/validate/${cardNumber}`);
      const data = await response.json();
      if (data.error) {
        setValidationResult(data.error)
      } else {
        if (data.valid) {
          setValidationResult('Valid card number.');
        } else {
          setValidationResult('Invalid card number.');
        }
      }
    } catch (error) {
      console.error('Error validating card:', error);
      setValidationResult('An error occurred while validating the card.');
    }
  };

  return (
    <div>
      <h1>Card Validator</h1>
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder="Enter card number"
      />
      <button onClick={validateCard}>Validate</button>
      <p>{validationResult}</p>
    </div>
  );
};
