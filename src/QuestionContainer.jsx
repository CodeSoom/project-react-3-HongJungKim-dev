import React from 'react';

import styled from '@emotion/styled';

import { IconImg } from './assets/image';

export default function QuestionContainer({
  pageId, contents, selectedAnswerIds,
  handleClickAnswer,
}) {
  const { answers } = contents;

  const Button = styled.button({
    fontSize: '1em',
    fontWeight: 'bold',
    borderColor: 'transparent',
    backgroundColor: 'transparent',
    borderRadius: '20px',
    boxShadow: '5px 5px 5px 5px #F4F4F4',
  });

  return (
    <>
      {answers.map(({ id, description }) => (
        <Button
          key={id}
          type="button"
          onClick={() => handleClickAnswer(id)}
        >
          <span>{description}</span>
          <img
            src={IconImg[pageId + 1][id - 1]}
            alt=""
          />
          {selectedAnswerIds.map((selectedId) => (
            `${id === selectedId ? '(V)' : ''}`
          ))}
        </Button>
      ))}
    </>
  );
}
