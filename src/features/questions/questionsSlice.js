import { createSlice, createSelector } from "@reduxjs/toolkit";
import questionsData from "./questionsData";
import * as R from "ramda";
import _ from "lodash";

/* Question Slice */
const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: {
      byId: _.keyBy(questionsData, "id"),
      allIds: R.map(({ id }) => id, questionsData),
    },
    currentQuestionId: questionsData[0].id,
    answered: {
      correctIds: [],
      allIds: [],
    },
  },
  reducers: {
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
      // TODO: Do something if run out of unanswered questions
    },
    restart(state, action) {},
  },
});

/* Input Selectors */
const selectQuestions = (state) => state.questions;

/* Output Selectors */
export const selectCurrentQuestion = createSelector(
  [selectQuestions],
  (state) => state.questions.byId[state.currentQuestionId]
);
export const selectIsAnswered = createSelector([selectQuestions], (state) =>
  state.answered.allIds.includes(state.currentQuestionId)
);

// Extract the action creators object and the reducer
const { actions, reducer } = questionsSlice;
// Extract and export each action creator by name
export const { questionAnswered, nextQuestionRequested, restart } = actions;
// Export the reducer, either as a default or named export
export default reducer;
