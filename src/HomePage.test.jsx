import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import HomePage from './HomePage';

jest.mock('./assets/image');

test('HomePage', () => {
  render((
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>
  ));
});
