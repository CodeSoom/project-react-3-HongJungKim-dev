import React from 'react';

import { useHistory } from 'react-router-dom';

export default function NextButtonsContainer({
  pageId, handleClickNext,
}) {
  const isLastPage = (pageId + 1) !== 3;

  const history = useHistory();

  function handleClickResult() {
    history.push('/result');
  }

  return (
    <>
      {isLastPage
        ? (
          <button
            type="button"
            onClick={handleClickNext}
          >
            다음
          </button>
        )
        : (
          <button
            type="button"
            onClick={handleClickResult}
          >
            제출
          </button>
        )}
    </>
  );
}
