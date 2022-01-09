import { createSlice, createSelector } from "@reduxjs/toolkit";
import questionsData from "./questionsData";
import * as R from "ramda";
import _ from "lodash";

const INITIAL_STATE = {
  started: false,
  questions: {
    byId: _.keyBy(questionsData, "id"),
    allIds: R.map(({ id }) => id, questionsData),
  },
  currentQuestionId: questionsData[0].id,
  answered: {
    correctIds: [],
    allIds: [],
  },
};

/* Question Slice */
const questionsSlice = createSlice({
  name: "questions",
  initialState: INITIAL_STATE,
  reducers: {
    quizStarted(state, _action) {
      state.started = true;
    },
    questionAnswered(state, action) {
      const { payload: selectedIndex } = action;
      const { currentQuestionId, questions, answered } = state;
      const currentQuestion = questions.byId[currentQuestionId];

      answered.allIds.push(currentQuestionId);
      if (selectedIndex === currentQuestion.correctIndex) {
        answered.correctIds.push(currentQuestionId);
      }
    },
    nextQuestionRequested(state, _action) {
      const {
        questions: { allIds: allQuestionIds },
        answered: { allIds: allAnsweredIds },
      } = state;
      const unanswered = _.difference(allQuestionIds, allAnsweredIds);
      if (unanswered.length > 0) {
        state.currentQuestionId = unanswered[0];
      }
    },
    restart(_state, _action) {
      return { ...INITIAL_STATE, started: true };
    },
  },
});

/* Input Selectors */
const selectQuestionsState = (state) => state.questions;
const selectQuestions = (state) => selectQuestionsState(state).questions;
const selectCurrentQuestionId = (state) =>
  selectQuestionsState(state).currentQuestionId;
const selectAnswered = (state) => selectQuestionsState(state).answered;

/* Output Selectors */
export const selectCurrentQuestion = createSelector(
  [selectQuestionsState],
  (state) => state.questions.byId[state.currentQuestionId]
);
export const selectIsAnswered = createSelector(
  [selectAnswered, selectCurrentQuestionId],
  (answered, currentQuestionId) => answered.allIds.includes(currentQuestionId)
);
export const selectStarted = createSelector(
  [selectQuestionsState],
  (state) => state.started
);
export const selectedOutOfQuestions = createSelector(
  [selectQuestions, selectAnswered],
  (questions, answered) => questions.allIds.length === answered.allIds.length
);

// Extract the action creators object and the reducer
const { actions, reducer } = questionsSlice;
// Extract and export each action creator by name
export const { quizStarted, questionAnswered, nextQuestionRequested, restart } =
  actions;
// Export the reducer, either as a default or named export
export default reducer;
