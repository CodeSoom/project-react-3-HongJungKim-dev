import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import given from 'given2';

import ResultPage from './ResultPage';

import { pickRandom, increaseResultId } from './slice';

import { FoodImg } from './assets/image';

jest.mock('react-redux');
jest.mock('./assets/image');

describe('ResultPage', () => {
  const mockStore = configureStore(getDefaultMiddleware());
  const store = mockStore({});

  function renderResultPage() {
    return render((
      <MemoryRouter>
        <ResultPage />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    store.clearActions();

    useDispatch.mockImplementation(() => store.dispatch);

    useSelector.mockImplementation((selector) => selector({
      finalResultIdsSet: given.finalResultIdsSet,
      resultId: given.resultId,
      randomId: given.randomId,
    }));
  });

  it('renders ResultPage when `isOutOfFinalResultLen`', () => {
    given('finalResultIdsSet', () => [1, 2, 3]);
    given('resultId', () => 3);
    given('randomId', () => 0);

    const { queryByText, queryAllByText } = renderResultPage();

    expect(queryByText('이런 메뉴는 어때요?')).not.toBeNull();
    expect(queryAllByText(FoodImg[0].name)).not.toBeNull();
    expect(queryByText('공유하기')).not.toBeNull();
    expect(queryByText('다른 메뉴')).not.toBeNull();
    expect(queryByText('처음으로')).not.toBeNull();
  });

  it('renders ResultPage', () => {
    given('finalResultIdsSet', () => [1, 2, 3]);
    given('resultId', () => 0);

    const { queryByText, queryAllByText } = renderResultPage();

    expect(queryAllByText(FoodImg[0].name)).not.toBeNull();
    expect(queryByText('공유하기')).not.toBeNull();
    expect(queryByText('다른 메뉴')).not.toBeNull();
    expect(queryByText('처음으로')).not.toBeNull();
  });

  it('dispatches `pickRandom`', () => {
    given('finalResultIdsSet', () => [1, 2, 3]);
    given('resultId', () => 3);
    given('randomId', () => 0);

    const { getByText } = renderResultPage();

    fireEvent.click(getByText('다른 메뉴'));

    const actions = store.getActions();

    expect(actions[0]).toEqual(pickRandom());
  });

  it('dispatches `increaseResultId`', () => {
    given('finalResultIdsSet', () => [1, 2, 3]);
    given('resultId', () => 1);

    const { getByText } = renderResultPage();

    fireEvent.click(getByText('다른 메뉴'));

    const actions = store.getActions();

    expect(actions[0]).toEqual(increaseResultId());
  });
});
