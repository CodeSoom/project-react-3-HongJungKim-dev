import React from 'react';

import { Link, useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';

import { IconImg } from './assets/image';

import { pickRandom, resetAnswer } from './slice';

const MainWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  top: '3em',
  width: '100%',
  height: '100%',
});

const HomeWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  top: '8em',
  width: '100%',
  height: '100%',
});

const RandomButton = styled.button({
  borderColor: 'transparent',
  backgroundColor: 'transparent',
});

export default function HomePage() {
  const dispatch = useDispatch();

  const history = useHistory();

  function handleClickRandom() {
    dispatch(resetAnswer());
    dispatch(pickRandom());
    history.push('/result');
  }

  return (
    <>
      <MainWrapper>
        <img
          src={IconImg[0][2]}
          alt=""
        />
      </MainWrapper>
      <HomeWrapper>
        <RandomButton
          onClick={handleClickRandom}
        >
          <img
            src={IconImg[0][0]}
            alt=""
          />
        </RandomButton>
        <Link to="/question">
          <img
            src={IconImg[0][1]}
            alt=""
          />
        </Link>
      </HomeWrapper>
    </>
  );
}
