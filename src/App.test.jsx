import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App page', () => {
    const { qeuryByText } = render(<App />);

    expect(qeuryByText('Hello, hong jung')).not.toBeNull();
  });
});
