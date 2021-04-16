import React from 'react';

import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import IconImg from './icons/icons';

const HomeWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
});

export default function HomePage() {
  return (
    <>
      <HomeWrapper>
        <img
          src={IconImg[0][0]}
          alt=""
        />
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
