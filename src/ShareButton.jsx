import React from 'react';

import { FacebookShareButton } from 'react-share';

export default function ShareButton() {
  const sharedUrl = 'https://codesoom.github.io/project-react-3-HongJungKim-dev/result';

  return (
    <FacebookShareButton url={sharedUrl}>
      공유하기
    </FacebookShareButton>
  );
}
