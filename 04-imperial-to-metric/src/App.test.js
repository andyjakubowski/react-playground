import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('renders welcome text', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});


