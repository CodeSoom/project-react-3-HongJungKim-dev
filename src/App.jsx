import React from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import styled from '@emotion/styled';

import HomePage from './HomePage';
import QuestionPage from './QuestionPage';
import ResultPage from './ResultPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  const Header = styled.header({
    textAlign: 'center',
    '& a': {
      color: '#FFA800',
      textDecoration: 'none',
    },
  });

  return (
    <>
      <Header>
        <h1><Link to="/">MOMOJJI</Link></h1>
      </Header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/question" component={QuestionPage} />
        <Route path="/result" component={ResultPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
