const qna = [
  {
    id: 1,
    contents: {
      question: '분류를 선택하세요',
      answers: [
        { id: 101, description: '한식' },
        { id: 102, description: '양식' },
        { id: 103, description: '일식' },
        { id: 104, description: '중식' },
        { id: 105, description: '동남아식' },
      ],
    },
  },
  {
    id: 2,
    contents: {
      question: '식사 유형을 선택하세요',
      answers: [
        { id: 201, description: '밥' },
        { id: 202, description: '빵' },
        { id: 203, description: '면' },
        { id: 204, description: '떡' },
        { id: 205, description: '기타' },
      ],
    },
  },
  {
    id: 3,
    contents: {
      question: '식자재 종류를 선택하세요',
      answers: [
        { id: 301, description: '해산물' },
        { id: 302, description: '육고기' },
        { id: 303, description: '야채' },
      ],
    },
  },
  {
    id: 4,
    contents: {
      question: '맛을 선택해주세요',
      answers: [
        { id: 401, description: '느끼한 맛' },
        { id: 402, description: '상큼한 맛' },
        { id: 403, description: '단 맛' },
        { id: 404, description: '매운맛' },
        { id: 405, description: '차가운 맛' },
      ],
    },
  },
];

export default qna;
