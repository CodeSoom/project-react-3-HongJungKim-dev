import React from 'react';

import { render } from '@testing-library/react';

import Question from './Question';

describe('Question', () => {
  const handleClick = jest.fn();

  it('renders Question', () => {
    const contents = {
      question: '분류를 선택하세요.',
      answers: [
        { id: 101, description: '한식' },
        { id: 102, description: '양식' },
        { id: 103, description: '일식' },
        { id: 104, description: '중식' },
        { id: 105, description: '동남아식' },
      ],
    };
    const { queryByText } = render(<Question contents={contents} onClick={handleClick} />);

    expect(queryByText('분류를 선택하세요.')).not.toBeNull();
    expect(queryByText('동남아식')).not.toBeNull();
  });
});
