import { createSlice } from '@reduxjs/toolkit';

import foods from './data/foods';

import qnas from './data/qnas';

const ALL_CHOICE = 6;

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    qnas: [...qnas],
    id: 0,
    resultId: 0,
    randomId: 0,
    selectedAnswerIds: [],
    prevResults: [...foods],
    curResults: [],
    finalResultIdsSet: [],
  },

  reducers: {
    updateResult(state) {
      const {
        id, curResults,
      } = state;

      return {
        ...state,
        id: id + 1,
        selectedAnswerIds: [],
        prevResults: [...curResults],
        curResults: [],
        finalResultIdsSet: [...new Set(curResults.map((result) => result.id))],
      };
    },

    saveAnswer(state, {
      payload:
        clickedId,
    }) {
      const {
        id, selectedAnswerIds,
        prevResults, curResults,
      } = state;
      const to = [0, clickedId - 1, clickedId - 1];

      const allButtons = [1, 2, 3, 4, 5];

      if (clickedId === ALL_CHOICE) {
        return {
          ...state,
          curResults: [...curResults,
            ...prevResults.filter((result) => allButtons.map(
              (button) => button === result.attribute[id][to[id]],
            ))],
          selectedAnswerIds: [
            ...new Set([...selectedAnswerIds, ...allButtons]),
          ],
        };
      }

      return {
        ...state,
        curResults: [...curResults,
          ...prevResults.filter((result) => result.attribute[id][to[id]] === clickedId)],
        selectedAnswerIds: [
          ...new Set([...selectedAnswerIds, clickedId]),
        ],
      };
    },

    increaseResultId(state) {
      const { resultId } = state;

      return {
        ...state,
        resultId: resultId + 1,
      };
    },

    pickRandom(state) {
      const randomId = Math.floor(Math.random() * foods.length);

      return {
        ...state,
        randomId,
      };
    },

    resetAnswer(state) {
      return {
        ...state,
        qnas: [...qnas],
        id: 0,
        resultId: 0,
        randomId: 0,
        selectedAnswerIds: [],
        prevResults: [...foods],
        curResults: [],
        finalResultIdsSet: [],
      };
    },
  },
});

export const {
  saveAnswer,
  updateResult,
  increaseResultId,
  pickRandom,
  editAnswer,
  resetAnswer,
} = actions;

export default reducer;
