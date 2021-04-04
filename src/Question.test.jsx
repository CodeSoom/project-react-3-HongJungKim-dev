import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import Question from './Question';

describe('Question', () => {
  const handleClick = jest.fn();

  const contents = {
    question: '분류를 선택하세요',
    answers: [
      { id: 101, description: '한식' },
      { id: 102, description: '양식' },
      { id: 103, description: '일식' },
      { id: 104, description: '중식' },
      { id: 105, description: '동남아식' },
    ],
  };

  function renderQuestion() {
    return render((
      <Question
        contents={contents}
        onClick={handleClick}
      />
    ));
  }
  it('renders Question', () => {
    const { queryByText } = renderQuestion();

    expect(queryByText('분류를 선택하세요')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
  });

  it('occures handleClick', () => {
    const { getByText } = renderQuestion();

    fireEvent.click(getByText('한식'));

    expect(handleClick).toBeCalled();
  });
});
