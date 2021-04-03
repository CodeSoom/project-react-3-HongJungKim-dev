import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import QuestionPage from './QuestionPage';

describe('QuestionPage', () => {
  function renderQuestionPage() {
    return render((
      <MemoryRouter>
        <QuestionPage />
      </MemoryRouter>
    ));
  }
  it('renders question Page', () => {
    const { queryByText } = renderQuestionPage();

    expect(queryByText('questions')).not.toBeNull();
    expect(queryByText('분류를 선택하세요.')).not.toBeNull();
    expect(queryByText('동남아식')).not.toBeNull();
  });

  it('link to previous or next page', () => {
    const { queryByText } = renderQuestionPage();

    expect(queryByText('previous')).not.toBeNull();
    expect(queryByText('next')).not.toBeNull();
  });
});
