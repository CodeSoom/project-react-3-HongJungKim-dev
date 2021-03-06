import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import qnas from './data/qnas';

import App from './App';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
jest.mock('react-redux');
jest.mock('./assets/image');

describe('App', () => {
  const dispatch = jest.fn();

  function renderApp({ path }) {
    return render((
      <MemoryRouter initialEntries={[path]}>
        <App />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    dispatch.mockClear();

    useDispatch.mockImplementation(() => dispatch);

    useSelector.mockImplementation((selector) => selector({
      id: 0,
      selectedAnswerIds: [1, 2, 3],
      qnas,
    }));
  });

  it('renders home page', () => {
    const { getByText } = renderApp({ path: '/' });

    fireEvent.click(getByText('MOMOJJI'));

    expect(mockHistoryPush).toBeCalledWith('/');
  });

  it('renders question page', () => {
    const { queryByText } = renderApp({ path: '/question' });

    expect(queryByText('어느나라 음식?')).not.toBeNull();
  });

  it('renders result page', () => {
    const { queryByText } = renderApp({ path: '/result' });

    expect(queryByText('공유하기')).not.toBeNull();
    expect(queryByText('다른 메뉴')).not.toBeNull();
    expect(queryByText('처음으로')).not.toBeNull();
  });
});
