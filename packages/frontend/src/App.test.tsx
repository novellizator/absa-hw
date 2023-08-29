import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders card validator heading', () => {
  render(<App />);
  const heading = screen.getByText(/Card Validator/i);
  expect(heading).toBeInTheDocument();
});

