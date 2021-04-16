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

    expect(queryByText('MOMOJJI')).not.toBeNull();
  });

  it('renders question page', () => {
    const { queryByText } = renderApp({ path: '/question' });

    expect(queryByText('어느나라 음식?')).not.toBeNull();
  });

  it('renders result page', () => {
    const { queryByText } = renderApp({ path: '/result' });

    expect(queryByText('result')).not.toBeNull();
  });
});
