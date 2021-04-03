import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import App from './App';

function renderApp({ path }) {
  return render((
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  ));
}

describe('App', () => {
  it('renders home page', () => {
    const { queryByText } = renderApp({ path: '/' });

    expect(queryByText('뭐먹지?')).not.toBeNull();
    expect(queryByText('start')).not.toBeNull();
  });

  it('renders start page', () => {
    const { queryByText } = renderApp({ path: '/question' });

    expect(queryByText('questions')).not.toBeNull();
  });

  it('renders result page', () => {
    const { queryByText } = renderApp({ path: '/result' });

    expect(queryByText('result')).not.toBeNull();
  });
});
