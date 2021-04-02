import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import StartPage from './StartPage';

describe('StartPage', () => {
  it('link to start page', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <StartPage />
      </MemoryRouter>
    ));

    expect(queryByText('questions')).not.toBeNull();
    expect(queryByText('previous')).not.toBeNull();
    expect(queryByText('next')).not.toBeNull();
  });
});
