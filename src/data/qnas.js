const qnas = [
  {
    id: 1,
    contents: {
      question: '어느나라 음식?',
      answers: [
        { id: 1, description: '양식' },
        { id: 2, description: '중식' },
        { id: 3, description: '한식' },
        { id: 4, description: '동남아' },
        { id: 5, description: '일식' },
        { id: 6, description: '모두' },
      ],
    },
  },
  {
    id: 2,
    contents: {
      question: '재료는?',
      answers: [
        { id: 1, description: '밥' },
        { id: 2, description: '빵/튀김\n/전' },
        { id: 3, description: '면' },
        { id: 4, description: '떡/분식' },
        { id: 5, description: '육류/생선' },
        { id: 6, description: '모두' },
      ],
    },
  },
  {
    id: 3,
    contents: {
      question: '맛은?',
      answers: [
        { id: 1, description: '혈관 살찌는\n 느끼한 맛' },
        { id: 2, description: '내장 파괴\n 매운맛' },
        { id: 3, description: '뜨끈~한 맛' },
        { id: 4, description: '달달/\n단짠 맛' },
        { id: 5, description: '상큼/\n시원한 맛' },
        { id: 6, description: '모두' },
      ],
    },
  },
];

export default qnas;
