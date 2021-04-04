import React from 'react';

import { Link } from 'react-router-dom';

import Question from './Question';

import qna from './data/qna';

export default function QuestionPage() {
  const id = 0;
  const { contents } = qna[id];

  function handleClick() {
    // Todo : id를 1씩 증가시킵니다.
  }

  return (
    <>
      <h1>questions</h1>
      <Question
        contents={contents}
        onClick={handleClick}
      />
      <h1><Link to="/">previous</Link></h1>
      <h1><Link to="/result">next</Link></h1>
    </>
  );
}
