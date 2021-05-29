import React from 'react';

import styled from '@emotion/styled';

import { IconImg } from './assets/image';

const Button = styled.button(({ selected }) => ({
  position: 'relative',
  fontSize: '1em',
  fontWeight: 'bold',
  color: selected ? 'white' : '',
  borderColor: 'transparent',
  backgroundColor: selected ? '#FFA800' : 'transparent',
  borderRadius: '20px',
  boxShadow: '5px 5px 5px 5px #F4F4F4',
}));

const Span = styled.span({
  position: 'absolute',
  left: '.5em',
  top: '.5em',
  textAlign: 'left',
  color: '#505050',
  fontWeight: '900',
  fontSize: '18px',
});

const ImgDiv = styled.div({
  position: 'absolute',
  right: '.5em',
  bottom: '.5em',
});

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
          <Span>
            {description.split('\n').map((line) => (
              <span
                key={line}
              >
                {line}
                <br />
              </span>
            ))}
          </Span>
          <ImgDiv>
            <img
              src={IconImg[pageId + 1][id - 1]}
              alt=""
            />
          </ImgDiv>
        </Button>
      ))}
    </>
  );
}
