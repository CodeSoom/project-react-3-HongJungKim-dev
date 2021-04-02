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

    expect(queryByText('start')).not.toBeNull();
    expect(queryByText('오늘 먹을 메뉴를 추천해드립니다')).not.toBeNull();
  });
});
