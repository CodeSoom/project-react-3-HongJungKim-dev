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

    expect(queryByText('이런 메뉴 어때요?(랜덤추천)')).not.toBeNull();
    expect(queryByText('내가 먹고싶은건..(선택형 추천)')).not.toBeNull();
  });
});
