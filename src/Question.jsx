import React from 'react';

const initialState = {
  question: '분류를 선택하세요.',
  answers: [
    { id: 101, description: '한식' },
    { id: 102, description: '양식' },
    { id: 103, description: '일식' },
    { id: 104, description: '중식' },
    { id: 105, description: '동남아식' },
  ],
};

export default function Question({ contents = initialState, handleClick }) {
  const { question, answers } = contents;

  return (
    <>
      <h1>{question}</h1>
      <div>
        {answers.map((answer) => (
          <button
            key={answer.id}
            type="button"
            onClick={handleClick}
          >
            {answer.description}
          </button>
        ))}
      </div>
    </>
  );
}
