import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { increaseResultId, pickRandom, resetAnswer } from './slice';

import get from './utils';

import { FoodImg, FoodInfo } from './assets/image';

import ShareButton from './ShareButton';

import Wrapper from './Wrapper';

import Button from './Button';

const HomeButton = styled.button({
  fontSize: '1em',
  fontWeight: 'bold',
  color: 'white',
  borderColor: 'transparent',
  backgroundColor: '#FFA800',
  borderRadius: '20px',
  boxShadow: '5px 5px 5px 5px #F4F4F4',
  width: '282px',
  height: '56px',
  position: 'relative',
  top: '5em',
});

const GridDiv = styled.div({
  display: 'grid',
  gridTemplateColumns: '141px 141px',
  gridTemplateRows: '111px',
  rowGap: '1em',
  columnGap: '1em',
  position: 'relative',
  top: '3em',
  fontWeight: 'bold',
});

const ShareDiv = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '1em',
  fontWeight: 'bold',
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  borderRadius: '20px',
  boxShadow: '5px 5px 5px 5px #F4F4F4',
});

export default function ResultPage() {
  const history = useHistory();

  const dispatch = useDispatch();

  const finalResultIdsSet = useSelector(get('finalResultIdsSet'));
  const resultId = useSelector(get('resultId'));
  const randomId = useSelector(get('randomId'));

  const len = finalResultIdsSet === undefined ? 0 : finalResultIdsSet.length;
  const isOutOfFinalResultLen = resultId === len - 1 || len === 0;

  function handleClickOther() {
    dispatch(increaseResultId());
  }

  function handleClickOtherRandom() {
    dispatch(pickRandom());
  }

  function handleClickHome() {
    dispatch(resetAnswer());
    history.push('/');
  }

  return (
    <Wrapper>
      {
        (isOutOfFinalResultLen === true)
          ? (
            <>
              <h1>이런 메뉴는 어때요?</h1>
              <Wrapper>
                <img
                  src={FoodImg[randomId]}
                  alt=""
                />
                <h1>
                  {FoodInfo[randomId].name}
                </h1>
              </Wrapper>
            </>
          )
          : (
            <>
              <Wrapper>
                <img
                  src={FoodImg[finalResultIdsSet[resultId] - 1]}
                  alt=""
                />
                <h1>
                  {FoodInfo[finalResultIdsSet[resultId] - 1].name}
                </h1>
              </Wrapper>
            </>
          )
      }
      <GridDiv>
        <ShareDiv>
          <ShareButton />
        </ShareDiv>
        {
          (isOutOfFinalResultLen === true)
            ? (
              <Button
                onClick={handleClickOtherRandom}
              >
                다른 메뉴
              </Button>
            )
            : (
              <Button
                onClick={handleClickOther}
              >
                다른 메뉴
              </Button>
            )
        }
      </GridDiv>
      <HomeButton onClick={handleClickHome}>
        처음으로
      </HomeButton>
    </Wrapper>
  );
}
