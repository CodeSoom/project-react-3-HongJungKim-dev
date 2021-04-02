import React from 'react';

import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
      <h2>오늘 먹을 메뉴를 추천해드립니다</h2>
      <h1><Link to="/start">start</Link></h1>
    </>
  );
}
