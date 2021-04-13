import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import QuestionContainer from './QuestionContainer';

import qnas from './data/qnas';
import foods from './data/foods';
import NextButtonsContainer from './NextButtonsContainer';

export default function QuestionPage() {
  const ANY_CHOICE = 6;

  const [state, setState] = useState({
    id: 0,
    selectedAnswerIds: [],
    prevResults: [...foods],
    curResults: [],
    finalResultIdsSet: [],
  });

  const {
    id, selectedAnswerIds,
    prevResults, curResults,
  } = state;

  const { contents } = qnas[id];

  function handleClickNext() {
    setState({
      ...state,
      id: id + 1,
      selectedAnswerIds: [],
      prevResults: [...curResults],
      curResults: [],
      finalResultIdsSet: [...new Set(curResults.map((result) => result.id))],
    });
  }

  function handleClickAnswer(clickedId) {
    const to = [0, 0, clickedId - 1];
    const allButtons = [1, 2, 3, 4, 5];

    if (clickedId === ANY_CHOICE) {
      setState({
        ...state,
        curResults: [...curResults,
          ...prevResults.filter((result) => allButtons.map(
            (button) => button === result.attribute[id][to[id]],
          ))],
        selectedAnswerIds: [...new Set([...selectedAnswerIds, ...allButtons])],
      });
      return;
    }

    setState({
      ...state,
      curResults: [...curResults,
        ...prevResults.filter((result) => result.attribute[id][to[id]] === clickedId)],
      selectedAnswerIds: [...new Set([...selectedAnswerIds, clickedId])],
    });
  }

  return (
    <>
      <QuestionContainer
        contents={contents}
        handleClickAnswer={handleClickAnswer}
        selectedAnswerIds={selectedAnswerIds}
      />
      <NextButtonsContainer
        pageId={id}
        handleClickNext={handleClickNext}
      />
      <h1><Link to="/">이전</Link></h1>
    </>
  );
}
