import React from 'react';

import { FacebookShareButton } from 'react-share';

export default function ShareButton() {
  const sharedUrl = 'http://localhost:8080/result';

  return (
    <FacebookShareButton url={sharedUrl}>
      공유하기
    </FacebookShareButton>
  );
}
