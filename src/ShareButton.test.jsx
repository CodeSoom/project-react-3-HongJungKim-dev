import React from 'react';

import { render } from '@testing-library/react';

import ShareButton from './ShareButton';

describe('ShareButton', () => {
  it('renders ShareButton', () => {
    const { queryByText } = render(<ShareButton />);

    expect(queryByText('공유하기')).not.toBeNull();
  });
});
