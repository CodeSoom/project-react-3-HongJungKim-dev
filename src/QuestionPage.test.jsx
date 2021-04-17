import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { getDefaultMiddleware } from '@reduxjs/toolkit';

import configureStore from 'redux-mock-store';

import QuestionPage from './QuestionPage';

import qnas from '../fixtures/qnas';

import { updateResult, saveAnswer } from './slice';

jest.mock('react-redux');
jest.mock('./assets/image');

describe('QuestionPage', () => {
  const mockStore = configureStore(getDefaultMiddleware());
  const store = mockStore({});

  function renderQuestionPage() {
    return render((
      <MemoryRouter>
        <QuestionPage />
      </MemoryRouter>
    ));
  }

  beforeEach(() => {
    useDispatch.mockImplementation(() => store.dispatch);

    useSelector.mockImplementation((selector) => selector({
      id: 0,
      contents: qnas[0].contents,
      selectedAnswerIds: [1, 2, 3],
      qnas,
    }));
  });

  it('dispatches `updateResult`', () => {
    const { getByText } = renderQuestionPage();

    fireEvent.click(getByText('다음으로'));

    const actions = store.getActions();

    expect(actions[0]).toEqual(updateResult());
  });

  it('dispatches `saveAnswer`', () => {
    const { getByText } = renderQuestionPage();

    const { answers } = qnas[0].contents;
    const { description, id } = answers[5];

    fireEvent.click(getByText(description));

    const actions = store.getActions();

    expect(actions[1]).toEqual(saveAnswer(id));
  });
});
