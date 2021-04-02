import React from 'react';

import { render } from '@testing-library/react';

import ResultPage from './ResultPage';

describe('ResultPage', () => {
  it('link to start page', () => {
    const { queryByText } = render(<ResultPage />);

    expect(queryByText('result')).not.toBeNull();
  });
});
