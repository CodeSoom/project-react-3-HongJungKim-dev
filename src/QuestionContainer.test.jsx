import React from 'react';

import { render } from '@testing-library/react';

import given from 'given2';

import QuestionContainer from './QuestionContainer';

import qnas from '../fixtures/qnas';

jest.mock('react-redux');
jest.mock('./assets/image');

describe('QuestionContainer', () => {
  const handleClickAnswer = jest.fn();

  function renderQuestionContainer() {
    return render((
      <QuestionContainer
        pageId={0}
        contents={given.contents}
        selectedAnswerIds={given.selectedAnswerIds}
        handleClickAnswer={handleClickAnswer}
      />
    ));
  }

  beforeEach(() => {
    handleClickAnswer.mockClear();
  });

  it('renders QuestionConatiner', () => {
    const selectedAnswerIds = [1, 2, 3, 4, 5, 6];

    given('contents', () => qnas[0].contents);
    given('selectedAnswerIds', () => selectedAnswerIds);

    const { queryByText } = renderQuestionContainer();
    const { contents } = qnas[0];
    const { answers } = contents;

    answers.forEach(({ description }) => {
      expect(queryByText(description)).not.toBeNull();
    });
  });
});
