import reducer, {
  saveAnswer,
  updateResult,
  increaseResultId,
  resetAnswer,
} from './slice';

import foods from './data/foods';

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
      context('when select all buttons', () => {
        it('saves answer', () => {
          const initialState = {
            id: 0,
            selectedAnswerIds: [],
            prevResults: [...foods],
            curResults: [],
            finalResultIdsSet: [],
          };

          const state = reducer(initialState, saveAnswer(6));
          const { curResults, selectedAnswerIds } = state;

          expect(curResults).toHaveLength(8);
          expect(selectedAnswerIds).toHaveLength(5);
        });
      });

      context('when select buttons', () => {
        it('saves answer', () => {
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

    describe('increaseResultId', () => {
      it('renders next img id', () => {
        const initialState = {
          resultId: 0,
        };

        const state = reducer(initialState, increaseResultId());
        const { resultId } = state;

        expect(resultId).toBe(1);
      });
    });

    describe('resetAnswer', () => {
      it('reset answer', () => {
        const initialState = {
          id: 3,
          resultId: 4,
          randomId: 1,
          prevResults: [1, 3],
          selectedAnswerIds: [1, 2],
          finalResultIdsSet: [2, 1, 4, 3],
        };

        const state = reducer(initialState, resetAnswer());
        const {
          id, resultId, randomId, selectedAnswerIds,
          prevResults, finalResultIdsSet,
        } = state;

        expect(id).toBe(0);
        expect(resultId).toBe(0);
        expect(randomId).toBe(0);
        expect(selectedAnswerIds).toStrictEqual([]);
        expect(prevResults).toStrictEqual([...foods]);
        expect(finalResultIdsSet).toStrictEqual([]);
      });
    });
  });
});
