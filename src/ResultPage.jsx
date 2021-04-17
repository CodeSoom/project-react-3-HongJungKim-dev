import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { increaseResultId, pickRandom } from './slice';

import get from './utils';

import { FoodImg, FoodInfo } from './assets/image';

import Wrapper from './Wrapper';

import Button from './Button';

const ResetText = styled.button({
  fontSize: '1em',
  fontWeight: 'bold',
  borderColor: 'transparent',
  backgroundColor: '#FFA800',
  borderRadius: '20px',
  boxShadow: '5px 5px 5px 5px #F4F4F4',
});

const GridDiv = styled.div({
  display: 'grid',
  gridTemplateColumns: '141px 141px',
  gridTemplateRows: '111px',
  rowGap: '1em',
  columnGap: '1em',
});

export default function ResultPage() {
  const dispatch = useDispatch();

  const finalResultIdsSet = useSelector(get('finalResultIdsSet'));
  const resultId = useSelector(get('resultId'));
  const randomId = useSelector(get('randomId'));

  const len = finalResultIdsSet === undefined ? 0 : finalResultIdsSet.length;
  const isOutOfFinalResultLen = resultId === len;

  function handleClickOther() {
    dispatch(increaseResultId());
  }

  function handleClickOtherRandom() {
    dispatch(pickRandom());
  }

  return (
    <Wrapper>
      {
        isOutOfFinalResultLen
          ? (
            <>
              <h1>이런 메뉴는 어때요?</h1>
              <img
                src={FoodImg[randomId]}
                alt=""
              />
              <h1>
                {FoodInfo[randomId].name}
              </h1>
            </>
          )
          : (
            <>
              <img
                src={FoodImg[finalResultIdsSet[resultId] - 1]}
                alt=""
              />
              <h1>
                {FoodInfo[finalResultIdsSet[resultId] - 1].name}
              </h1>
            </>
          )
      }
      <GridDiv>
        <Button>공유하기</Button>
        {isOutOfFinalResultLen
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
          )}

      </GridDiv>
      <Link to="/">
        <ResetText>
          처음으로
        </ResetText>
      </Link>
    </Wrapper>
  );
}
