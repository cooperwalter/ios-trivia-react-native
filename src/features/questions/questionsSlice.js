import { createSlice } from "@reduxjs/toolkit";
import questionsData from "./questionsData";
const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: questionsData,
    currentQuestionId: questionsData[0].id,
    answered: {
      correctIds: [],
      allIds: [],
    },
  },
  reducers: {
    questionAnswered(state, action) {},
    nextQuestionRequested(state, action) {},
    restart(state, action) {},
  },
});

// Extract the action creators object and the reducer
const { actions, reducer } = questionsSlice;
// Extract and export each action creator by name
export const { questionAnswered, nextQuestionRequested, restart } = actions;
// Export the reducer, either as a default or named export
export default reducer;
