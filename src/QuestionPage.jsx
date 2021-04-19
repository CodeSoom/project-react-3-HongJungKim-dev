import React from 'react';

import styled from '@emotion/styled';

import { useDispatch, useSelector } from 'react-redux';

import QuestionContainer from './QuestionContainer';

import NextButtonsContainer from './NextButtonsContainer';

import Wrapper from './Wrapper';

import { updateResult, saveAnswer } from './slice';

import get from './utils';

const GridDiv = styled.div({
  display: 'grid',
  gridTemplateColumns: '141px 141px',
  gridTemplateRows: '111px 111px 111px',
  rowGap: '1em',
  columnGap: '1em',
  position: 'relative',
  top: '2em',
});

export default function QuestionPage() {
  const dispatch = useDispatch();

  const id = useSelector(get('id'));
  const selectedAnswerIds = useSelector(get('selectedAnswerIds'));
  const qnas = useSelector(get('qnas'));

  const { contents } = qnas[id];
  const { question } = contents;

  function handleClickNext() {
    dispatch(updateResult());
  }

  function handleClickAnswer(clickedId) {
    dispatch(saveAnswer(clickedId));
  }

  return (
    <>
      <Wrapper>
        <h1>{question}</h1>
        <GridDiv>
          <QuestionContainer
            pageId={id}
            contents={contents}
            handleClickAnswer={handleClickAnswer}
            selectedAnswerIds={selectedAnswerIds}
          />
        </GridDiv>
        <NextButtonsContainer
          pageId={id}
          handleClickNext={handleClickNext}
        />
      </Wrapper>
    </>
  );
}
