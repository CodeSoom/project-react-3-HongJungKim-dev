import reducer, {
  saveAnswer,
  updateResult,
} from './slice';

import foods from '../fixtures/foods';

describe('slice', () => {
  describe('reducers', () => {
    describe('updateResult', () => {
      it('update result', () => {
        const initialState = {
          id: 2,
          curResults: [
            { id: 3, answer: [[2], [3], [2, 3]] },
            { id: 6, answer: [[3], [3], [2, 3]] },
            { id: 3, answer: [[2], [3], [2, 3]] },
            { id: 6, answer: [[3], [3], [2, 3]] },
            { id: 2, answer: [[3], [1], [4]] },
          ],
          selectedAnswerIds: [2, 3, 4],
        };

        const state = reducer(initialState, updateResult());
        const { prevResults, finalResultIdsSet } = state;

        expect(prevResults).toHaveLength(5);
        expect(finalResultIdsSet).toHaveLength(3);
      });
    });

    describe('saveAnswer', () => {
      it('saves answer when select all buttons', () => {
        const initialState = {
          id: 0,
          selectedAnswerIds: [],
          prevResults: [...foods],
          curResults: [],
          finalResultIdsSet: [],
        };

        const state = reducer(initialState, saveAnswer(6));
        const { curResults, selectedAnswerIds } = state;

        expect(curResults).toHaveLength(7);
        expect(selectedAnswerIds).toHaveLength(5);
      });

      it('saves answer when select buttons', () => {
        const initialState = {
          id: 0,
          selectedAnswerIds: [],
          prevResults: [...foods],
          curResults: [],
          finalResultIdsSet: [],
        };

        const state = reducer(initialState, saveAnswer(3));

        expect(state.curResults).toHaveLength(2);
        expect(state.selectedAnswerIds).toHaveLength(1);
      });
    });
  });
});
