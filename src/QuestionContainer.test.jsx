import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import QuestionContainer from './QuestionContainer';

import qnas from './data/qnas';

describe('QuestionContainer', () => {
  const handleClickAnswer = jest.fn();

  const selectedAnswerIds = [1, 2, 3, 4, 5, 6];

  const initialState = {
    question: '어느나라 음식?',
    answers: [
      { id: 1, description: '양식' },
      { id: 2, description: '중식' },
      { id: 3, description: '한식' },
      { id: 4, description: '동남아' },
      { id: 5, description: '일식' },
      { id: 6, description: '아무거나' },
    ],
  };

  const FOOD = initialState.answers[0];

  function renderQuestionContainer(contents) {
    return render((
      <QuestionContainer
        contents={contents}
        selectedAnswerIds={selectedAnswerIds}
        handleClickAnswer={handleClickAnswer}
      />
    ));
  }

  it('renders QuestionConatiner', () => {
    qnas.forEach(({ contents }) => {
      const { queryByText, container } = renderQuestionContainer(contents);
      const { question, answers } = contents;

      expect(queryByText(question)).not.toBeNull();

      answers.forEach(({ description }) => {
        expect(container).toHaveTextContent(`${description}(V)`);
      });
    });
  });

  it('occures handleClick', () => {
    const { getByText } = renderQuestionContainer(initialState);

    fireEvent.click(getByText(`${FOOD.description}(V)`));

    expect(handleClickAnswer).toBeCalled();
  });
});
