import React from 'react';

import styled from '@emotion/styled';

export default function QuestionContainer({
  contents, selectedAnswerIds,
  handleClickAnswer,
}) {
  const { question, answers } = contents;

  const Button = styled.button({
    all: 'unset',
    backgroundColor: '#EAEAEA',
    borderRadius: '20px',
  });

  return (
    <>
      <h1>{question}</h1>
      <div>
        {answers.map(({ id, description }) => (
          <Button
            key={id}
            type="button"
            onClick={() => handleClickAnswer(id)}
          >
            {description}
            {selectedAnswerIds.map((selectedId) => (
              `${id === selectedId ? '(V)' : ''}`
            ))}
          </Button>
        ))}
      </div>
    </>
  );
}
