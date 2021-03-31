import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders App page', () => {
    const { queryByText } = render(<App />);

    expect(queryByText('Hello, hong jung')).not.toBeNull();
  });
});
