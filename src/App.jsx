import React from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import styled from '@emotion/styled';

import HomePage from './HomePage';
import QuestionPage from './QuestionPage';
import ResultPage from './ResultPage';
import NotFoundPage from './NotFoundPage';

const HeaderWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  top: '.5em',
  width: '100%',
  height: '100%',
});

const Header = styled.header({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& a': {
    color: '#FFA800',
    textDecoration: 'none',
  },
});

export default function App() {
  return (
    <>
      <HeaderWrapper>
        <Header>
          <h1><Link to="/">MOMOJJI</Link></h1>
        </Header>
      </HeaderWrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/question" component={QuestionPage} />
        <Route path="/result" component={ResultPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
