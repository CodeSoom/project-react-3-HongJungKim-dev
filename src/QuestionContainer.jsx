import React from 'react';

import styled from '@emotion/styled';

import { IconImg } from './assets/image';

const Button = styled.button(({ selected }) => ({
  fontSize: '1em',
  fontWeight: 'bold',
  borderColor: 'transparent',
  backgroundColor: selected ? '#FFA800' : 'transparent',
  borderRadius: '20px',
  boxShadow: '5px 5px 5px 5px #F4F4F4',
}));

export default function QuestionContainer({
  pageId, contents, selectedAnswerIds,
  handleClickAnswer,
}) {
  const { answers } = contents;

  function checkSelected(id) {
    const compId = { id: 0 };

    selectedAnswerIds.forEach((selectedId) => {
      if (selectedId === id) {
        compId.id = id;
      }
    });

    return compId.id === id;
  }

  return (
    <>
      {answers.map(({ id, description }) => (
        <Button
          key={id}
          type="button"
          onClick={() => handleClickAnswer(id)}
          selected={checkSelected(id)}
        >
          <span>{description}</span>
          <img
            src={IconImg[pageId + 1][id - 1]}
            alt=""
          />
        </Button>
      ))}
    </>
  );
}
