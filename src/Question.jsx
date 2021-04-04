import React from 'react';

export default function Question({ contents, onClick }) {
  const { question, answers } = contents;

  return (
    <>
      <h1>{question}</h1>
      <div>
        {answers.map((answer) => (
          <button
            key={answer.id}
            type="button"
            onClick={onClick}
          >
            {answer.description}
          </button>
        ))}
      </div>
    </>
  );
}
