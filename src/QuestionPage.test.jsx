import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import QuestionPage from './QuestionPage';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('QuestionPage', () => {
  function renderQuestionPage() {
    return render((
      <MemoryRouter>
        <QuestionPage />
      </MemoryRouter>
    ));
  }

  it('link to previous or next page', () => {
    const { queryByText } = renderQuestionPage();

    expect(queryByText('이전')).not.toBeNull();
  });
});
