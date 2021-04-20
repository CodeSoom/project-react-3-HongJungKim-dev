import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import { IconImg } from './assets/image';

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

export default function HomePage() {
  return (
    <>
      <MainWrapper>
        <img
          src={IconImg[0][2]}
          alt=""
        />
      </MainWrapper>
      <HomeWrapper>
        <Link to="/result">
          <img
            src={IconImg[0][0]}
            alt=""
          />
        </Link>
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
