import React from 'react';

import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export default function HomePage() {
  const Header = styled.header({
    textAlign: 'center',

    '& a': {
      color: '#FFFFFF',
      textDecoration: 'none',
      backgroundColor: '#FFA800',
      borderRadius: '20px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      position: 'absolute',
      width: '140px',
      height: '296px',
      left: '195px',
      top: '291px',
    },
  });

  const Header2 = styled.header({
    textAlign: 'center',

    '& h1': {
      color: '#FFFFFF',
      textDecoration: 'none',
      backgroundColor: '#FFA800',
      borderRadius: '20px',
      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
      width: '140px',
      height: '296px',
      left: '40px',
      top: '291px',
    },
  });

  return (
    <>
      <Header2>
        <h1>
          이런 메뉴 어때요?(랜덤추천)
        </h1>
      </Header2>
      <Header>
        <h1><Link to="/question">내가 먹고싶은건..(선택형 추천)</Link></h1>
      </Header>
    </>
  );
}
