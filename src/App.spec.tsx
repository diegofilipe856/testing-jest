// React testing methods are imported
import '@testing-library/jest-dom';
import { render, screen} from '@testing-library/react';
import { test, expect } from '@jest/globals';

import App from './App'; // Component to be tested

// // Test block for the component
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByTestId('001');
  expect(linkElement).toBeInTheDocument();
});