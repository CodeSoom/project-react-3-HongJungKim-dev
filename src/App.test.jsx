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
    expect(queryByText('이런 메뉴 어때요?(랜덤추천)')).not.toBeNull();
    expect(queryByText('내가 먹고싶은건..(선택형 추천)')).not.toBeNull();
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
