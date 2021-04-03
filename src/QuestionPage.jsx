import React from 'react';

import { Link } from 'react-router-dom';

import Question from './Question';

export default function QuestionPage() {
  return (
    <>
      <h1>questions</h1>
      <Question />
      <h1><Link to="/">previous</Link></h1>
      <h1><Link to="/result">next</Link></h1>
    </>
  );
}
