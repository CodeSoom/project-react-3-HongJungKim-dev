import React from 'react';

import { Route, Switch, useHistory } from 'react-router-dom';

import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';

import HomePage from './HomePage';
import QuestionPage from './QuestionPage';
import ResultPage from './ResultPage';
import NotFoundPage from './NotFoundPage';

import { resetAnswer } from './slice';

const HomeButtonWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',
  top: '.5em',
  width: '100%',
  height: '100%',
});

const HomeButton = styled.button({
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  color: '#FFA800',
});

export default function App() {
  const dispatch = useDispatch();

  const history = useHistory();

  function handleClickHome() {
    dispatch(resetAnswer());
    history.push('/');
  }

  return (
    <>
      <HomeButtonWrapper>
        <HomeButton
          onClick={handleClickHome}
        >
          <h1>MOMOJJI</h1>
        </HomeButton>
      </HomeButtonWrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/question" component={QuestionPage} />
        <Route path="/result" component={ResultPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
