import React from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import QuestionPage from './QuestionPage';
import ResultPage from './ResultPage';

export default function App() {
  return (
    <>
      <h1><Link to="/">뭐먹지?</Link></h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/question" component={QuestionPage} />
        <Route path="/result" component={ResultPage} />
      </Switch>
    </>
  );
}
