import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

describe('HomePage', () => {
  it('link to start page', () => {
    const { queryByText } = render((
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    ));

    expect(queryByText('MOMOJJI')).not.toBeNull();
  });
});
