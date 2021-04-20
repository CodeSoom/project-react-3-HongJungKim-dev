import React from 'react';

import styled from '@emotion/styled';

import { useHistory } from 'react-router-dom';

const GridDiv = styled.div({
  display: 'grid',
  gridTemplateColumns: '64px 218px',
  gridTemplateRows: '56px',
  rowGap: '1em',
  columnGap: '1em',
  position: 'relative',
  top: '3em',
});

const BackButton = styled.button({
  fontSize: '1em',
  fontWeight: 'bold',
  color: '#FFFFFF',
  borderColor: 'transparent',
  backgroundColor: '#C6C6C6',
  borderRadius: '20px',
  boxShadow: '5px 5px 5px 5px #F4F4F4',
});

const NextButton = styled.button({
  fontSize: '1em',
  fontWeight: 'bold',
  color: '#FFFFFF',
  borderColor: 'transparent',
  backgroundColor: '#FFA800',
  borderRadius: '20px',
  boxShadow: '5px 5px 5px 5px #F4F4F4',
});

export default function NextButtonsContainer({
  pageId, handleClickNext,
}) {
  const isLastPage = (pageId + 1) !== 3;

  const history = useHistory();

  function handleClickBackHome() {
    history.push('/');
  }

  function handleClickResult() {
    history.push('/result');
  }

  return (
    <>
      <GridDiv>
        <BackButton
          type="button"
          onClick={handleClickBackHome}
        >
          뒤로
        </BackButton>

        {isLastPage
          ? (
            <NextButton
              type="button"
              onClick={handleClickNext}
            >
              다음으로
            </NextButton>
          )
          : (
            <NextButton
              type="button"
              onClick={handleClickResult}
            >
              제출하기
            </NextButton>
          )}
      </GridDiv>
    </>
  );
}
