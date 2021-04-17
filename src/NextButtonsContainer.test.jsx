import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import NextButtonsContainer from './NextButtonsContainer';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('NextButtonsContainer', () => {
  const handleClickNext = jest.fn();
  const handleClickResult = jest.fn();

  function renderNextButtonsContainer(pageId) {
    return render((
      <NextButtonsContainer
        pageId={pageId}
        handleClickNext={handleClickNext}
        handleClickResult={handleClickResult}
      />
    ));
  }

  beforeEach(() => {
    mockHistoryPush.mockClear();
  });

  it('renders NextButtonsContainer', () => {
    const { queryByText } = renderNextButtonsContainer(0);

    expect(queryByText('다음으로')).not.toBeNull();
  });

  it('renders NextButtonsContainer with last page', () => {
    const { queryByText } = renderNextButtonsContainer(2);

    expect(queryByText('제출하기')).not.toBeNull();
  });

  it('click 다음으로', () => {
    const { getByText } = renderNextButtonsContainer(0);

    fireEvent.click(getByText('다음으로'));

    expect(handleClickNext).toBeCalled();
  });

  it('click 뒤로', () => {
    const { getByText } = renderNextButtonsContainer(2);

    fireEvent.click(getByText('뒤로'));

    expect(mockHistoryPush).toBeCalledWith('/');
  });

  it('click 제출하기', () => {
    const { getByText } = renderNextButtonsContainer(2);

    fireEvent.click(getByText('제출하기'));

    expect(mockHistoryPush).toBeCalledWith('/result');
  });
});
